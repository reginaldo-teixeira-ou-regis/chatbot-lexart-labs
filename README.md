# Chatbot - Loan Information

Chatbot é um programa de computador projetado para interagir com seres humanos por meio de uma interface de chat. Ele utiliza inteligência artificial para entender e responder às mensagens dos usuários de forma automatizada.

## Recursos

- TypeScript: Estende o JavaScript, adicionando tipagem estática, permite a detecção de erros em tempo de compilação, melhorando a robustez e a manutenibilidade do código. 
- Next.js: Um framework React que oferece recursos avançados, como roteamento automático, carregamento otimizado de páginas, pré-renderização, suporte a API e muito mais.
- Prisma ORM: Uma ferramenta de banco de dados que ajuda a reduzir a complexidade do acesso ao banco de dados e aumenta a produtividade do desenvolvedor.
- Tailwind CSS: Um framework de design de interface de usuário (UI) que facilita a criação de interfaces estilizadas de forma eficiente.
- Tailwind-Merge: Mescla com eficiência as classes Tailwind CSS em JS sem conflitos de estilo.
- Json Web Token: Usado para autenticar solicitações em aplicativos web e APIs, permitindo uma autenticação stateless e o compartilhamento seguro de dados.

## Funcionalidades

O Chatbot oferece as seguintes funcionalidades:

- Atraves da interação com o chatbot de forma dinamica o usuario pode se cadastrar, logar, deslogar e saber mais informações sobre emprestimos.
- Digitando no chatboot:
	* ###### `HELLO`: Se o usuario não for cadastrado ou não estiver logado é solicitado seu username e password de forma dinamica para que seja cadastrado ou para apenas logar em sua conta. Caso o usuario já esteja logado apenas é mostrado uma saudação e algumas sugestões de interação.
	* ###### `I WANT`: Se dispoe a ajudar o usuario e sugere uma interação para continuar a conversação.
	* ###### `GOOD`: O chatbot agradece e pergunta se pode ajudar o usuario em algo mais e até sugere algumas possibilidades a mais de interações.
	* ###### `GOODBYE`: Salva a conversa no banco de dados.
	* ###### `LOAN`: Oferece 3 opções clicaveis que abre logo abaixo da opção clicada, uma informação relevante sobre e um link logo abaixo que se clicado leva o usuario a uma pagina com informações relevantes sobre.
	* ###### `LOGOUT`: Desconecta o usuario de sua conta.

## Pré Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- npm (ou yarn)

## Instalação

Siga as etapas abaixo para configurar o projeto em sua máquina:

1 - Clone este repositório:
```bash
git clone //https://github.com/reginaldo-teixeira-ou-regis/chatbot-lexart-labs
```

2 - Acesse o diretório do projeto:
```bash
cd chatbot-lexart-labs
```

3 - Instale as dependências:
```bash
npm install
```

4 - Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5 - Abra o navegador e acesse http://localhost:3000 para visualizar/utilizar o chatbot.