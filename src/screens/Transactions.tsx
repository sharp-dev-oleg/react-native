import React, {useCallback, useEffect, useState} from 'react';
import {
  Box,
  Button,
  ButtonText,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {useNavigate} from 'react-router-native';
import {Content} from '../components/Content';
import {useToken} from '../hooks/useToken';
import {
  getTransactions,
  Transaction as TransactionType,
} from '../api/getTransactions';
import {Transaction} from '../components/Transaction.tsx';

export function Transactions(): React.JSX.Element {
  const {token} = useToken();
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return;
    }

    (async () => {
      const transactions = await getTransactions(token);
      setTransactions(transactions.trans_token);
    })();
  }, [token]);

  const onPress = useCallback(() => {
    navigate('/send');
  }, [navigate]);

  return (
    <Content>
      <HStack justifyContent="space-between">
        <Heading>Transactions</Heading>
        <Button
          onPress={onPress}
          width="$20"
          size="xs"
          variant="solid"
          action="primary">
          <ButtonText>Send</ButtonText>
        </Button>
      </HStack>
      <Divider my="$2" />
      <Box>
        <HStack space="md">
          <Text w="$20" size="sm" bold={true}>
            Username
          </Text>
          <Text w="$16" size="sm" bold={true}>
            Amount
          </Text>
          <Text size="sm" bold={true}>
            Date
          </Text>
        </HStack>
        <Divider my="$2" />
      </Box>
      <VStack space="md">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </VStack>
    </Content>
  );
}
