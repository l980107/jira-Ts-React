import React, { ReactNode, useState } from "react";
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

export const AuthProdiver = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IntUser | null>(null);

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

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider使用");
  }

  return context;
};
