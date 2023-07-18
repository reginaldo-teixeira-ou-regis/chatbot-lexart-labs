'use client'
import { useState } from "react"
import Link from "next/link"

export default function Options({ option }: {option: MessageTypes.Option}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="flex flex-col text-white items-start">
      <button className="text-blue-500" onClick={() => setIsOpen((prev) => !prev)}><strong>{option.label}</strong></button>
      {isOpen && <div className="flex flex-col">
        {option.content}
        <Link href={option.href} className="text-blue-500 underline">
          {option.hrefLabel}
        </Link>
      </div>}
    </div>
  )
}
