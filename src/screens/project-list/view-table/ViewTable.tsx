import { IntUser } from "../search-form/SearchForm";

interface IntProject {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface IntViewTable {
  users: IntUser[];
  list: IntProject[];
}

const ViewTable = ({ users, list }: IntViewTable) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewTable;
