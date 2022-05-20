<template>
  <el-tooltip effect="dark" :content="content" :placement="placement">
    <slot></slot>
  </el-tooltip>
</template>||

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  // "top"||"top-start"||"top-end"||"bottom"||"bottom-start"||"bottom-end"||"left"||"left-start"||"left-end"||"right"||"right-start"||"right-end"
  placement: {
    type: String,
    default: "bottom",
  }
})
</script>
