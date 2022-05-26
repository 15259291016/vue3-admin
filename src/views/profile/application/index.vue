<template>
  <div class="applications">
    <ApplicationCard v-for="item in 11" :key="item" />
  </div>
</template>

<script setup lang="ts">
import ApplicationCard from '@/components/Card/ApplicationCard.vue';

</script>

<style scoped lang="scss">
.applications {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>