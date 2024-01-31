import React from 'react';
import {Heading, Text} from '@gluestack-ui/themed';
import {Link} from 'react-router-native';
import {Content} from '../components/Content';

export function Index(): React.JSX.Element {
  return (
    <Content>
      <Heading>Transactions</Heading>
      <Link to="/signup">
        <Text>Sign up</Text>
      </Link>
    </Content>
  );
}
