<template>
  <div class="security-setting">
    <SettingCard title="安全设置" :data="list">
      <template #right>
        <span class="setting-right">修改</span>
      </template>
    </SettingCard>
  </div>
</template>

<script setup lang="ts">
import SettingCard from '../components/setting-card.vue'
import { CardLeftItem } from '../components/types';


const list: CardLeftItem[] = [
  {
    subtitle: '账户密码',
    description: '当前密码强度：：强',
  },
  {
    subtitle: '密保手机',
    description: '已绑定手机: 138****8293',
  },
  {
    subtitle: '密保问题',
    description: '未设置密保问题，密保问题可有效保护账户安全',
  },
  {
    subtitle: '备用邮箱',
    description: '已绑定邮箱: ant***sign.com',
  },
  {
    subtitle: 'MFA 设备',
    description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
  },
]


</script>

<style scoped lang="scss">
.security-setting {
  font-size: 14px;

  .password-strong {
    display: block;
    margin-top: 5px;
    color: #8f8f8f;
  }

  .setting-right {
    color: var(--primary-color-green);
  }
}
</style>