const START_CONVERSATION_MESSAGES = ['hello'];
const LOAN_MESSAGES = ['loan'];
const SAVE_CONVERSATION_MESSAGES = ['goodbye'];
const I_WANT_CONTEXT = ['i want'];
const GOOD = ['good']
const LOGOUT_MESSAGES = ['logout'];

export default function useHandleMessages() {
  return (message: string) => {
    const messageWords = message.split(' ');
    switch (true) {
      case messageWords.some((messageWord) => START_CONVERSATION_MESSAGES.includes(messageWord.toLowerCase())):
        return 'start';
      case messageWords.some((messageWord) => LOAN_MESSAGES.includes(messageWord.toLowerCase())):
        return 'loan';
      case messageWords.some((messageWord) => SAVE_CONVERSATION_MESSAGES.includes(messageWord.toLowerCase())):
        return 'save';
      case messageWords.some((messageWord) => {
        const normalizedWord = messageWord.toLowerCase().split(' ').join('');
        return I_WANT_CONTEXT[0].includes(normalizedWord);
      }):
        return 'iwant';
      case messageWords.some((messageWord) => GOOD.includes(messageWord.toLowerCase())):
        return 'good';
      case messageWords.some((messageWord) => LOGOUT_MESSAGES.includes(messageWord.toLowerCase())):
        return 'logout';
      default:
        return 'notUnderstand';
    }
  }
}