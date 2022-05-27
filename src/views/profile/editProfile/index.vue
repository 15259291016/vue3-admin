<template>
  <el-card class="edit-profile">
    <el-tabs tab-position="left" style="height: auto" class="demo-tabs">
      <el-tab-pane label="基本设置">
        <BaseSetting />
      </el-tab-pane>
      <el-tab-pane label="安全设置">
        <SecuritySetting />
      </el-tab-pane>
      <el-tab-pane label="账号绑定">
        <AccountBind />
      </el-tab-pane>
      <el-tab-pane label="新消息通知">
        <MessageNotification />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup lang="ts">
import BaseSetting from './base-setting/index.vue';
import SecuritySetting from './security-setting/index.vue';
import AccountBind from './account-bind/index.vue';
import MessageNotification from './message-notification/index.vue';

</script>

<style scoped lang="scss">
:deep(.el-tabs__item.is-left) {
  text-align: left;
}

:deep(.el-tabs__item.is-left.is-active) {
  background-color: var(--primary-color-green);
  color: #fff;
}

:deep(.el-tabs__active-bar.is-left) {
  width: 3px;
  background-color: #333300;
}
</style>