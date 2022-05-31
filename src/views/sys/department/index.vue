<template>
  <div class="dept-manager">
    <!-- 搜索区域 -->
    <el-card style="height: auto">
      <div class="dept-search">
        <div class="left">
          <div class="item">
            <span>部门名称</span>
            <el-input v-model="roleName" placeholder="请输入用户名" />
          </div>
          <div class="item">
            <span>状态</span>
            <el-select v-model="status" class="m-2" placeholder="请选择">
              <el-option label="启用" value="on" />
              <el-option label="停用" value="off" />
            </el-select>
          </div>
        </div>
        <div>
          <el-button>重置</el-button>
          <el-button type="primary">查询</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="table">
      <div class="header">
        <span>部门列表</span>
        <el-button type="primary"> 新增部门 </el-button>
      </div>
      <el-table :data="tableData" row-key="sort">
        <el-table-column prop="name" label="部门名称" sortable width="180" />
        <el-table-column prop="sort" label="排序" sortable width="80" />
        <el-table-column prop="status" label="状态" sortable width="100">
          <template #default="scope">
            <el-tag v-if="scope.row.status === true" type="success">{{
              scope.row.status
            }}</el-tag>
            <el-tag v-else type="danger">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="创建时间" sortable width="180" />
        <el-table-column prop="notes" label="备注" sortable width="530" />
        <el-table-column prop="actions" label="操作" sortable width="180">
          <template #default>
            <el-button type="primary">编辑</el-button>
            <el-button>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { DeptDataList } from '@/mock/types';

const roleName = ref<string>('');
const status = ref<string>('');

const tableData = ref<DeptDataList[]>([]);

tableData.value = [
  {
    name: '华东分部',
    sort: 1,
    status: true,
    date: '2022-05-31',
    notes: 'you fit into me,like a hook into an eye;a fish hook,an open eye',
    children: [
      {
        name: '研发部',
        sort: 4,
        status: true,
        date: '2022-05-31',
        notes: "Shall I compare thee to a summer's day?",
      },
      {
        name: '市场部',
        sort: 5,
        status: true,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
      {
        name: '商务部',
        sort: 6,
        status: true,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
      {
        name: '财务部',
        sort: 7,
        status: false,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
    ],
  },
  {
    name: '华南分部',
    sort: 2,
    status: false,
    date: '2022-05-31',
    notes: 'you fit into me,like a hook into an eye;a fish hook,an open eye',
    children: [
      {
        name: '研发部',
        sort: 8,
        status: false,
        date: '2022-05-31',
        notes: "Shall I compare thee to a summer's day?",
      },
      {
        name: '市场部',
        sort: 9,
        status: false,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
      {
        name: '商务部',
        sort: 10,
        status: false,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
      {
        name: '财务部',
        sort: 11,
        status: false,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
    ],
  },
  {
    name: '西北分部',
    sort: 3,
    status: true,
    date: '2022-05-31',
    notes: 'you fit into me,like a hook into an eye;a fish hook,an open eye',
    children: [
      {
        name: '研发部',
        sort: 12,
        status: true,
        date: '2022-05-31',
        notes: "Shall I compare thee to a summer's day?",
      },
      {
        name: '市场部',
        sort: 13,
        status: true,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
      {
        name: '商务部',
        sort: 14,
        status: true,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
      {
        name: '财务部',
        sort: 15,
        status: true,
        date: '2022-05-31',
        notes: 'So long as men can breathe, or eyes can see,So long lives this',
      },
    ],
  },
];
</script>

<style scoped lang="scss">
.dept-manager {
  width: 83.5vw;
  height: 83.5vh;
  background-color: var(--table-bg-color);
  .dept-search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    .left {
      display: flex;
      flex: 1;
      justify-content: space-around;

      & .item:nth-child(2) {
        margin-left: 30px;
      }

      .item {
        display: flex;
        align-items: center;

        .el-input,
        .el-select {
          width: 200px;
          margin-left: 10px;
        }
      }
    }
  }
  .table {
    margin-top: 10px;
    .header {
      display: flex;
      justify-content: space-between;
      padding: 5px 20px;
    }
    .el-table {
      width: 100%;
      height: 100%;
    }
  }
}

:deep(.el-card__body) {
  padding: 10px;
}
</style>
