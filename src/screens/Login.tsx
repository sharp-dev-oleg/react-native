import React, {useCallback, useState} from 'react';
import {Alert, GestureResponderEvent} from 'react-native';
import {
  Button,
  ButtonText,
  Divider,
  FormControl,
  Heading,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {login} from '../api/login.ts';

export function Login(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPress = useCallback(
    async (_event: GestureResponderEvent) => {
      try {
        const result = await login(email, password);
        Alert.alert(result);
      } catch (e) {
        Alert.alert((e as Error).message);
      }
    },
    [email, password],
  );

  return (
    <FormControl>
      <Heading>Login</Heading>
      <Divider my="$2" />
      <VStack space="md" reversed={false}>
        <Input>
          <InputField
            onChangeText={setEmail}
            type="text"
            placeholder="Enter your email"
          />
        </Input>
        <Input>
          <InputField
            onChangeText={setPassword}
            type="password"
            placeholder="Enter your password"
          />
        </Input>
        <Button onPress={onPress} size="md" variant="solid" action="primary">
          <ButtonText>Login</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
