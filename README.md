# Chatbot - Loan Information

The chatbot is a computer program designed to interact with humans through a chat interface. It utilizes artificial intelligence to understand and respond to user messages in an automated manner.

## Resources

- TypeScript: Extends JavaScript by adding static typing, enables error detection at compile-time, improving code robustness and maintainability.
- Next.js: A React framework that offers advanced features such as automatic routing, optimized page loading, pre-rendering, API support, and more.
- Prisma ORM: A database tool that helps reduce the complexity of database access and increases developer productivity.
- Tailwind CSS: A user interface (UI) design framework that makes it easy to create stylized interfaces efficiently.
- Tailwind-Merge: Efficiently merges Tailwind CSS classes in JS without style conflicts.
- Json Web Token: Used to authenticate requests in web applications and APIs, allowing stateless authentication and secure data sharing.

## Functionality

The Chatbot offers the following functionalities:

- Through dynamic interaction with the chatbot, users can register, log in, log out, and obtain more information about loans.
- Typing in the chatbot:
	* ###### `HELLO`: If the user is not registered or logged in, it prompts for their username and password dynamically to register or log into their account. If the user is already logged in, it simply greets them and suggests some interaction options.
	* ###### `I WANT`: It is willing to help the user and suggests an interaction to continue the conversation.
	* ###### `GOOD`: The chatbot thanks the user and asks if it can help with anything else, suggesting additional interaction possibilities.
	* ###### `GOODBYE`: Saves the conversation in the database and makes the conversation available for download in the same confirmation notice that the conversation was saved in the chatbot.
	* ###### `LOAN`: It offers 3 clickable options that open just below the clicked option, with relevant information about and a link just below each option, if the link is clicked it takes the user to a page outside the chatbot with relevant information about the subject referring to the information.
	* ###### `LOGOUT`: Logs the user out of their account.

- To download the chatbot conversation in development mode go to: http://localhost:3000/export-conversation, and in production mode go to: https://chatbot-lexart-labs.vercel.app/export-conversation.

## Pre-requisites

Make sure you have the following tools installed on your machine:

- Node.js
- npm (or yarn)

## Installation

Follow the steps below to set up the project on your machine:

1 - Clone this repository:
```bash
git clone //https://github.com/reginaldo-teixeira-ou-regis/chatbot-lexart-labs
```

2 - Access the project directory:
```bash
cd chatbot-lexart-labs
```

3 - Install the dependencies:
```bash
npm install
```

4 - Start the development server:
```bash
npm run dev
```

5 - Open your browser and go to http://localhost:3000 to view/use the chatbot.