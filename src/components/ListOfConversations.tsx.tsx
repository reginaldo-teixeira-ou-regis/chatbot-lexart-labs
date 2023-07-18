import React from 'react'

interface ConversationProps {
  conversations: {
    id: string,
    createdAt: string,
    conversation: {
      [key: string]: {
        message: string
        enviadaPor: 'chatbot' | 'user'
      }
    }
  }
}
  

function ListOfConversations({ conversations }: ConversationProps) {
  return (
    <main>
      <div>
        {conversations.createdAt}
      </div>
    </main>
  )
}

export default ListOfConversations