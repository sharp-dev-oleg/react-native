import React from 'react';
import {Divider, Heading, Text} from '@gluestack-ui/themed';
import {Link, Navigate} from 'react-router-native';
import {Content} from '../components/Content';
import {Login} from './Login.tsx';
import {useUser} from '../hooks/useUser.tsx';

export function Index(): React.JSX.Element {
  const {token} = useUser();
  if (token) {
    return <Navigate to="/transactions" />;
  }

  return (
    <Content>
      <Heading>Transactions</Heading>
      <Login />
      <Divider my="$3" />
      <Link to="/signup">
        <Text>Sign up</Text>
      </Link>
    </Content>
  );
}
