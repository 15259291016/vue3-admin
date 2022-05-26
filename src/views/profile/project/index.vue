<template>
  <div class="project">
    <ProjectCard v-for="item in 5" :key="item" />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/Card/ProjectCard.vue';

</script>

<style scoped lang="scss">
.project {
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>