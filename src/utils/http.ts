import { useAuth } from 'context/auth-context';
import qs from 'qs';
import * as auth from '../auth-provider';
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object;
  token?: string;
}

/**
 * 封装fetch请求
 *
 * @param { string } endpoint 路由地址
 * @param { Config } param1
 * @returns
 */
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {},
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };

  //如果是get请求就格式化参数并传参
  //toUpperCase() 将method转换为大写字符串形式
  if (config.method.toUpperCase() === 'GET') {
    //将data序列化为url形式
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
    //1. 处理401情况
    if (response.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: '请重新登陆！' });
    }
    //2. 格式化data
    const data = await response.json();
    //3. 返回data
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

// 自定义hook 为了传递用户token
export const useHttp = () => {
  const { user } = useAuth();

  return (endpoint: string, config: Config) => http(endpoint, { ...config, token: user?.token });
};
