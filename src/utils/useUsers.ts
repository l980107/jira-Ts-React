import { useEffect } from 'react';
import { IntUser } from 'screens/project-list/search-form/SearchForm';
import { cleanObject } from 'utils';
import { useHttp } from './http';
import { useAsync } from './useAsync';

export const useUsers = (param?: Partial<IntUser>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<IntUser[]>();

  useEffect(() => {
    run(client('users', { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
