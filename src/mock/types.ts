// 账号管理表格数据类型
/* 
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
*/
export interface AccountDataList {
  date: string;
  name: string;
  state: string;
  city: string;
  address: string;
  zip: string;
  tag: string;
}

// 部门管理表格数据类型

export interface DeptDataList {
  name: string;
  sort: number;
  date: string;
  status: boolean;
  notes: string;
  children?: DeptDataList[];
}
