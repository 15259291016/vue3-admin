/* 白名单，不存储为tagsView */

const whiteList = ['/login', '/', '/home'];

export const isTags = (path: string) => {
  return !whiteList.includes(path);
};
