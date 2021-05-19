import styled from '@emotion/styled';
import { Spin, Typography } from 'antd';
import { DevTools } from 'jira-dev-tool';
export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number | boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${(props) =>
    typeof props.marginBottom === 'number'
      ? props.marginBottom + 'rem'
      : props.marginBottom
      ? '3rem'
      : undefined};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '3rem' : undefined};
  }
`;

export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'} tip="Loading..." />
  </FullPage>
);

export const FullPageError = ({ error }: { error: Error | null }) => (
  <FullPage>
    <DevTools />
    <Typography.Text type={'danger'}>{error?.message}</Typography.Text>
  </FullPage>
);

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
