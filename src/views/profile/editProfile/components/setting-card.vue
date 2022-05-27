<template>
  <div class="setting-card">
    <div class="title">
      <span> {{ title }} </span>
    </div>
    <div class="body" v-for="(item, index) in refData" :key="index">
      <div class="body-left">
        <slot name="left"></slot>
        <SettingCardItem :item="item" />
      </div>
      <div class="body-right">
        <slot name="right" v-if="!haveSwither"></slot>
        <div class="switcher" v-else>
          <el-switch v-model="item.switcherValue" active-color="#13ce66" inactive-color="#ccc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import SettingCardItem from '../components/setting-card-item.vue';
import { CardLeftItem } from './types'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Object as PropType<CardLeftItem[]>,
    required: true,
  },
  haveSwither: {
    type: Boolean,
    default: false,
  }
})

const refData = ref<CardLeftItem[]>(props.data)
</script>

<style scoped lang="scss">
.setting-card {
  .title {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid var(--header-border-color);

    span {
      padding-left: 20px;
    }
  }

  .body {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--header-border-color);

    &-right {
      cursor: pointer;
    }
  }
}
</style>