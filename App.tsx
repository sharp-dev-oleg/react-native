import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

import {Colors} from './src/colors';
import {AppRoutes} from './src/Routes';
import {TokenProvider} from './src/hooks/useToken.tsx';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.white,
  };

  return (
    <GluestackUIProvider config={config}>
      <TokenProvider>
        <SafeAreaView style={backgroundStyle}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <AppRoutes />
          </ScrollView>
        </SafeAreaView>
      </TokenProvider>
    </GluestackUIProvider>
  );
}

export default App;
