<template>
  <div class="not-found-error">
    <img src="@/assets/images/500.svg" alt="">
    <h2>抱歉，服务器报告错误。</h2>
    <el-button @click="$router.push('/analysis')" type="primary">返回首页</el-button>
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