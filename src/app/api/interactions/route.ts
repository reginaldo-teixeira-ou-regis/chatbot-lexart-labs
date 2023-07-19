import { NextRequest, NextResponse } from "next/server";

const START_CONVERSATION_MESSAGES = 'hello,goodbye,good,i want'.split(',');

interface InteractionProps { 
  message: string;
  userId: string;
}

export async function POST(req: NextRequest) {
  const { message } = await req.json() as InteractionProps;
  if (!message) {
    return NextResponse.json({ error: "Missing message or user id" }, { status: 400 })
  }

  return NextResponse.json({ hello: "world" })
}