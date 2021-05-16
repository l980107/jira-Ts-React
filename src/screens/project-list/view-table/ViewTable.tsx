import { IntUser } from '../search-form/SearchForm';
import { Table } from 'antd';
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
    <Table
      pagination={false}
      dataSource={list}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '负责人',
          render: (project) => {
            return (
              <span>{users.find((user) => user.id === project.personId)?.name || '未知'}</span>
            );
          },
        },
      ]}
    ></Table>
  );
};

export default ViewTable;
