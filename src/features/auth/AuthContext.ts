import { createContext } from 'react';
import { User } from './types';

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  setUser: (user: User) => void;
  authPending: boolean;
  authError: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
