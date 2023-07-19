declare namespace MessageTypes {
  type sentBy = 'user' | 'system'
  type Require = 'username' | 'password'

  type Option = {
    label: string;
    href: string;
    hrefLabel: string;
    content: string;
    target?: string;
  }

  interface MessageProps {
    message: string;
    datetime: string;
    userId?: string;
    username?: string;
    password?: string;
    sentBy: sentBy;
    options?: Option[];
  }
  
  interface SystemMessageProps {
    options?: Option[];
    message: string;
    require?: Require;
    sentBy: 'system';
    token?: string;
  }
}