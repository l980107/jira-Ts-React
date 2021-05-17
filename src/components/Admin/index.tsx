import styled from '@emotion/styled';
import { useAuth } from 'context/auth-context';
import { Button } from 'antd';
import ProjectList from '../../screens/project-list';

export default function Admin() {
  const { logout } = useAuth();
  return (
    <LayoutPage>
      <Header>
        <HeaderLeft>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <ButtonStyle type={'primary'} onClick={logout}>
            登出
          </ButtonStyle>
        </HeaderRight>
      </Header>
      <Nav>Nav</Nav>
      <Main>
        <ProjectList />
      </Main>
      <Aside>Aside</Aside>
      <Footer>Footer</Footer>
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

const ButtonStyle = styled(Button)`
  margin-right: 3rem;
`;

const LayoutPage = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    'header header header'
    'nav main aside'
    'footer footer footer';
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div``;

const Nav = styled.nav`
  grid-area: nav;
`;

const Main = styled.main`
  grid-area: main;
`;

const Aside = styled.aside`
  grid-area: aside;
`;

const Footer = styled.footer`
  grid-area: footer;
`;
