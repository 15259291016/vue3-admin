<template>
  <div>
    <el-result icon="error" title="提交失败" sub-title="请核对并修改以下信息后，再重新提交。">
      <template #extra>
        <div class="extra-wrap">
          <div class="actions">
            <h1>您提交的内容有如下错误：</h1>
            <div class="item">
              <i class="r4 r4-close"></i>
              <span class="description">您的账户已被冻结 </span>
              <a href="">
                <span>立即解冻 </span>
                <i class="r4 r4-arrow-right"></i>
              </a>
            </div>
            <div class="item">
              <i class="r4 r4-close"></i>
              <span class="description">您的账户还不具备申请资格 </span>
              <a href="">
                <span>立即升级 </span>
                <i class="r4 r4-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="buttons">
            <el-button type="primary" @click="$router.push('/analysis')">返回修改</el-button>
          </div>
        </div>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.extra-wrap {
  .actions {
    background-color: var(--el-color-primary-light-9);
    height: 12vh;
    width: 80vw;
    padding: 20px;
    text-align: left;

    .item {
      display: flex;
      align-items: center;
      margin: 20px 0;

      .description {
        margin-left: 10px;
      }

      .r4-close {
        color: red;
      }

      a {
        display: block;
        margin-left: 20px;
        color: var(--primary-color-green);
      }
    }
  }

  .buttons {

    margin-top: 20px;
  }
}
</style>