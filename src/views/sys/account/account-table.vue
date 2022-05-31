<template>
  <div class="account-table">
    <!-- 搜索区域 -->
    <div class="account-search">
      <div class="left">
        <div class="item">
          <span>用户名</span>
          <el-input v-model="roleName" placeholder="请输入用户名" />
        </div>
        <div class="item">
          <span>昵称</span>
          <el-input v-model="nickname" placeholder="请输入昵称" />
        </div>
      </div>
      <div>
        <el-button>重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>
    </div>

    <div class="table">
      <div class="header">
        <span>账号列表</span>
        <el-button type="primary" @click="editDialogVisible = true"
          >新增账号</el-button
        >
      </div>
      <el-table
        :data="tableData"
        style="width: 100%; height: 63vh; overflow-y: auto"
      >
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="400" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="150">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              @click="handleClick(scope.row)"
              >编辑</el-button
            >
            <el-popconfirm title="数据删除后不可恢复,确认删除?">
              <template #reference>
                <el-button size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSizes"
      :page-sizes="[10, 20, 30, 50]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next,sizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <!-- 编辑对话框 -->
  <el-dialog v-model="editDialogVisible" title="表单" width="30%" center>
    <el-form :model="form" label-width="120px">
      <el-form-item label="日期:">
        <el-input v-model="form.date" clearable />
      </el-form-item>
      <el-form-item label="姓名:">
        <el-input v-model="form.name" clearable />
      </el-form-item>
      <el-form-item label="地区:">
        <el-input v-model="form.state" clearable />
      </el-form-item>
      <el-form-item label="城市:">
        <el-input v-model="form.city" clearable />
      </el-form-item>
      <el-form-item label="地址:">
        <el-input v-model="form.address" clearable />
      </el-form-item>
      <el-form-item label="邮编:">
        <el-input v-model="form.zip" clearable />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="editDialogVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { getAccountList } from '@/apis/index';
import { AccountDataList } from '@/mock/types';
import { onMounted, ref } from 'vue';

const roleName = ref<string>('');
const nickname = ref<string>('');
const editDialogVisible = ref<boolean>(false); // 编辑对话框是否显示

// 编辑 表单
const form = reactive({
  name: '',
  date: '',
  state: '',
  city: '',
  zip: '',
  address: '',
  tag: '',
});

const handleClick = (row: any) => {
  editDialogVisible.value = true;
  form.name = row.name;
  form.date = row.date;
  form.state = row.state;
  form.city = row.city;
  form.zip = row.zip;
  form.address = row.address;
  form.tag = row.tag;
  console.log(row);
};

// 分页配置
const current = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);
const tableData = ref<AccountDataList[]>([]);

const getData = async () => {
  const { data } = await getAccountList({
    current: current.value,
    pageSize: pageSize.value,
  });
  tableData.value = data.rows;
  total.value = data.total;
};

onMounted(() => {
  getData();
});

// 分页组件
const currentPage = ref(1);
const pageSizes = ref(10);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>

<style scoped lang="scss">
.account-table {
  background-color: var(--card-bg-color);
  height: 50vh;
  .account-search {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;

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

        .el-input {
          width: 200px;
          margin-left: 10px;
        }
      }
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
  }
  .table {
    margin-top: 10px;
  }
  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
