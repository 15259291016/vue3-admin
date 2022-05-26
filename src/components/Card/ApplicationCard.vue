<template>
  <div class="app-card card-hoverable">
    <div class="title">
      <img src="@/assets/images/githubcat.svg" alt="">
      <span>Github</span>
    </div>
    <div class="body">
      <div class="body-left">
        <span>活跃用户</span>
        <p>17万</p>
      </div>
      <div class="body-right">
        <span>新增用户</span>
        <p>27万</p>
      </div>
    </div>
    <div class="footer">
      <i class="r4 r4-download hover-text-green"></i>
      <i class="r4 r4-edit hover-text-green"></i>
      <i class="r4 r4-share hover-text-green"></i>
      <el-dropdown>
        <i class="r4 r4-more hover-text-green"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.app-card {
  width: 16.5vw;
  border: 1px solid var(--header-border-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
  transition: all 0.2s;
  margin: 10px;


  .title {
    padding: 20px;
    display: flex;
    align-items: center;

    span {
      margin-left: 1vw;
      font-size: 18px;
    }
  }

  .body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 13px;

    &-left {
      padding-left: 20px;
    }

    span {
      font-size: 13px;
      color: #ccc;
    }

    p {
      margin-top: 5px;
      font-size: 25px;
      color: #8f8f8f;
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid var(--header-border-color);
    height: 40px;
    box-sizing: border-box;
    background-color: var(--app-card-bg-color);
    color: #898989;
    padding: 0 8px;

    & i:not(:last-child) {
      &::after {
        content: '';
        width: 1px;
        height: 6px;
        border-right: 0.5px solid var(--header-border-color);
        padding-left: 1.5vw;
      }
    }

    i {
      font-size: 20px;
    }

  }
}
</style>