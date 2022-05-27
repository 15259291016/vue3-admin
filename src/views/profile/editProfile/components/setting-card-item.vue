<template>
  <div class="setting-card-item">
    <p> {{ item?.subtitle }} </p>
    <span class="description"> {{ item?.description }} </span>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { CardLeftItem } from './types';

const props = defineProps({
  item: {
    type: Object as PropType<CardLeftItem>
  }
})
</script>

<style scoped lang="scss">
.setting-card-item {
  font-size: 14px;

  .description {
    display: block;
    margin-top: 5px;
    color: #8f8f8f;
  }
}
</style>