<template>
  <div class="analysis">
    <div class="analysis-data">
      <Card headerTitle="访问数" :count="222" amountTitle="总访问数" :amount="2022" />
      <Card headerTitle="成交额" :count="222" amountTitle="总成交额" :amount="2022" />
      <Card headerTitle="下载数" headerTag="周" :count="222" amountTitle="总下载数" :amount="2022" />
      <Card headerTitle="成交数" headerTag="年" :count="222" amountTitle="总成交数" :amount="2022" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card/index.vue'

</script>

<style scoped lang="scss">
.analysis {
  &-data {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>