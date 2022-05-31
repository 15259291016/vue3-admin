// mock.js 文件
import Mock from 'mockjs'; // 引入mockjs
const Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据
import { AccountDataList, DeptDataList } from './types';

// 角色管理表格数据类型
interface DataList {
  date: string;
  name: string;
  address: string;
}

// 角色管理 表格数据接口
const dataList: DataList[] = []; // 用于接受生成数据的数组
for (let i = 0; i < 30; i++) {
  // 可自定义生成的个数
  const template = {
    date: Random.date(), // 生成一个随机日期,可加参数定义日期格式
    name: Random.name(), // 生成姓名
    address: Random.province(), // 生成地址
  };
  dataList.push(template);
}
Mock.mock('http://127.0.0.1:3000/api/list', 'post', (params: any) => {
  const info = JSON.parse(params.body);
  const [index, size, total] = [info.current, info.pageSize, dataList.length];
  const len = total / size;
  const totalPages =
    len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len;
  const newDataList = dataList.slice(index * size, (index + 1) * size);
  return {
    code: '200',
    message: '获取成功',
    data: {
      current: index,
      pageSize: size,
      rows: newDataList,
      total,
      totalPages,
    },
  };
});

// 账号管理 表格数据接口
const accountDataList: AccountDataList[] = []; // 用于接受生成数据的数组
for (let i = 0; i < 30; i++) {
  // 可自定义生成的个数
  const template = {
    date: Random.date(), // 生成一个随机日期,可加参数定义日期格式
    name: Random.cname(), // 生成姓名
    state: Random.region(), // 生成省份
    city: Random.city(), // 生成城市
    address: Random.county(), // 生成地址
    zip: Random.zip(), // 生成邮编
    tag: Random.word(), //
  };
  accountDataList.push(template);
}
Mock.mock('http://127.0.0.1:3000/api/account_list', 'post', (params: any) => {
  const info = JSON.parse(params.body);
  const [index, size, total] = [
    info.current,
    info.pageSize,
    accountDataList.length,
  ];
  const len = total / size;
  const totalPages =
    len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len;
  const newDataList = accountDataList.slice(index * size, (index + 1) * size);
  return {
    code: '200',
    message: '获取成功',
    data: {
      current: index,
      pageSize: size,
      rows: newDataList,
      total,
      totalPages,
    },
  };
});
