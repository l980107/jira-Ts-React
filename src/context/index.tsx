import { ReactNode } from "react";
import { AuthProdiver } from "./auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProdiver>{children}</AuthProdiver>;
};
