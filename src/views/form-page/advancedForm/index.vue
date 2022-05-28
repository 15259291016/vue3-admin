<template>
  <el-alert title="高级表单常见于一次性输入和提交大批量数据的场景。" type="warning" />
  <div class="advanced-form">
    <div class="depot-manager">
      <p>仓库管理</p>
      <DepotManagerForm class="item" />
    </div>
    <div class="task-manager">
      <p>任务管理</p>
      <TaskManagerForm class="item" />
    </div>
    <div class="submit-btn">
      <el-button type="primary" size="large">提交</el-button>
    </div>
  </div>

</template>

<script setup lang="ts">
import DepotManagerForm from './depot-manager-form.vue'
import TaskManagerForm from './task-manager-form.vue';

</script>

<style scoped lang="scss">
.advanced-form {
  width: 83.5vw;

  .depot-manager,
  .task-manager {
    background-color: var(--card-bg-color);
  }

  p {
    display: block;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 1px solid var(--header-border-color);
  }

  .item {
    padding: 20px;
  }

  .task-manager {
    margin: 20px 0;
  }

  .submit-btn {
    height: 50px;
    width: 84.5vw;
    background-color: var(--card-bg-color);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .el-button {
      margin-right: 20px;
      width: 100px;
    }
  }
}

:deep(.el-date-editor.el-input__inner) {
  box-shadow: unset;
  border: 1px solid var(--header-border-color);
}

:deep(.el-input-group__prepend),
:deep(.el-input-group__append) {
  box-shadow: unset;
  background-color: unset;
  border: 1px solid var(--header-border-color);
}
</style>