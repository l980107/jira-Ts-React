import { FullPageError, FullPageLoading } from 'components/lib';
import React, { ReactNode, useState } from 'react';
import { IntUser } from 'screens/project-list/search-form/SearchForm';
import { http } from 'utils/http';
import { useAsync } from 'utils/useAsync';
import { useMount } from 'utils/useMount';
import * as AuthMethod from '../auth-provider';

//登陆传参接口
interface AuthForm {
  username: string;
  password: string;
}

//创建身份验证context
const AuthContext = React.createContext<
  | {
      user: IntUser | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

/**
 * 初始化user 避免刷新登出
 * @returns user
 */
export const initUser = async () => {
  let user = null;
  const token = AuthMethod.getToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }
  return user;
};

/**
 * 身份验证提供组件，顶级组件，用于向下传递context
 *
 * @param {ReactNode} children 被包裹的react节点
 * @returns user 登陆成功的用户信息  login 登陆方法  register 注册方法 logout  登出方法
 */
export const AuthProdiver = ({ children }: { children: ReactNode }) => {
  // const [user, setUser] = useState<IntUser | null>(null);
  const {
    data: user,
    error,
    isLoading,
    setData: setUser,
    isError,
    isIdle,
    run,
  } = useAsync<IntUser | null>();

  const login = (form: AuthForm) => {
    return AuthMethod.login(form).then(setUser);
  };

  const register = (form: AuthForm) => {
    return AuthMethod.register(form).then(setUser);
  };

  const logout = async () => {
    await AuthMethod.logout();
    return setUser(null);
  };

  useMount(() => {
    run(initUser());
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageError error={error} />;
  }
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    ></AuthContext.Provider>
  );
};

/**
 * 自定义hook使用AuthContext
 *
 * @returns 全局定义的context
 */
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth必须在AuthProvider使用');
  }

  return context;
};
