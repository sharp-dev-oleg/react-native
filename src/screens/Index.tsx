import React from 'react';
import {Divider, Heading, Text} from '@gluestack-ui/themed';
import {Link} from 'react-router-native';
import {Content} from '../components/Content';
import {Login} from './Login.tsx';

export function Index(): React.JSX.Element {
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
