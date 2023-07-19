import { cookies } from "next/dist/client/components/headers"
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { verify } from "jsonwebtoken"

export async function GET() {
  const handleCookie = cookies()

  const token = handleCookie.get("token")?.value
  
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { user } = verify(token, process.env.JWT_SECRET || 'secret') as UserTypes.UserToken

    if (!user) {
      throw new Error("Unauthorized")
    }

    const conversation = await prisma.historyConversation.findMany({
      where: {
        user: {
          id: user.id
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    return NextResponse.json(conversation)
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}