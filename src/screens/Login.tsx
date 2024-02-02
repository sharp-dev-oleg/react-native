import React, {useCallback} from 'react';
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

export function Login(): React.JSX.Element {
  const onPress = useCallback((_event: GestureResponderEvent) => {
    Alert.alert('Login');
  }, []);

  return (
    <FormControl>
      <Heading>Login</Heading>
      <Divider my="$2" />
      <VStack space="md" reversed={false}>
        <Input>
          <InputField type="text" placeholder="Enter your email" />
        </Input>
        <Input>
          <InputField type="password" placeholder="Enter your password" />
        </Input>
        <Button onPress={onPress} size="md" variant="solid" action="primary">
          <ButtonText>Login</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
