import React, {useCallback} from 'react';
import {
  Button,
  ButtonText,
  Divider,
  Heading,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {Content} from '../components/Content';

export function Send(): React.JSX.Element {
  const onPress = useCallback(() => {
    console.log('onPress');
  }, []);
  return (
    <Content>
      <Heading>New Transaction</Heading>
      <Divider my="$2" />
      <VStack space="md" reversed={false}>
        <Input>
          <InputField type="text" placeholder="Enter name" />
        </Input>
        <Input>
          <InputField type="text" placeholder="Enter amount" />
        </Input>
        <Button onPress={onPress} size="md" variant="solid" action="primary">
          <ButtonText>Send</ButtonText>
        </Button>
      </VStack>
    </Content>
  );
}
