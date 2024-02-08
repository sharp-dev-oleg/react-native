import React, {useCallback} from 'react';
import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Button,
  ButtonIcon,
  Heading,
  HStack,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  StatusBar,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {useUser} from '../hooks/useUser.tsx';

export function Statusbar() {
  const {setToken, user} = useUser();
  const onExit = useCallback(() => {
    setToken('');
  }, [setToken]);

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
          <Menu
            bg="$violet100"
            placement="bottom left"
            p="$0.5"
            trigger={({...triggerProps}) => {
              return (
                <Button bg="transparent" {...triggerProps}>
                  <ButtonIcon size="sm" as={MenuIcon} />
                </Button>
              );
            }}>
            <MenuItem py="$0.5" key="Menu" textValue="Menu">
              <MenuItemLabel bold={true}>Menu</MenuItemLabel>
            </MenuItem>
            {user && (
              <MenuItem py="$0.5" onPress={onExit} key="Exit" textValue="Exit">
                <MenuItemLabel>Exit</MenuItemLabel>
              </MenuItem>
            )}
          </Menu>
        </HStack>
        <HStack>
          {user ? (
            <HStack space="sm">
              <Avatar bgColor="$blue600" size="sm" borderRadius="$full">
                <AvatarFallbackText>{user.name}</AvatarFallbackText>
              </Avatar>
              <VStack alignItems="center">
                <Heading size="xs" color="white">
                  {user.name}
                </Heading>
                <Badge
                  p="$0"
                  size="sm"
                  variant="solid"
                  borderRadius="$sm"
                  action="info">
                  <BadgeText>{user.balance}</BadgeText>
                </Badge>
              </VStack>
            </HStack>
          ) : (
            <Text color="white" size="lg" fontWeight="bold">
              WIP
            </Text>
          )}
        </HStack>
      </HStack>
    </>
  );
}
