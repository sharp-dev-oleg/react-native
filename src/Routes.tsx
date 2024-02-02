import {NativeRouter, Route, Routes} from 'react-router-native';
import {Index} from './screens/Index';
import {Signup} from './screens/Signup';
import React from 'react';
import {Transactions} from './screens/Transactions';

export function AppRoutes(): React.JSX.Element {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </NativeRouter>
  );
}
