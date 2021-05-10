const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data: object;
  token: string;
}

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
