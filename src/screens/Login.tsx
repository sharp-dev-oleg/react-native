import React, {useCallback, useState} from 'react';
import {GestureResponderEvent} from 'react-native';
import {
  Alert,
  AlertIcon,
  AlertText,
  Button,
  ButtonText,
  Divider,
  FormControl,
  Heading,
  InfoIcon,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {login} from '../api/login.ts';
import {useNavigate} from 'react-router-native';

export function Login(): React.JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const onPress = useCallback(
    async (_event: GestureResponderEvent) => {
      setError('');
      setSuccess(false);

      try {
        const result = await login(email, password);
        setSuccess(true);
        setTimeout(() => {
          navigate('/transactions');
        }, 1500);
      } catch (e) {
        setError((e as Error).message);
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
        {error && (
          <Alert action="error" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>{error}</AlertText>
          </Alert>
        )}
        {success && (
          <Alert action="success" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText width="100%">Logged in!</AlertText>
          </Alert>
        )}
      </VStack>
    </FormControl>
  );
}
