import { ReactNode } from 'react';
import { AuthProdiver } from './auth-context';
import { QueryClient, QueryClientProvider } from 'react-query';

//context顶级组件
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProdiver>{children}</AuthProdiver>
    </QueryClientProvider>
  );
};
