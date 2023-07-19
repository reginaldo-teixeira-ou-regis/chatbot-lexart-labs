'use client'
import { useState } from "react"
import Link from "next/link"

export default function Options({ option }: {option: MessageTypes.Option}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="flex flex-col text-white items-start">
      <button className="text-blue-500" onClick={() => setIsOpen((prev) => !prev)}><strong>{option.label}</strong></button>
      {isOpen && <div className="flex flex-col bg-slate-500 rounded-lg p-2">
        {option.content}
        <Link href={option.href} target={option.target} className="text-blue-500 underline">
          {option.hrefLabel}
        </Link>
      </div>}
    </div>
  )
}
