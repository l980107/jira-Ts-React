// 真实环境中如果使用了firebase这种第三方auth服务的话，本文件不需要开发者开发
import { IntUser } from "./screens/project-list/search-form/SearchForm";

const localStorageKey = "__auth_provider_token__";
const aipUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: IntUser }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (user: { username: string; password: string }) => {
  return fetch(`${aipUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(user);
    }
  });
};

export const register = (user: { username: string; password: string }) => {
  return fetch(`${aipUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(user);
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
