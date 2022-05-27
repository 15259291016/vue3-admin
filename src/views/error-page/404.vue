<template>
  <div class="not-found-error">
    <img src="@/assets/images/404.svg" alt="">
    <h2>抱歉，您访问的页面不存在。</h2>
    <el-button @click="$router.push('/analysis')">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.not-found-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  img {
    height: 70vh;
    width: 80vw;
  }

  h1 {
    font-size: 30px;
  }
}
</style>