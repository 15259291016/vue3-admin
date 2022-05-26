<template>
  <div class="article-item">
    <p class="title">Vue</p>
    <div class="tags">
      <el-tag>element-plus</el-tag>
      <el-tag>Vue</el-tag>
      <el-tag>TypeScript</el-tag>
    </div>
    <div class="content">
      <span>在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。</span>
    </div>
    <div class="footer">
      <div class="footer-left">
        <slot name="footer"></slot>
      </div>
      <div class="footer-right">
        <span>1976-02-01 05:16:21</span>
      </div>
    </div>
    <div class="actions">
      <div class="item">
        <i class="r4 r4-collection"></i>
        <span>417</span>
      </div>
      <div class="item">
        <i class="r4 r4-Love" style="--color: #5f5f5f; color: var(--color)" @click="switchColor" ref="el"></i>
        <span>417</span>
      </div>
      <div class="item">
        <i class="r4 r4-comment"></i>
        <span>417</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const el = ref(null)
const color = useCssVar('--color', el)

const switchColor = () => {
  if (color.value === '#5f5f5f')
    color.value = '#f91880'
  else
    color.value = '#5f5f5f'
}
</script>

<style scoped lang="scss">
.article-item {
  color: #5f5f5f;
  border-bottom: 1px solid var(--header-border-color);

  .title {
    font-size: 20px;
    margin: 10px 0;
  }

  .tags {
    .el-tag:not(:first-child) {
      margin-left: 7px;
    }
  }

  .content {
    font-size: 14px;
    padding: 10px 0;
  }

  .footer {

    &-left {
      display: flex;
      align-items: center;
    }

    &-right {
      margin-top: 3px;

      span {
        font-size: 13px;
        color: #bfbfbf;
      }
    }
  }

  .actions {
    display: flex;
    padding: 15px 0;

    .item {
      span {
        margin-left: 5px;
      }
    }


    .item:not(:last-child)::after {
      content: "";
      display: border;
      width: 0.5px;
      height: 8px;
      border-right: 1px solid #ccc;
      margin: 0 15px;
      color: #ccc;
    }

    .item:hover {
      cursor: pointer;
    }
  }
}
</style>