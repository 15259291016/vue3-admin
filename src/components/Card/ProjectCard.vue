<template>
  <div class="card-wrap card-hoverable">
    <div class="cover">
    </div>
    <div class="body">
      <p>Ekko</p>
      <span>It's not enough to give people what they need to survive, you have to give them what they need to
        live.</span>
    </div>
    <div class="footer">
      <div class="left"><span>4 years ago</span></div>
      <div class="right">
        <ToolTip content="ekko" placement="top" v-for="item in 2" :key="item">
          <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </ToolTip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolTip from '../ToolTip/index.vue';

</script>

<style scoped lang="scss">
.card-wrap {
  width: 25vw;
  height: 50.5vh;
  border: 1px solid var(--header-border-color);
  border-radius: 3px;
  transition: all 0.2s;
  margin: 10px;

  .cover {
    width: 100%;
    height: 65%;
    background: url(https://s1.ax1x.com/2022/05/26/XVkzcQ.jpg) no-repeat;
    background-size: contain;
    border-radius: 3px;
  }

  .body {
    padding: 0 20px;
    box-sizing: border-box;
  }

  .footer {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 13px;
      color: #ccc;
    }

    .right {
      .el-avatar:first-child {
        transform: translateX(30px);
        z-index: 0;
      }

      .el-avatar:nth-child(2) {
        transform: translateX(15px);
        z-index: 1;
      }

      .el-avatar:last-child {
        z-index: 2;
      }
    }
  }
}
</style>