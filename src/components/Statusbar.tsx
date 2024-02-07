import React, {useCallback, useEffect, useState} from 'react';
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
import {getUserInfo, UserInfo} from '../api/user.ts';
import {useToken} from '../hooks/useToken.tsx';

export function Statusbar() {
  const {token, setToken} = useToken();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    if (!token) {
      setUserInfo(null);
      return;
    }

    (async () => {
      const user = await getUserInfo(token);
      setUserInfo(user.user_info_token);
    })();
  }, [token]);

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
            {token && (
              <MenuItem py="$0.5" onPress={onExit} key="Exit" textValue="Exit">
                <MenuItemLabel>Exit</MenuItemLabel>
              </MenuItem>
            )}
          </Menu>
        </HStack>
        <HStack>
          {userInfo ? (
            <HStack space="sm">
              <Avatar bgColor="$blue600" size="sm" borderRadius="$full">
                <AvatarFallbackText>{userInfo.name}</AvatarFallbackText>
              </Avatar>
              <VStack alignItems="center">
                <Heading size="xs" color="white">
                  {userInfo.name}
                </Heading>
                <Badge
                  p="$0"
                  size="sm"
                  variant="solid"
                  borderRadius="$sm"
                  action="info">
                  <BadgeText>{userInfo.balance}</BadgeText>
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
