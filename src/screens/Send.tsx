import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
  Button,
  ButtonText,
  Divider,
  Heading,
  InfoIcon,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {Content} from '../components/Content';
import {useUser} from '../hooks/useUser.tsx';
import {createTransaction} from '../api/createTransaction.ts';
import {getUsers} from '../api/getUsers.ts';

export function Send(): React.JSX.Element {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const {token, refresh} = useUser();
  const onPress = useCallback(async () => {
    setError('');
    setSuccess(false);

    try {
      await createTransaction(name, amount, token);
      setName('');
      setAmount('');
      setSuccess(true);
      refresh();
    } catch (e) {
      setError((e as Error)?.message);
    }
  }, [name, amount, token]);

  useEffect(() => {
    (async () => {
      const users = await getUsers('oleg', token);
      console.log('users', users);
    })();
  }, [token]);

  return (
    <Content>
      <Heading>New Transaction</Heading>
      <Divider my="$2" />
      <VStack space="md" reversed={false}>
        <Input>
          <InputField
            value={name}
            onChangeText={setName}
            type="text"
            placeholder="Enter name"
          />
        </Input>
        <Input>
          <InputField
            value={amount}
            onChangeText={setAmount}
            type="text"
            placeholder="Enter amount"
          />
        </Input>
        <Button onPress={onPress} size="md" variant="solid" action="primary">
          <ButtonText>Send</ButtonText>
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
            <AlertText width="100%">Sent!</AlertText>
          </Alert>
        )}
      </VStack>
    </Content>
  );
}
