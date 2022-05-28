<template>
  <div class="step3">
    <el-result icon="success" title="操作成功" sub-title="预计两小时内到账">
      <template #extra>
        <div class="info">
          <div class="item">
            <span class="label">付款账户:</span>
            <span class="info">zmingcheng204@gmail.com</span>
          </div>
          <div class="item">
            <span class="label">收款账户:</span>
            <span class="info">test@example.com</span>
          </div>
          <div class="item">
            <span class="label">收款人姓名:</span>
            <span class="info">Rich4$t</span>
          </div>
          <div class="item">
            <span class="label">转账金额:</span>
            <span class="info">￥ 5,000.00</span>
          </div>
        </div>
      </template>
    </el-result>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.step3 {
  position: relative;
  left: -350px;

  .item {
    font-size: 15px;
    margin: 20px 0;
    text-align: left;


    .info {
      margin-left: 15px;
    }
  }
}

.el-result {
  padding: unset;
}

:deep(.el-result__extra) {
  margin-top: unset;
}
</style>