import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

import {Colors} from './src/colors';
import {AppRoutes} from './src/Routes';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.white,
  };

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <AppRoutes />
        </ScrollView>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;
