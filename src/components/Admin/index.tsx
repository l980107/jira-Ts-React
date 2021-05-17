import styled from '@emotion/styled';
import { useAuth } from 'context/auth-context';
import { Button } from 'antd';
import ProjectList from '../../screens/project-list';
import { Row } from 'components/lib.tsx';

export default function Admin() {
  const { logout } = useAuth();
  return (
    <LayoutPage>
      <Header between={true} marginBottom={false}>
        <HeaderLeft gap={true}>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight gap={2}>
          <Button type={'primary'} onClick={logout}>
            登出
          </Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList />
      </Main>
    </LayoutPage>
  );
}

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

const Header = styled(Row)``;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled(Row)``;

const Main = styled.main``;
