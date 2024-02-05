import React, {useCallback, useEffect} from 'react';
import {Button, ButtonText, Divider, Heading} from '@gluestack-ui/themed';
import {useNavigate} from 'react-router-native';
import {Content} from '../components/Content';
import {useToken} from '../hooks/useToken';
import {getTransactions} from '../api/getTransactions';

export function Transactions(): React.JSX.Element {
  const {token} = useToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return;
    }

    (async () => {
      const transactions = await getTransactions(token);
      console.log('transactions', transactions);
    })();
  }, [token]);

  const onPress = useCallback(() => {
    navigate('/send');
  }, [navigate]);

  return (
    <Content>
      <Heading>Transactions</Heading>
      <Divider my="$2" />
      <Button
        onPress={onPress}
        width="$20"
        size="sm"
        variant="solid"
        action="primary">
        <ButtonText>Send</ButtonText>
      </Button>
    </Content>
  );
}
