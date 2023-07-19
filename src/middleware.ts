import { NextRequest, NextResponse } from "next/server";
// import { sign, verify } from 'jsonwebtoken';
import { SignJWT as sign, jwtVerify as verify, JWTVerifyResult } from 'jose'
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

async function checkToken(handleCookie: RequestCookies, userToken: string) {
  try {
    const { payload } = await verify(userToken, new TextEncoder().encode(process.env.JWT_SECRET || 'secret'));

    return payload as UserTypes.UserToken;
  } catch (error) {
    console.error(error);
    handleCookie.set({
      name: 'token',
      value: '',
    });
    NextResponse.json({
      message: "Your session has expired, please enter your username.",
      require: 'username',
      sentBy: 'system',
    });
    return;
  }
}

export async function middleware(req: NextRequest) {
  const body = await req.json() as MessageTypes.MessageProps;
  const { message, username, password } = body;
  if (!message && !Array.isArray(body)) {
    return NextResponse.json({ error: 'Missing message!', message: 'Error interno!' }, { status: 400 });
  }
  const handleCookie = req.cookies;

  const userToken = handleCookie.get('token')?.value;

  if (userToken) {
    await checkToken(handleCookie, userToken);
    return;
  }

  if (!username) {
    return NextResponse.json({
      message: "Hello, I'm your virtual assistant, to continue the conversation enter your username.",
      require: 'username',
      sentBy: 'system',
    });
  }
}

export const config = {
  matcher: ['/api/interactions/:path*']
}
