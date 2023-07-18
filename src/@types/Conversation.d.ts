declare namespace ConversationTypes { 
  interface ConversationProps {
    id: string;
    createdAt: string;
    userId: string;
    conversation: {
      sentBy: 'system' | 'user';
      message: string;
      datetime: string;
    }[]
  }
}