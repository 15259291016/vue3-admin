<template>
  <el-dropdown @command="handleUserOperation">
    <div class="info hover-effect">
      <!-- 头像区域 -->
      <div class="info-avatar">
        <el-avatar :size="30" src="https://s1.ax1x.com/2022/05/24/XPRY6S.png" />
      </div>
      <div class="info-name">
        <span>Rich4$t</span>
      </div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="document">
          <i class="r4 r4-document" style="padding-bottom: 5px;"></i>
          <span>
            {{ $t('msg.userOperations.document') }}
          </span>
        </el-dropdown-item>
        <el-dropdown-item command="lockScreen">
          <i class="r4 r4-password" style="padding-bottom: 5px;"></i>
          <span>
            {{ $t('msg.userOperations.lockScreen') }}
          </span>
        </el-dropdown-item>
        <el-dropdown-item command="logout" @click="dialogVisible = true">
          <i class="r4 r4-poweroff" style="padding-bottom: 3px;"></i>
          <span>
            {{ $t('msg.userOperations.logout') }}
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dialog v-model="dialogVisible" title="温馨提醒" width="30%" :before-close="handleClose">
    <span>是否确认退出系统?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="$router.push('/')">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {

}


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