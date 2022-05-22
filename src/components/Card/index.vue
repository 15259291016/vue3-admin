<template>
  <el-card class="card-hover-effect">
    <!-- 头部区域 -->
    <template #header>
      <div class="header">
        <span class="header-title"> {{ headerTitle }} </span>
        <el-tag>
          <span> {{ headerTag }} </span>
        </el-tag>
      </div>
    </template>
    <!-- 内容区域 -->
    <div class="body">
      <div class="body-item">
        <span class="count"> {{ count }} </span>
        <img src="@/assets/images/visitCount.svg" v-if="headerTitle === '访问数'">
        <img src="@/assets/images/visitCount.svg" v-if="headerTitle === 'visits'">
        <img src="@/assets/images/orderCount.svg" v-if="headerTitle === '成交额'">
        <img src="@/assets/images/orderCount.svg" v-if="headerTitle === 'benefits'">
        <img src="@/assets/images/downloadCount.svg" v-if="headerTitle === '下载数'">
        <img src="@/assets/images/downloadCount.svg" v-if="headerTitle === 'downloads'">
        <img src="@/assets/images/benefitCount.svg" v-if="headerTitle === '成交数'">
        <img src="@/assets/images/benefitCount.svg" v-if="headerTitle === 'orders'">
      </div>
      <div class="body-item">
        <span class="amountTitle"> {{ amountTitle }} </span>
        <span class="amount"> {{ amount }} </span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const props = defineProps({
  // 头部标题
  headerTitle: {
    type: String,
    required: true,
  },
  // 头部tag
  headerTag: {
    type: String,
    default: "月"
  },
  // 数量
  count: {
    type: Number,
    default: 1000
  },
  // 图标
  iconUrl: {
    type: String,
    default: 'https://imgtu.com/i/OQeNjg'
  },
  // 总量标题
  amountTitle: {
    type: String,
    default: "总访问数"
  },
  // 总数量
  amount: {
    type: Number,
    default: 999
  }

})


</script>

<style scoped lang="scss">
.el-tag {
  border-color: var(--header-border-color);
}

.el-card {
  width: 24%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .body {
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .count {
        font-size: 30px;
      }
    }

    &-item:nth-child(1) {
      padding: 10px 0 15px 0;
    }
  }
}

:deep(.el-card__header) {
  padding: 8px;
  font-size: 14px;
}
</style>