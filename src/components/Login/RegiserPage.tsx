// import { useAuth } from 'context/auth-context';
import { useAuth } from '../../context/auth-context';
import { Form, Input } from 'antd';
import { LongButton } from './index';
import { useAsync } from 'utils/useAsync';

interface RegisterProps {
  setError: (error: Error) => void;
}

interface AuthProps {
  username: string;
  password: string;
  cpassword: string;
}

const RegisterPage = ({ setError }: RegisterProps) => {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async ({ cpassword, ...values }: AuthProps) => {
    if (cpassword !== values.password) {
      setError(new Error('请确认两次密码相同！'));
      return;
    }
    try {
      await run(register(values));
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input type="text" placeholder="用户名" id={'username'} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input type="password" placeholder="密码" id={'password'} />
      </Form.Item>
      <Form.Item name="cpassword" rules={[{ required: true, message: '请输入密码' }]}>
        <Input type="password" placeholder="确认密码" id={'cpassword'} />
      </Form.Item>
      <LongButton loading={isLoading} htmlType={'submit'} type={'primary'}>
        注册
      </LongButton>
    </Form>
  );
};

export default RegisterPage;
