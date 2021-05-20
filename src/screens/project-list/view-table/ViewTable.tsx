import { IntUser } from '../search-form/SearchForm';
import { Table, TableProps } from 'antd';
import dayjs from 'dayjs';
// react-router 和 react-router-dom 关系类似于 react 和 react-dom
import { Link } from 'react-router-dom';
export interface IntProject {
  id: number;
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
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (value, project) => {
            return <Link to={`${project.id}`}>{project.name}</Link>;
          },
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
