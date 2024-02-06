import React from 'react';
import {Divider, HStack, Text, VStack} from '@gluestack-ui/themed';
import {Transaction as TransactionType} from '../api/getTransactions';

export function Transaction({transaction}: {transaction: TransactionType}) {
  return (
    <VStack space="md">
      <HStack space="md">
        <Text w="$20" size="sm">
          {transaction.username}
        </Text>
        <Text w="$16" size="sm">
          {transaction.amount}
        </Text>
        <Text size="sm">{transaction.date}</Text>
      </HStack>
      <Divider />
    </VStack>
  );
}
