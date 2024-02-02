import {createContext, useContext, useState, PropsWithChildren} from 'react';

const TokenContext = createContext({
  token: '',
  setToken: (_token: string) => {},
});

export const TokenProvider = ({children}: PropsWithChildren) => {
  const [token, setToken] = useState('');

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
