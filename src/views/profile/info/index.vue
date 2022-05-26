<template>

  <div class="info">
    <div class="info-top">
      <!-- 头像区域 -->
      <div class="avatar">
        <el-avatar src="https://s1.ax1x.com/2022/05/24/XPRY6S.png" :size="110" />
      </div>
      <!-- 个性签名区域 -->
      <div class="signature">
        <p>Rich4$t</p>
        <span>Where there is a will, there is a way</span>
      </div>
    </div>
    <div class="info-bottom">
      <div class="item">
        <i class="r4 r4-book"></i>
        <span>前端学习中</span>
      </div>
      <div class="item">
        <i class="r4 r4-company"></i>
        <span>厦门理工学院-某某学院-某某班-某某某某某某某某</span>
      </div>
      <div class="item">
        <i class="r4 r4-location"></i>
        <span>福建省厦门市</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.info {
  border-bottom: 1px solid var(--header-border-color);
  padding-bottom: 25px;

  &-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .signature {
      margin-top: 20px;

      p {
        font-size: 25px;
      }

      span {
        margin-top: 5px;
        display: block;
        color: #5f5f5f;
        font-size: 15px;
      }
    }
  }

  &-bottom {
    margin-top: 20px;

    .item {
      span {
        margin-left: 10px;
        font-size: 14px;
        color: #5f5f5f;
      }
    }

    .item:nth-child(2) {
      margin: 13px 0;
    }
  }
}
</style>