import { ReactNode } from "react";
import { AuthProdiver } from "./auth-context";

//context顶级组件
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProdiver>{children}</AuthProdiver>;
};
