import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const response = {
    message: `Sure, I can help you with loans information, type 'loan'.`
  };
  return NextResponse.json(response);
}