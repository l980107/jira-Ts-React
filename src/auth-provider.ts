// 真实环境中如果使用了firebase这种第三方auth服务的话，本文件不需要开发者开发
import { IntUser } from "./screens/project-list/search-form/SearchForm";

//token
const localStorageKey = "__auth_provider_token__";

//请求地址
const aipUrl = process.env.REACT_APP_API_URL;

/**
 * 获取token
 *
 * @returns token
 */
export const getToken = () => window.localStorage.getItem(localStorageKey);

/**
 * 
 * @param param0
 * @returns
 */
export const handleUserResponse = ({ user }: { user: IntUser }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

/**
 * login方法
 *
 * @param {{username: string; password: string}} user 登陆用户信息用户名密码
 * @returns Promise
 */
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

/**
 * 注册方法
 *
 * @param {{ username: string; password: string }} user 用户信息
 * @returns Promise
 */
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

/**
 * 登出方法 清除本地缓存用户信息
 *
 * @returns void
 */
export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
