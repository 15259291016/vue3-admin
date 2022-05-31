<template>
  <div class="search-wrap">
    <span>部门列表</span>
    <el-input v-model="filterText" size="small" placeholder="搜索">
      <template #append>
        <i class="r4 r4-search"></i>
      </template>
    </el-input>
    <el-dropdown @command="handleCommand">
      <i class="r4 r4-more" style="margin-left: 1vw"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="ExpandAll">展开全部</el-dropdown-item>
          <el-dropdown-item command="FoldAll">折叠全部</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <el-tree
    ref="treeRef"
    class="filter-tree hover-effect"
    :data="data"
    :props="defaultProps"
    :default-expand-all="isExpandAll"
    :filter-node-method="filterNode"
  />
</template>

<script setup lang="ts">
import type { ElTree } from 'element-plus';

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}

const filterText = ref(''); // 搜索文本
const treeRef = ref<InstanceType<typeof ElTree>>();
const isExpandAll = ref<boolean>(false); // 是否展开所有节点

const defaultProps = {
  children: 'children',
  label: 'label',
};

watch(filterText, (val) => {
  treeRef.value!.filter(val);
});

const filterNode = (value: string, data: Tree) => {
  if (!value) return true;
  return data.label.includes(value);
};

const data: Tree[] = [
  {
    id: 1,
    label: '华东分部',
    children: [
      {
        id: 4,
        label: '研发部',
      },
      {
        id: 5,
        label: '市场部',
      },
      {
        id: 6,
        label: '财务部',
      },
      {
        id: 7,
        label: '商务部',
      },
    ],
  },
  {
    id: 2,
    label: '华南分部',
    children: [
      {
        id: 8,
        label: '研发部',
      },
      {
        id: 9,
        label: '财务部',
      },
      {
        id: 10,
        label: '商务部',
      },
    ],
  },
  {
    id: 3,
    label: '西北分部',
    children: [
      {
        id: 11,
        label: '研发部',
      },
      {
        id: 12,
        label: '市场部',
      },
      {
        id: 13,
        label: '财务部',
      },
    ],
  },
];

// 处理 dropdown 每一项的事件
const handleCommand = (command: string | number | object) => {
  if (command === 'ExpandAll') {
    isExpandAll.value = true;
    console.log(isExpandAll.value);
  }
  isExpandAll.value = false;
};
</script>

<style scoped lang="scss">
.search-wrap {
  padding: 5px 10px 5px 10px;
  border-bottom: 1px solid var(--header-border-color);
  text-align: center;
  .el-input {
    margin-left: 15px;
    width: 100px;
  }
}
:deep(.el-input-group__append) {
  cursor: pointer;
  padding: 3px;
}
</style>
