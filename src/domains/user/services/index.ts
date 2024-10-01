import { Type } from 'typescript';
import { api } from 'common/api';

export const loginApi = (form: string) => {
  return api.get<Type>('', {
    params: form,
  });
};
