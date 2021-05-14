export interface IntUser {
  id: string;
  name: string;
  email: string;
  titile: string;
  organization: string;
  token: string;
}

interface IntSearchForm {
  users: IntUser[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: IntSearchForm['param']) => void;
}

const SearchForm = ({ users, param, setParam }: IntSearchForm) => {
  return (
    <div>
      <input
        type="text"
        placeholder="项目名"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />
      <select
        value={param.personId}
        onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
      >
        <option value=""> 负责人</option>
        {users.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchForm;
