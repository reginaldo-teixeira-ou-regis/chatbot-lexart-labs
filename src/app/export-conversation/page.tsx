'use client';
import { useEffect, useState } from "react";
import { parse } from 'json2csv'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export default function ExportConversation() {
  const [data, setData] = useState<ConversationTypes.ConversationProps[]>([])
  useEffect(() => {
    (async () => {
      const dataResponse: ConversationTypes.ConversationProps[] = await fetch(`${API_URL}/api/conversation/export`).then((res) => res.json())
      setData(dataResponse)
    })()
  }, [])
  
  const downloadConversation = async (item: ConversationTypes.ConversationProps) => {
    const csvData = parse(item.conversation, {
      fields: Object.keys(item.conversation[0])
    })

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `conversation-${item.id}.csv`;
    a.click();

    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="bg-slate-500 h-screen text-white">
      <h1 className="flex flex-row justify-center text-2xl bg-slate-700 p-2">To export the conversation click Download</h1>
      <ul>
        {data.map((item, index) => (
          <li key={item.id} id={item.id} className="flex gap-3 bg-slate-900 p-3 rounded-md justify-center items-center mb-3 mx-3">
            <p>
              Conversation user #{index + 1} - {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}
            </p>
            <a href={`#${item.id}`} onClick={ (e) => downloadConversation(item)} className="p-2 bg-slate-700 hover:bg-slate-800 text-white rounded-md">Download</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
