import {NativeRouter, Route, Routes} from 'react-router-native';
import {Index} from './screens/Index.tsx';
import {Signup} from './screens/Signup.tsx';
import React from 'react';
export function AppRoutes(): React.JSX.Element {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </NativeRouter>
  );
}
