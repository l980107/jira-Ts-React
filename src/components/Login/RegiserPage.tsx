// import { useAuth } from 'context/auth-context';
import { useAuth } from '../../context/auth-context';
import { FormEvent } from 'react';
import { Form, Input, Button } from 'antd';
import { LongButton } from './index';

const RegisterPage = () => {
  const { register, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input type="text" placeholder="用户名" id={'username'} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input type="password" placeholder="密码" id={'password'} />
      </Form.Item>
      <LongButton htmlType={'submit'} type={'primary'}>
        注册
      </LongButton>
    </Form>
  );
};

export default RegisterPage;
