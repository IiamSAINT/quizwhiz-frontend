import React from 'react';
import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';
const Protect = function ({ children }) {
  const { authPending, user, authError } = useAuth();

  if (authPending && !user) return <div>Loading</div>;

  if (authError) {
    //todo implement useSearch params in login
    return <Navigate to='/auth/login?error=auth' replace />;
  }

  if (!user) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default Protect;
