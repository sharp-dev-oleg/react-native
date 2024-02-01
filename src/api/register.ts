import {request} from './request.ts';

export const register = (username: string, email: string, password: string) => {
  const data = {
    username,
    email,
    password,
  };
  return request('POST', '/users', data);
};
