import React, {useCallback, useState} from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
  Button,
  ButtonText,
  Divider,
  HStack,
  Heading,
  InfoIcon,
  Input,
  InputField,
  VStack,
  BadgeText,
  Badge,
  Pressable,
} from '@gluestack-ui/themed';
import {debounce} from '../utils/debounce';
import {Content} from '../components/Content';
import {useUser} from '../hooks/useUser.tsx';
import {createTransaction} from '../api/createTransaction.ts';
import {getUsers, User} from '../api/getUsers.ts';

export function Send(): React.JSX.Element {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [names, setNames] = useState<User[]>([]);
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
  }, [refresh, name, amount, token]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const findUsers = useCallback(
    debounce(async (newName: string) => {
      const users = await getUsers(newName, token);
      setNames(users.slice(0, 4));
    }, 500),
    [],
  );

  const onNameChange = useCallback(
    async (newName: string) => {
      setName(newName);
      if (newName.length <= 3) {
        setNames([]);
        return;
      }

      findUsers(newName);
    },
    [findUsers],
  );

  const onNameClick = useCallback(
    (newName: string) => {
      setName(newName);
    },
    [setName],
  );

  return (
    <Content>
      <Heading>New Transaction</Heading>
      <Divider my="$2" />
      <VStack space="md" reversed={false}>
        <Input>
          <InputField
            value={name}
            onChangeText={onNameChange}
            type="text"
            placeholder="Enter name"
          />
        </Input>
        <HStack space="xs">
          {names.map(user => (
            <Pressable key={user.id} onPress={() => onNameClick(user.name)}>
              <Badge
                p="$0"
                size="sm"
                variant="solid"
                borderRadius="$sm"
                action="success">
                <BadgeText>{user.name}</BadgeText>
              </Badge>
            </Pressable>
          ))}
        </HStack>
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
