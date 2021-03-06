import { useEffect, useRef } from 'react';

export const isFalsy = (value: unknown) => {
  return value === 0 ? false : !value;
};

export const isVoid = (value: unknown) => value === undefined || value === null || value === '';

/**
 * 去空对象
 *
 * @param obj
 * @returns
 */
// let b: { [key: string]: unknown };
// b = { name: 'name' };
// b = { name: 'name', age: '12' };

export const cleanObject = (obj: { [key: string]: unknown }) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });

  return result;
};

/**
 * 自定义hook适应页面title
 */
export const useTitle = (title: string, titleChange: boolean = false) => {
  // const oldTitle = document.title; 形成闭包
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (titleChange) {
        document.title = oldTitle;
      }
    };
  }, [titleChange, oldTitle]);
};

/**
 * 重置根路由
 */
export const resetRouter = () => {
  return (window.location.href = window.location.origin);
};
