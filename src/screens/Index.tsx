import React from 'react';
import {Divider, Heading, Text} from '@gluestack-ui/themed';
import {Link} from 'react-router-native';
import {Content} from '../components/Content';
import {Login} from './Login.tsx';
import {useToken} from '../hooks/useToken.tsx';
import {Transactions} from './Transactions.tsx';

export function Index(): React.JSX.Element {
  const {token} = useToken();
  return (
    <Content>
      <Heading>Transactions</Heading>
      {token ? (
        <Transactions />
      ) : (
        <>
          <Login />
          <Divider my="$3" />
          <Link to="/signup">
            <Text>Sign up</Text>
          </Link>
        </>
      )}
    </Content>
  );
}
