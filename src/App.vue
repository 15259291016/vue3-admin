<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { isTags } from '@/utils/tags'
import { useAppStore } from '@/store/app'

const route = useRoute()
const store = useAppStore()

watch(route, (to, from) => {
  if (!isTags(to.path)) return
  const { fullPath, meta, name, params, path, query } = to
  store.addTag({ fullPath, meta, name, params, path, query, title: name })
}, {
  immediate: true
})
</script>

<style>
</style>
