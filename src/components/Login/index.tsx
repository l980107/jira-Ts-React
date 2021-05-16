import React, { useState } from 'react';
import RegisterPage from './RegiserPage';
import LoginPage from './LoginPage';
import { Button, Card, Divider } from 'antd';
import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isLogin ? '请登录' : '请注册'}</Title>

        {isLogin ? <LoginPage /> : <RegisterPage />}
        <Divider />
        <a onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '还没有账号？去注册一个吧！' : '已经有账号了? 直接登陆吧！'}
        </a>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2 - 3.2rem), ((100vw - 40rem) / 2 - 3.2rem), cover);
  background-image: url(${left}), url(${right});
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

export default Login;
