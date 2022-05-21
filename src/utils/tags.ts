const whiteList = ['/login', '/', '/home'];

export const isTags = (path: string) => {
  return !whiteList.includes(path);
};
