<template>
  <el-card class="quickNav">
    <template #header>
      <span> {{ $t('msg.workBench.quickNav') }} </span>
    </template>
    <ul class="actions">
      <li class="item"><a href="">操作一</a> </li>
      <li class="item"><a href="">操作二</a> </li>
      <li class="item"><a href="">操作三</a> </li>
      <li class="item"><a href="">操作四</a> </li>
      <li class="item"><a href="">操作五</a> </li>
      <li class="item"><a href="">操作六</a> </li>
      <li class="item">
        <el-button class="button-new-tag ml-1" size="small">
          + 添加
        </el-button>
      </li>
    </ul>
  </el-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.actions {
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 25%;

    .el-tag {
      border: 1px solid var(--primary-color-green);
      background-color: var(--header-bg-color);
      color: var(--header-text-color);
    }

    &:nth-child(n+5) {
      padding-top: 15px;
    }

    &:last-child {
      color: var(--primary-color-green);
    }
  }
}
</style>