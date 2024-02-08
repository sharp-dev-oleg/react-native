import React from 'react';
import {Navigate, Outlet} from 'react-router-native';
import {useUser} from '../hooks/useUser.tsx';

export function PrivateRoute() {
  const {token} = useUser();
  return token ? <Outlet /> : <Navigate to="/" />;
}
