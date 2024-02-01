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
import {Content} from '../components/Content.tsx';
import {register} from '../api/register.ts';

export function Signup(): React.JSX.Element {
  const onPress = useCallback(async (_event: GestureResponderEvent) => {
    Alert.alert('Sign up');
    try {
      const result = await register('1', '2', '3');
      Alert.alert('e1', result);
    } catch (e) {
      Alert.alert('e2', (e as Error).message);
    }
  }, []);

  return (
    <Content>
      <FormControl>
        <Heading>Sign up</Heading>
        <Divider my="$2" />
        <VStack space="md" reversed={false}>
          <Input>
            <InputField type="text" placeholder="Username" />
          </Input>
          <Input>
            <InputField type="text" placeholder="Enter your email" />
          </Input>
          <Input>
            <InputField type="password" placeholder="Enter your password" />
          </Input>
          <Button onPress={onPress} size="md" variant="solid" action="primary">
            <ButtonText>Sign up</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </Content>
  );
}
