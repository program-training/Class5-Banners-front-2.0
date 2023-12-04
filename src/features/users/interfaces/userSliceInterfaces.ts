export interface LoginInterface {
  email: string;
  password: string;
}

export interface SignUpInterface extends LoginInterface {
  username: string;
  isAdmin: boolean;
}
