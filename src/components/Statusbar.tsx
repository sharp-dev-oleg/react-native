import React, {useEffect, useState} from 'react';
import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Button,
  ButtonIcon,
  Heading,
  HStack,
  MenuIcon,
  StatusBar,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {getUserInfo, UserInfo} from '../api/user.ts';
import {useToken} from '../hooks/useToken.tsx';

export function Statusbar() {
  const {token} = useToken();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    if (!token) {
      return;
    }

    (async () => {
      const user = await getUserInfo(token);
      setUserInfo(user.user_info_token);
    })();
  }, [token]);

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
          {userInfo ? (
            <HStack space="sm">
              <Avatar bgColor="$blue600" size="sm" borderRadius="$full">
                <AvatarFallbackText>{userInfo.name}</AvatarFallbackText>
              </Avatar>
              <VStack>
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
