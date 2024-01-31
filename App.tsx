import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {
  // AddIcon,
  Button,
  // ButtonIcon,
  ButtonText,
  GluestackUIProvider,
  Text,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

import {Section} from './src/components/Section';
import {Colors} from './src/colors';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: Colors.white,
            }}>
            <Section title="Initial">Initial</Section>
            <Text>Test text</Text>
            <Button
              size="md"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}>
              <ButtonText>Add </ButtonText>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;
