import styled from '@emotion/styled';
import { useAuth } from 'context/auth-context';
import { Dropdown, Menu, Button } from 'antd';
import ProjectList from '../../screens/project-list';
import { Row } from 'components/lib';
import { ReactComponent as Logo } from '../../assets/software-logo.svg';
import { DownOutlined } from '@ant-design/icons';
import { resetRouter, useTitle } from 'utils';
import { Route, Routes, Navigate } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { ProjectScreen } from '../../screens/Project';

export default function Admin() {
  useTitle('项目列表 - Jira', true);
  return (
    <LayoutPage>
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Route path={'/projects'} element={<ProjectList />} />
            <Route path={'/projects/:projectId/*'} element={<ProjectScreen />} />
            <Navigate to={'/projects'} />
          </Routes>
        </Router>
      </Main>
    </LayoutPage>
  );
}

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true} marginBottom={false}>
      <HeaderLeft gap={true}>
        <NewButton type="link" onClick={resetRouter}>
          <Logo width={'18rem'} color={'rgb(38,132,255)'} />
        </NewButton>
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight gap={2}>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Button type={'link'} onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type={'link'} onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
            <DownOutlined />
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const NewButton = styled(Button)`
  padding: 0;
  border: 0;
`;

/**
 * grid 和 flex 各自的使用场景
 * 1. 考虑一维布局还是二维布局
 *    一般来说，一维布局使用flex、二维布局使用grid
 * 2. 是从内容出发还是布局出发？
 *    从内容出发：(flex)先有一组内容（数量一般不固定），然后希望他们均匀的分布在容器中
 *    从布局出发：(grid)先规划网格（数量一般比较固定），然后再把元素往里填充
 */

const LayoutPage = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 6rem 1fr 6rem;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled(Row)``;

const Main = styled.main``;
