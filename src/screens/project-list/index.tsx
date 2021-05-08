import { useState, useEffect } from "react";
import * as qs from "qs";
import SearchForm from "./search-form/SearchForm";
import ViewTable from "./view-table/ViewTable";
import { cleanObject } from "../../utils/index";
import { useMount, useDebounce } from "../../utils/useMount";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 300);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchForm users={users} param={param} setParam={setParam} />
      <ViewTable users={users} list={list} />
    </div>
  );
};

export default ProjectList;
