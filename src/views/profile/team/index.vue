<template>
  <ul class="team-item">
    <li>
      <a href="https://v3.cn.vuejs.org/">
        <slot name="vue"></slot>
        <span>Vue</span>
      </a>
    </li>
    <li>
      <a href="https://zh-hans.reactjs.org/">
        <slot name="react"></slot>
        <span>React</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/">
        <slot name="github"></slot>
        <span>Github</span>
      </a>
    </li>
    <li>
      <a href="https://www.google.com/">
        <slot name="google"></slot>
        <span>Google</span>
      </a>
    </li>
    <li>
      <a href="https://element-plus.gitee.io/zh-CN/">
        <slot name="element"></slot>
        <span>Element-Plus</span>
      </a>
    </li>
    <li>
      <a href="https://angular.io/">
        <slot name="angular"></slot>
        <span>Angular</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.team-item {
  display: flex;
  flex-wrap: wrap;

  li {
    width: 50%;

    a {
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
      }
    }
  }

  li:first-child,
  li:nth-child(2) {
    margin-top: 15px;
  }

  li:nth-child(3),
  li:nth-child(4) {
    margin: 20px 0;
  }
}
</style>