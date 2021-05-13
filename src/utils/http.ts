const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data: object;
  token: string;
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
  { data, token, headers, ...customConfig }: Config
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  return window.fetch(`${apiUrl}/${endpoint}`, {});
};
