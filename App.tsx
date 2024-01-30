/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';

import {Section} from './src/components/Section';
import {Colors} from './src/colors';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <Section title="Initial">Initial</Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
