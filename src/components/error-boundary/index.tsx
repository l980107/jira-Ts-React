import { Component, PropsWithChildren, ReactElement } from 'react';
// ReactElement: 就是jsx语句
interface ErrorBoundaryProps {
  fallbackRender: (props: { error: Error | null }) => ReactElement;
}

export default class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  { error: Error | null }
> {
  state = {
    error: null,
  };

  //当子组件抛出error时，执行并且将state error设置为子组件抛出的error
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender;
    }
    return children;
  }
}
