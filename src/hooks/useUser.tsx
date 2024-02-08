import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
  useEffect,
} from 'react';
import {MMKV} from 'react-native-mmkv';
import {getUserInfo, UserInfo} from '../api/user.ts';

const UserContext = createContext<{
  token: string;
  setToken: (_token: string) => void;
  user: UserInfo | null;
  refresh: () => void;
}>({
  token: '',
  setToken: (_token: string) => {},
  user: null,
  refresh: () => {},
});

export const storage = new MMKV();

export const UserProvider = ({children}: PropsWithChildren) => {
  const [token, _setToken] = useState(() => storage.getString('token') ?? '');
  const [user, setUser] = useState<UserInfo | null>(null);

  const setToken = useCallback(
    (token: string) => {
      _setToken(token);
      storage.set('token', token);
    },
    [_setToken],
  );

  const refresh = useCallback(async () => {
    if (!token) {
      setUser(null);
      return;
    }

    const user = await getUserInfo(token);
    setUser(user.user_info_token);
  }, [token]);

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <UserContext.Provider value={{token, setToken, user, refresh}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const {token, setToken, user, refresh} = useContext(UserContext);

  return {
    token,
    setToken,
    user,
    refresh,
  };
};
