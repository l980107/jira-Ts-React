import { IntUser } from '../search-form/SearchForm';
import { Table, TableProps } from 'antd';
import dayjs from 'dayjs';
interface IntProject {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface IntViewTable extends TableProps<IntProject> {
  users: IntUser[];
  // list: IntProject[];
}

const ViewTable = ({ users, ...props }: IntViewTable) => {
  return (
    <Table
      {...props}
      pagination={false}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '部门',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          render: (project) => {
            return (
              <span>{users.find((user) => user.id === project.personId)?.name || '未知'}</span>
            );
          },
        },
        {
          title: '创建时间',
          render: (project) => {
            return (
              <span>{project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}</span>
            );
          },
        },
      ]}
    ></Table>
  );
};

export default ViewTable;
