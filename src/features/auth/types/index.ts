export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}

export interface SignUpWithEmailParams {
  email: string;
  name: string;
  password?: string;
}

export interface LoginWithEmailParams {
  email: string;
  password?: string;
}
