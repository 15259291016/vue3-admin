<template>
  <div class="role">
    <!-- 搜索区域 -->
    <div class="role-search">
      <div class="left">
        <div class="item">
          <span>角色名称</span>
          <el-input v-model="roleName" placeholder="请输入角色名称" />
        </div>
        <div class="item">
          <span>状态</span>
          <el-select v-model="status" class="m-2" placeholder="请选择">
            <el-option label="启用" value="on" />
            <el-option label="停用" value="off" />
          </el-select>
        </div>
      </div>
      <div class="right">
        <el-button>重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <!-- 表格内容区域 -->
    <Table
      :data="tableData"
      :options="options"
      element-loading-text="加载中..."
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      @check="check"
      isEditRow
      v-model:edit-row-index="editRowIndex"
      :total="total"
      @size-change="sizeChange"
      @current-change="currentChange"
      stripe
    >
      <template #date="{ scope }">
        {{ scope.row.date }}
      </template>
      <template #name="{ scope }">
        <el-tag>{{ scope.row.name }}</el-tag>
      </template>
      <template #action="{ scope }">
        <el-button type="primary" @click="edit(scope)">编辑</el-button>
        <el-button>删除</el-button>
      </template>
      <template #editRow="{ scope }">
        <el-button type="primary">确认</el-button>
        <el-button>取消</el-button>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table/src/index.vue';
import { TableOptions } from '@/components/Table/src/types';
import { getList } from '@/apis/index';

const roleName = ref<string>('');
const status = ref<string>('');
const editRowIndex = ref<string>('');

// 分页配置
const current = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);
// 表格数据u
interface TableDate {
  name: string;
  date: string;
  address: string;
}

const tableData = ref<TableDate[]>([]);

const getData = async () => {
  const { data } = await getList({
    current: current.value,
    pageSize: pageSize.value,
  });
  tableData.value = data.rows;
  total.value = data.total;
};

onMounted(() => {
  getData();
});

// 表格配置
const options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
    editable: true,
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name',
    editable: true,
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
    editable: true,
  },
  {
    label: '操作',
    align: 'center',
    action: true,
  },
];

// 编辑表格数据
const edit = (scope: any) => {
  editRowIndex.value = 'edit';
};

// loading SVG
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

// 点击勾
const check = (scope: any) => {};

// 分页条数change事件
const sizeChange = (val: number) => {
  pageSize.value = val;
  getData();
};
// 分页页数change事件
const currentChange = (val: number) => {
  current.value = val;
  getData();
};
</script>

<style scoped lang="scss">
.role {
  &-search {
    width: 100%;
    height: 45px;
    background-color: var(--app-card-bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;

    .left {
      display: flex;

      & .item:nth-child(2) {
        margin-left: 30px;
      }

      .item {
        display: flex;
        align-items: center;

        .el-input,
        .el-select {
          width: 300px;
          margin-left: 10px;
        }
      }
    }
  }

  &-body {
    width: 100%;
    margin-top: 10px;

    .title {
      padding: 5px;
      height: 50px;
      background-color: var(--card-bg-color);
    }
  }
}
</style>
