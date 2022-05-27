<template>
  <div class="account-bind">
    <SettingCard title="账号绑定" :data="list">
      <template #right>
        <span class="setting-right">绑定</span>
      </template>
    </SettingCard>
  </div>
</template>

<script setup lang="ts">
import SettingCard from '../components/setting-card.vue'
import { CardLeftItem } from '../components/types';

const list: CardLeftItem[] = [
  {
    subtitle: '绑定Github',
    description: '当前未绑定Github'
  },
  {
    subtitle: '绑定Google',
    description: '当前未绑定Google'
  },
  {
    subtitle: '绑定饿了么',
    description: '当前未绑定饿了么'
  },
]

</script>

<style scoped lang="scss">
.account-bind {
  font-size: 14px;

  .setting-right {
    color: var(--primary-color-green);
  }
}
</style>