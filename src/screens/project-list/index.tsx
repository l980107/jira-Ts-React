import { useState, useEffect } from 'react';
import SearchForm from './search-form/SearchForm';
import ViewTable from './view-table/ViewTable';
import { cleanObject } from '../../utils/index';
import { useMount, useDebounce } from '../../utils/useMount';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 300);
  const client = useHttp();

  useEffect(() => {
    client('projects', { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    client('users', {}).then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchForm users={users} param={param} setParam={setParam} />
      <ViewTable users={users} list={list} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectList;
