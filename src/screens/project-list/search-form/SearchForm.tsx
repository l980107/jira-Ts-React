import { Input, Select } from 'antd';

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
      <Input
        type="text"
        placeholder="项目名"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />
      <Select value={param.personId} onChange={(value) => setParam({ ...param, personId: value })}>
        <Select.Option value=""> 负责人</Select.Option>
        {users.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </Select>
    </div>
  );
};

export default SearchForm;
