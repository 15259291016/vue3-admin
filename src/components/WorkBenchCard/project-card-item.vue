<template>
  <div class="item">
    <div class="item-header">
      <!--  header 图标 -->
      <slot></slot>
      <span> {{ title }}</span>
    </div>
    <div class="item-body">
      <span> {{ content }}</span>
    </div>
    <div class="item-footer">
      <span> {{ author }}</span>
      <span> {{ date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // header 标题
  title: {
    type: String,
    default: "github"
  },
  // body 内容
  content: {
    type: String,
    default: "那是一种内在的东西， 他们到达不了，也无法触及的"
  },
  // footer 作者
  author: {
    type: String,
    default: "Rich4$t"
  },
  // footer 时间
  date: {
    type: String,
    default: "9小时前"
  }
})

</script>

<style scoped lang="scss">
.item {
  border: 1px solid var(--header-border-color);
  width: 33%;
  padding: 20px 17px;

  &:hover {
    transform: scale(1.005);
    box-shadow: 0 0 0.5px 3px var(--hover-effect-color);
  }

  &-header {
    display: flex;
    align-items: center;

    span {
      margin-left: 12px;
    }
  }

  &-body {
    color: #8f8f8f;
    padding: 10px 0;
    font-size: 14px;
  }

  &-footer {
    display: flex;
    justify-content: space-between;
    color: #8f8f8f;
    font-size: 13px;
    transition: all 0.3s;

    & span:first-child {
      &:hover {
        color: var(--primary-color-green);
        cursor: pointer;
      }
    }

    & span:nth-child(2) {
      color: #ccc;
    }
  }
}
</style>