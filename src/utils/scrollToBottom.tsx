export default function scrollToBottom(elementId: string) {
  const chatContainer = document.getElementById(elementId)
  if (chatContainer) {
    setTimeout(() => {
      chatContainer.scrollTop = chatContainer.scrollHeight + 1000
    }, 100)
  }
}



