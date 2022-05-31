<template>
  <el-table
    v-bind="$attrs"
    :data="tableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    @row-click="rowClick"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :widt="item.width"
        :align="item.align"
      >
        <template #default="scope">
          <template v-if="scope.row.rowEdit">
            <el-input v-model="scope.row[item.prop!]"></el-input>
          </template>
          <template v-else>
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div class="edit">
                <el-input
                  style="width: auto"
                  v-model="scope.row[item.prop!]"
                ></el-input>
                <div class="icons">
                  <i class="r4 r4-check" @click.stop="check(scope)"></i>
                  <i class="r4 r4-close" @click.stop="close(scope)"></i>
                </div>
              </div>
            </template>
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else> {{ scope.row[item.prop!] }} </span>
              <i
                v-if="item.editable"
                class="r4 r4-edit"
                @click.stop="clickEdit(scope)"
              ></i>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions!.label"
      :width="actionOptions!.width"
      :align="actionOptions!.align"
    >
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.rowEdit"></slot>
        <slot name="action" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination">
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { TableOptions } from './types';
import { cloneDeep } from 'lodash';

let props = defineProps({
  // 表格配置
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载图标
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景色
  elementLoadingBackground: {
    type: String,
  },
  // 加载SVG
  elementLoadingSvg: {
    type: String,
  },
  // 加载 SVG 的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  // 编辑行的标识
  editRowIndex: {
    type: String,
    default: '',
  },
  // 当前是第几页的数据
  currentPage: {
    type: Number,
    default: 1,
  },
  // 每页多少条数据
  pageSize: {
    type: Number,
    defaule: 10,
  },
  // 数据总数
  total: {
    type: Number,
  },
});
const emit = defineEmits([
  'check',
  'close',
  'update:editRowIndex',
  'sizeChange',
  'currentChange',
]);

// 深拷贝 表格数据
const tableData = ref<any[]>(cloneDeep(props.data));
// 拷贝按钮的标识
const cloneEditRowIndex = ref<string>(cloneDeep(props.editRowIndex));

// 监听父组件传递过来的数据
watch(
  () => props.data,
  (val) => {
    tableData.value = cloneDeep(val);
    tableData.value.map((item) => {
      // 代表当前是否是可编辑的状态
      item.rowEdit = false;
    });
  },
  { deep: true },
);

watch(
  () => props.editRowIndex,
  (val) => {
    if (val) {
      cloneEditRowIndex.value = cloneDeep(props.editRowIndex);
    }
  },
  { deep: true },
);

onMounted(() => {
  tableData.value.map((item) => {
    // 代表当前是否是可编辑的状态
    item.rowEdit = false;
  });
});

// 过滤 操作项 之后的配置
const tableOptions = computed(() =>
  props.options.filter((item) => !item.action),
);
// 找出 操作项 的配置
const actionOptions = computed(() => props.options.find((item) => item.action));

// 表格是否在加载状态
const isLoading = computed(() => !props.data || props.data.length === 0);

/* 点击 编辑图标 事件 */
const currentEdit = ref<string>(''); // 当前点击的单元格
const clickEdit = (scope: any) => {
  currentEdit.value = scope.$index + scope.column.id;
};

// 点击勾
const check = (scope: any) => {
  currentEdit.value = '';
  emit('check', scope);
};
// 点击叉
const close = (scope: any) => {
  currentEdit.value = '';
  emit('close', scope);
};

/* 点击 编辑图标 事件 */

// 点击了 每一行触发的事件
const rowClick = (row: any, column: any) => {
  // 判断当前点击的是否是操作项
  if (column.label === actionOptions.value!.label) {
    // 编辑行 的操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      // 点击编辑按钮做可编辑的操作
      row.rowEdit = !row.rowEdit;
      // 重置其他行的编辑状态
      tableData.value.map((item) => {
        if (item !== row) item.rowEdit = false;
      });
      // 重置按钮的标识
      if (!row.rowEdit) emit('update:editRowIndex', '');
    }
  }
};

// 分页条数改变事件
const handleSizeChange = (val: number) => {
  emit('sizeChange', val);
};
// 分页页数改变
const handleCurrentChange = (val: number) => {
  emit('currentChange', val);
};
</script>

<style scoped lang="scss">
.edit {
  display: flex;
  align-items: center;
  .icons {
    margin-left: 10px;
  }
}
.r4 {
  cursor: pointer;
}
.r4-edit {
  margin-left: 0.5vw;
}
.r4-check {
  color: var(--primary-color-green);
}
.r4-close {
  margin-left: 0.5vw;
  color: red;
}
.el-table {
  margin-top: 10px;
}
.el-pagination {
  display: flex;
  justify-content: flex-end;
}
</style>
