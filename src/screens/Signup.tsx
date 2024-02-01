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
  LinkText,
} from '@gluestack-ui/themed';
import {Content} from '../components/Content.tsx';
import {register} from '../api/register.ts';
import {Link} from 'react-router-native';

export function Signup(): React.JSX.Element {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onPress = useCallback(
    async (_event: GestureResponderEvent) => {
      setError('');
      try {
        await register(formData.username, formData.email, formData.password);
        setFormData({
          username: '',
          email: '',
          password: '',
        });
        setSuccess(true);
      } catch (e) {
        setError((e as Error)?.message ?? 'Unknown error');
      }
    },
    [formData],
  );

  return (
    <Content>
      <FormControl>
        <Heading>Sign up</Heading>
        <Divider my="$2" />
        <VStack space="md" reversed={false}>
          <Input>
            <InputField
              onChangeText={newValue => {
                setFormData({
                  ...formData,
                  username: newValue,
                });
              }}
              type="text"
              placeholder="Username"
            />
          </Input>
          <Input>
            <InputField
              onChangeText={newValue => {
                setFormData({
                  ...formData,
                  email: newValue,
                });
              }}
              type="text"
              placeholder="Enter your email"
            />
          </Input>
          <Input>
            <InputField
              onChangeText={newValue => {
                setFormData({
                  ...formData,
                  password: newValue,
                });
              }}
              type="password"
              placeholder="Enter your password"
            />
          </Input>
          {error && (
            <Alert action="error" variant="solid">
              <AlertIcon as={InfoIcon} mr="$3" />
              <AlertText>{error}</AlertText>
            </Alert>
          )}
          {success && (
            <Alert action="success" variant="solid">
              <AlertIcon as={InfoIcon} mr="$3" />
              <VStack>
                <AlertText width="100%">Successfully registered!</AlertText>
                <Link to="/">
                  <LinkText>Login</LinkText>
                </Link>
              </VStack>
            </Alert>
          )}
          <Button onPress={onPress} size="md" variant="solid" action="primary">
            <ButtonText>Sign up</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </Content>
  );
}
