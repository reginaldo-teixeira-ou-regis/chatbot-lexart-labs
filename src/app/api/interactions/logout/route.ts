import { NextResponse } from "next/server"
import { cookies } from "next/dist/client/components/headers"

export async function POST() {
  const handleCookie = cookies()
  handleCookie.delete('token')
  return NextResponse.json({
    message: 'Successfully disconnected!',
    sentBy: 'system'
  })
}