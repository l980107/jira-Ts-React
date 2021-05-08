import React, { useState } from "react";
import { IntUser } from "screens/project-list/search-form/SearchForm";
import * as AuthMethod from "../auth-provider";

//登陆传参接口
interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext<
  | {
      user: IntUser | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

//身份验证供应，编写逻辑代码
export const AuthProdiver = () => {
  //保存登陆user
  const [user, setUser] = useState<IntUser | null>(null);
  //登陆
  const login = (form: AuthForm) => {
    return AuthMethod.login(form).then(setUser);
  };
  //注册
  const register = (form: AuthForm) => {
    return AuthMethod.register(form).then(setUser);
  };
  //登出
  const logout = () => {
    return AuthMethod.logout().then(() => setUser(null));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
    ></AuthContext.Provider>
  );
};

//使用
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
