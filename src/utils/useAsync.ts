import { useState } from 'react';

interface State<D> {
  error: Error | null;
  data: D | null;
  stat: 'idle' | 'loading' | 'error' | 'success';
}

const defaultInitialState: State<null> = {
  error: null,
  data: null,
  stat: 'idle',
};

const defaultInitalError = {
  throwOnError: false,
};

export const useAsync = <D>(initialState?: State<D>, initialError?: typeof defaultInitalError) => {
  const config = {
    ...defaultInitalError,
    ...initialError,
  };

  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState,
  });

  //请求成功
  const setData = (data: D) =>
    setState({
      data,
      stat: 'success',
      error: null,
    });

  //请求失败
  const setError = (error: Error) =>
    setState({
      data: null,
      error,
      stat: 'error',
    });

  //用来触发异步请求的
  const run = async (promise: Promise<D>) => {
    //异常处理
    if (!promise || !promise.then) {
      throw new Error('需要传入 Promise 对象');
    }
    //请求成功设置Data和状态
    setState({ ...state, stat: 'loading' });
    try {
      const data = await promise;
      setData(data);
      return data;
    } catch (error) {
      setError(error);
      if (config.throwOnError) return Promise.reject(error);
      return error;
    }
  };

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    run,
    setData,
    setError,
    ...state,
  };
};
