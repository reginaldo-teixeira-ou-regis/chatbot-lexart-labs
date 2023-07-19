'use client';
import { twMerge } from "tailwind-merge";
import Form from "./Form";
import { useState } from "react";
import Options from "@/components/Options";

export default function Interaction() {
  const [messages, setMessages] = useState<MessageTypes.MessageProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className="w-full flex flex-col items-center">
      <div className="bg-slate-500 md:max-w-[50%] w-full min-h-screen flex flex-col items-center justify-between">
        <section id="chatContainer" className="w-full h-full max-h-[calc(100vh-3.5rem)] overflow-y-auto p-3 scroll-d">
          {messages.map((message) => (
            <div key={message.userId} className={twMerge('bg-slate-600 flex flex-col rounded-md p-3 justify-start gap-2 w-full mb-3', message.sentBy === 'system' && 'bg-slate-700')}>
              <p className="text-white break-words" dangerouslySetInnerHTML={{ __html: message.message}}/>
              {
                message.options && (
                  <div className="flex flex-col gap-2 items-start">
                    {message.options.map((option) => (
                      <Options option={option} key={option.content} />
                    ))}
                  </div>
                )
              }
              <span className="text-xs text-gray-400">
                {`${new Date(message.datetime).getHours()}:${new Date(message.datetime).getMinutes()}`}
              </span>
            </div>
          ))}
          {isLoading && (
            <div className="bg-slate-700 flex flex-col rounded-md p-3 justify-start gap-2 w-full mb-3" >
            <p className="text-white break-words">Typing...</p>
          </div>
          )}
        </section>
        <Form
          setMessages={
            (message: MessageTypes.MessageProps) => setMessages((prevMessages) => ([...prevMessages, message]))
          }
          setIsLoading={setIsLoading}
          messages={messages}
        />
      </div>
    </main>
  )
}
