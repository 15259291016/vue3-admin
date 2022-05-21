<template>
  <el-dropdown @command="handleUserOperation">
    <div class="info hover-effect">
      <!-- 头像区域 -->
      <div class="info-avatar">
        <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div class="info-name">
        <span>Rich4$t</span>
      </div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="document">
          <i class="r4 r4-document" style="padding-bottom: 5px;"></i> <span>文档</span>
        </el-dropdown-item>
        <el-dropdown-item command="lockScreen">
          <i class="r4 r4-password" style="padding-bottom: 5px;"></i><span>锁定屏幕</span>
        </el-dropdown-item>
        <el-dropdown-item command="logout">
          <i class="r4 r4-poweroff" style="padding-bottom: 3px;"></i><span>退出系统</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

const router = useRouter()

// 处理用户操作
const handleUserOperation = (operations: string) => {
  if (operations === 'logout') {

  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
</style>