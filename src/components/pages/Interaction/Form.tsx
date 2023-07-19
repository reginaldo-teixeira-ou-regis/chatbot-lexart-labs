'use client'
import useHandleMessages from "@/hooks/useHandleMessages"
import sendMessage from "@/utils/sendMessage"
import scrollToBottom from "@/utils/scrollToBottom"
import { useState } from "react"

export default function Form({ setMessages, setIsLoading, messages }: {
  setMessages(message: MessageTypes.MessageProps): void,
  setIsLoading(isLoading: boolean): void,
  messages: MessageTypes.MessageProps[]
}) {
  const [message, setMessage] = useState('')
  const [required, setRequired] = useState<'username' | 'password' | undefined>()
  const handleMessage = useHandleMessages()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message) return alert('Digite uma mensagem!')

    let messageToSend: MessageTypes.MessageProps = {
      message,
      datetime: new Date().toISOString(),
      sentBy: 'user',
    }

    setMessages(messageToSend)
    setMessage('')

    let route = handleMessage(message);
    console.log(route);
    if (required) {
      route = 'start'
    }
    
    setIsLoading(true)
    scrollToBottom('chatContainer')

    const response = await sendMessage(route === 'save' ? messages : messageToSend, route, required)
    
    if (response) { 
      setMessages({
        message: response.message,
        options: response.options,
        datetime: new Date().toISOString(),
        sentBy: 'system',
      })
      scrollToBottom('chatContainer')
      setRequired(response.require)
      setIsLoading(false)
      return;
    }
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="h-14 w-full p-3 gap-3 flex items-center justify-center">
      <input
        value={message}
        type="text"
        onChange={({ target }) => setMessage(target.value)}
        className="bg-slate-700 w-full h-full text-white rounded px-2 pb-1"
      />
      <button
        className="bg-slate-700 h-full hover:bg-slate-950 transition-colors duration-200 active:bg-slate-300 text-white rounded px-2 pb-1 items-center"
        type="submit"
        disabled={messages.at(-1)?.sentBy === 'user'}
      >send</button>
    </form>
  )
}
