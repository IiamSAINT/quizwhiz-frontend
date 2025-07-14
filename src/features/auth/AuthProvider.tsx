import AuthContext from '@/features/auth/AuthContext';
import { ReactNode, useEffect, useState } from 'react';
import { User } from './types';
import { useQuery } from '@tanstack/react-query';
import { checkAuthStatus } from '@/features/auth/api';
import axiosInstance from '@/common/api/axiosInstance';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const {
    data,
    isSuccess: isLoggedIn,
    isError: authError,
    isPending: authPending,
  } = useQuery({
    queryKey: ['session'],
    queryFn: checkAuthStatus,
    retry: 0,
    refetchInterval: 14 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isLoggedIn) {
      setUser(data.user);
      console.log('user logged in ', data.user);
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`;
    }
  }, [isLoggedIn, data]);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setUser, authPending, authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
