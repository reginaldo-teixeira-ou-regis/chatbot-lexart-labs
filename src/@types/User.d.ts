declare namespace UserTypes {
  interface UserProps {
    id?: string;
    username: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  type UserToken = {
    user: UserProps;
  }
}
