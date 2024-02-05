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
import {useToken} from '../hooks/useToken.tsx';
import {createTransaction} from '../api/createTransaction.ts';

export function Send(): React.JSX.Element {
  const {token} = useToken();
  const onPress = useCallback(async () => {
    try {
      const result = createTransaction('oleg', '1', token);
      console.log('result', result);
    } catch (e) {
      console.log('error', (e as Error)?.message);
    }
  }, [token]);
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
