import React from 'react';
import {
  Button,
  ButtonIcon,
  HStack,
  MenuIcon,
  StatusBar,
  Text,
} from '@gluestack-ui/themed';

export function Statusbar() {
  return (
    <>
      <StatusBar backgroundColor="$violet600" barStyle="light-content" />
      <HStack
        bg="$violet600"
        px="$1"
        pt="$5"
        pb="$1"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <Button bg="transparent">
            <ButtonIcon size="sm" as={MenuIcon} />
          </Button>
          <Text color="white" size="lg" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <Text color="white" size="lg" fontWeight="bold">
            WIP
          </Text>
        </HStack>
      </HStack>
    </>
  );
}
