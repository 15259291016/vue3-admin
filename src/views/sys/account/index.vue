<template>
  <div class="account-manager">
    <div class="tree">
      <AccountTree />
    </div>
    <div class="table">
      <AccountTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountTree from './account-tree.vue';
import AccountTable from './account-table.vue';
</script>

<style scoped lang="scss">
.account-manager {
  height: 83.5vh;
  width: 83.5vw;
  display: flex;

  .tree {
    width: 15.5vw;
    height: 83.5vh;
    background-color: var(--card-bg-color);
    border-radius: 3px;
  }
  .table {
    width: 67vw;
    height: 83.5vh;
    background-color: var(--card-bg-color);
    margin-left: 15px;
    border-radius: 3px;
  }
}
</style>
