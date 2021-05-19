import { useState } from 'react';
import SearchForm from './search-form/SearchForm';
import ViewTable from './view-table/ViewTable';
import { useMount, useDebounce } from '../../utils/useMount';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useProject } from 'utils/useProject';
import { useUsers } from 'utils/useUsers';

const ProjectList = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debounceParam = useDebounce(param, 300);
  const { data: list, isLoading, error } = useProject(debounceParam);
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchForm users={users || []} param={param} setParam={setParam} />
      {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
      <ViewTable users={users || []} dataSource={list || []} loading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectList;
