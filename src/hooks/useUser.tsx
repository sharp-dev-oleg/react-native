import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
} from 'react';
import {MMKV} from 'react-native-mmkv';

const TokenContext = createContext({
  token: '',
  setToken: (_token: string) => {},
});

export const storage = new MMKV();

export const TokenProvider = ({children}: PropsWithChildren) => {
  const [token, _setToken] = useState(() => storage.getString('token') ?? '');

  const setToken = useCallback(
    (token: string) => {
      _setToken(token);
      storage.set('token', token);
    },
    [_setToken],
  );

  return (
    <TokenContext.Provider value={{token, setToken}}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const {token, setToken} = useContext(TokenContext);

  return {
    token,
    setToken,
  };
};
