import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/dist/client/components/headers";
import { verify } from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const messages = await req.json() as MessageTypes.MessageProps[];
  const handleCookies = cookies()
  const token = handleCookies.get("token")?.value || ''
  try {
    const { user } = verify(token, process.env.JWT_SECRET || 'secret') as UserTypes.UserToken
    console.log(user);
    
    if (!user || !user.id) {
      return NextResponse.json({
        message: "Hello, I'm your virtual assistant, to continue the conversation enter your username.",
        require: 'username',
        sentBy: 'system',
      });
    }
    const conv = await prisma.$transaction([prisma.historyConversation.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        conversation: JSON.parse(JSON.stringify(messages)),
      }
    })])
    return NextResponse.json({
      message: "Saved conversation!",
      sentBy: 'system',
    })
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "error",
      sentBy: 'system',
    });
  }
}