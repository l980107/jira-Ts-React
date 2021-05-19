import { useEffect } from 'react';
import { IntProject } from 'screens/project-list/view-table/ViewTable';
import { useHttp } from './http';
import { cleanObject } from './index';
import { useAsync } from './useAsync';
import { useDebounce } from './useMount';

export const useProject = (param?: Partial<IntProject>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<IntProject[]>();

  useEffect(() => {
    run(client('projects', { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
