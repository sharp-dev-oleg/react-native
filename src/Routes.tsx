import React from 'react';
import {Route, Routes} from 'react-router-native';
import {Index} from './screens/Index';
import {Signup} from './screens/Signup';
import {Transactions} from './screens/Transactions';
import {Send} from './screens/Send.tsx';
import {PrivateRoute} from './components/PrivateRoute';

export function AppRoutes(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/send" element={<Send />} />
      </Route>
    </Routes>
  );
}
