import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const response = {
    message: `Thanks, can I help you with anything else? <br/> <br/>
    If you want to know more about loans type 'loan'. <br/> <br/>
    If you want to save our conversation type 'goodbye'. <br/> <br/>
    Type logout at any time to disconnect from your account.`
  };
  return NextResponse.json(response);
}