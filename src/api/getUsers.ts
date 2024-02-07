import {request} from './request';

export interface User {
  id: number;
  name: string;
}

export const getUsers = async (
  filter: string,
  token: string,
): Promise<User[]> => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return request('POST', '/api/protected/users/list', {filter}, headers);
};
