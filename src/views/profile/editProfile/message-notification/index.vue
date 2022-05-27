<template>
  <div class="message-notification">
    <SettingCard title="新消息通知" :data="list" :haveSwither="true">
      <template #right>
        <el-switch active-color="#13ce66" inactive-color="#ccc" />
      </template>
    </SettingCard>
  </div>
</template>

<script setup lang="ts">
import SettingCard from "../components/setting-card.vue"
import { CardLeftItem } from "../components/types";

const list: CardLeftItem[] = [
  {
    subtitle: '账户密码',
    description: '其他用户的消息将以站内信的形式通知',
    switcherValue: false,
  },
  {
    subtitle: '系统消息',
    description: '系统消息将以站内信的形式通知',
    switcherValue: true,
  },
  {
    subtitle: '待办任务',
    description: '待办任务将以站内信的形式通知',
    switcherValue: false,
  },
]

</script>

<style scoped>
</style>