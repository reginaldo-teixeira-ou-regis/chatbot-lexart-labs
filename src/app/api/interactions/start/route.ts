import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/dist/client/components/headers';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { jwtVerify } from 'jose';

async function loginUser(user: UserTypes.UserProps, incomingPassword: string, handleCookie: ReadonlyRequestCookies) {
  const { username, password } = user
  const passwordMatch = await bcrypt.compare(incomingPassword, password as string);

  if (passwordMatch) {
    const token = sign({ user: { ...user, password: undefined } }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });
    handleCookie.set('token', token, {
      maxAge: 60 * 60 * 24 * 30,
    });
    return NextResponse.json({
      message: `Welcome back, ${username}!`,
      sentBy: 'system',
    });
  } else {
    return NextResponse.json({
      message: 'Wrong password, try again.',
      require: 'password',
      sentBy: 'system',
    });
  }
}

async function createUser(username: any, password: string | Buffer, handleCookie: ReadonlyRequestCookies) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
      },
    });

    const token = sign({ user }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });

    handleCookie.set('token', token, {
      maxAge: 60 * 60 * 24 * 30,
    });

    return NextResponse.json({
      token,
      message: `Hello ${user.username}! <br/>
      I'm your virtual assistant, I can help with general queries related to loans. Type loan to find out more! <br/> <br/>
      Type logout at any time to disconnect from your account.`,
      sentBy: 'system',
    });
  } catch (error) {
    return NextResponse.json({ error, message: 'Something went wrong!', sentBy: 'system' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json() as MessageTypes.MessageProps;
  const handleCookie = cookies();
  try {
    const userExists = await prisma.user.findUnique({
      where: { username: username },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });
  
    if (!password) {
      return NextResponse.json({
        message: `Your username has already been identified ${userExists ? 'in our database' : ''}, now enter your password.`,
        require: 'password',
        sentBy: 'system', 
      });
    }
  
    if (userExists && password) {
      return loginUser(userExists, password, handleCookie);
    }
  
    return createUser(username, password, handleCookie);
  } catch (error) {
    const token = handleCookie.get('token')

    if (token) {
      const { payload: userToken } = (await jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET || 'secret')) as unknown) as { payload: UserTypes.UserToken };
      return NextResponse.json({
        token,
        message: `Hello ${userToken.user.username}! <br/>
        I'm your virtual assistant, I can help with general queries related to loans. Type loan to find out more! <br/> <br/>
        Type logout at any time to disconnect from your account.`,
        sentBy: 'system',
        Headers: req.headers,
      });
    }
  }
}
