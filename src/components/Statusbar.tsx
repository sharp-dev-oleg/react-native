import React, {useCallback, useMemo} from 'react';
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
import {Link, useNavigate} from 'react-router-native';
import {Selection} from '@react-types/shared/src/selection';
import {useUser} from '../hooks/useUser.tsx';

export function Statusbar() {
  const {setToken, user} = useUser();
  const navigate = useNavigate();
  const onExit = useCallback(() => {
    setToken('');
  }, [setToken]);

  const onSelectionChange = useCallback(
    (keys: Selection) => {
      if (keys instanceof Set) {
        const key = (keys as unknown as {currentKey: string}).currentKey;
        if (key.startsWith('/')) {
          navigate(key);
        }
      }
    },
    [navigate],
  );

  const menuItems = useMemo(() => {
    let items = [
      <MenuItem py="$0.5" key="" textValue="Menu">
        <MenuItemLabel bold={true}>Menu</MenuItemLabel>
      </MenuItem>,
      <MenuItem py="$0.5" key="/" textValue="Home">
        <MenuItemLabel>Home</MenuItemLabel>
      </MenuItem>,
    ];

    if (user) {
      items = items.concat(
        <MenuItem py="$0.5" key="/send" textValue="Send">
          <MenuItemLabel>Send</MenuItemLabel>
        </MenuItem>,
        <MenuItem py="$0.5" onPress={onExit} key="Exit" textValue="Exit">
          <MenuItemLabel>Exit</MenuItemLabel>
        </MenuItem>,
      );
    } else {
      items.push(
        <MenuItem py="$0.5" key="/signup" textValue="Signup">
          <MenuItemLabel>Sign up</MenuItemLabel>
        </MenuItem>,
      );
    }

    return items;
  }, [user, onExit]);

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
            selectionMode="single"
            onSelectionChange={onSelectionChange}
            trigger={({...triggerProps}) => {
              return (
                <Button px="$4" bg="transparent" {...triggerProps}>
                  <ButtonIcon size="sm" as={MenuIcon} />
                </Button>
              );
            }}>
            {menuItems}
          </Menu>
        </HStack>
        <HStack justifyContent="center">
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
            <Link to="/signup">
              <Text color="white" size="sm" px="$4">
                Sign up
              </Text>
            </Link>
          )}
        </HStack>
      </HStack>
    </>
  );
}
