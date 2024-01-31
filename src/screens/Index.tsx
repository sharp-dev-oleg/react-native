import React from 'react';
import {View} from 'react-native';
import {Button, ButtonText, Text} from '@gluestack-ui/themed';
import {Section} from '../components/Section.tsx';
import {Link} from 'react-router-native';

export function Index(): React.JSX.Element {
  return (
    <View>
      <Section title="Initial">Initial</Section>
      <Link to="/signup">
        <Text>Test</Text>
      </Link>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}>
        <ButtonText>Add </ButtonText>
      </Button>
    </View>
  );
}
