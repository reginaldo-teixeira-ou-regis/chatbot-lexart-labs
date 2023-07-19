const API_URL = process.env.NEXT_PUBLIC_API_URL
type SendMessageResult = Promise<MessageTypes.SystemMessageProps>
  
export default async function sendMessage(
  message: MessageTypes.MessageProps | MessageTypes.MessageProps[],
  route: string,
  require?: 'username' | 'password'
): Promise<MessageTypes.SystemMessageProps | void> {
  console.log('URLLLLLLLLLLLLLL', API_URL)
  if (require === 'username' && !Array.isArray(message)) {
    sessionStorage.setItem('username', message.message);
    const response = await fetch(`${API_URL}/api/interactions/${route}`, {
      method: 'POST',
      body: JSON.stringify({
        message: message.message,
        username: message.message
      }),
    }).then(res => res.json() as SendMessageResult).catch(err => console.log(err))
    return response;
  }

  if (require === 'password' && !Array.isArray(message)) {
    const username = sessionStorage.getItem('username');
    const response = await fetch(`${API_URL}/api/interactions/${route}`, {
      method: 'POST',
      body: JSON.stringify({
        message: message.message,
        password: message.message,
        username,
      }),
    }).then(res => res.json() as SendMessageResult).catch(err => console.log(err))
    return response;
  }

  const response = await fetch(`${API_URL}/api/interactions/${route}`, {
    method: 'POST',
    body: JSON.stringify(message),
  }).then(res => res.json() as SendMessageResult).catch(err => console.log(err))
  return response;
}