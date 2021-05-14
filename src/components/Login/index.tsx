import React, { useState } from 'react';
import RegisterPage from './RegiserPage';
import LoginPage from './LoginPage';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div>{isLogin ? <LoginPage /> : <RegisterPage />}</div>
      <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? '去注册' : '去登陆'}</button>
    </>
  );
};

export default Login;
