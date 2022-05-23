<template>
  <div class="news">
    <div class="news-left">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="40" />
    </div>
    <div class="news-right">
      <div class="news-right-top">
        <span class="name"> {{ name }}</span>
        <slot></slot>
      </div>
      <div class="news-right-bottom">
        <span class="date"> {{ date }} </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // name 
  name: {
    type: String,
    default: "赵明诚"
  },
  // 日期
  date: {
    type: String,
    default: "2022-05-23 14:47:00"
  }
})

</script>

<style scoped lang="scss">
.news {
  width: 100%;
  border-bottom: 1px solid var(--header-border-color);
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  &-left {
    padding-bottom: 10px;
  }

  &-right {
    margin-left: 8px;

    &-top {
      display: flex;
    }

    &-bottom {
      position: relative;
      top: 10px;

      .date {
        font-size: 14px;
        padding-top: 10px;
        color: #ccc;
      }
    }
  }
}
</style>