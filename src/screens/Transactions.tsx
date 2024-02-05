import React, {useEffect} from 'react';
import {Heading, Text} from '@gluestack-ui/themed';
import {Content} from '../components/Content';
import {useToken} from '../hooks/useToken';
import {getTransactions} from '../api/getTransactions';

export function Transactions(): React.JSX.Element {
  const {token} = useToken();
  useEffect(() => {
    if (!token) {
      return;
    }

    (async () => {
      const transactions = await getTransactions(token);
      console.log('transactions', transactions);
    })();
  }, [token]);

  return (
    <Content>
      <Heading>Transactions</Heading>
      <Text>WIP</Text>
    </Content>
  );
}
