import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const START_CONVERSATION_MESSAGES = 'hello,goodbye,good,i want'.split(',');

interface InteractionProps { 
  message: string;
  userId: string;
}

export async function POST(req: NextRequest) {
  const { message, userId } = await req.json() as InteractionProps;
  if (!message) {
    return NextResponse.json({ error: "Missing message or user id" }, { status: 400 })
  }
  console.log(message);
  console.log('is start coversation', START_CONVERSATION_MESSAGES.includes(message.toLowerCase()));

  return NextResponse.json({ hello: "world" })
}