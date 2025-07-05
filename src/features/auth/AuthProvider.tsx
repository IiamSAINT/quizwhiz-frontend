import AuthContext from '@/features/auth/AuthContext';
import { ReactNode, useState } from 'react';
import { User } from './types';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // todo use useReducer

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
