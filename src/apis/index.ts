import axios from '../axios/request';

export const getList = (data: any) => {
  return axios({
    method: 'post',
    url: '/api/list',
    data,
  });
};

export const getAccountList = (data: any) => {
  return axios({
    method: 'post',
    url: '/api/account_list',
    data,
  });
};
