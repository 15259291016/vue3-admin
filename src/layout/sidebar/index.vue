<template>
  <el-menu
    unique-opened
    class="el-menu-vertical"
    router
    :collapse="store.isFold"
  >
    <div class="logo">vue3 admin</div>
    <!-- 仪表盘 -->
    <el-sub-menu index="analysis">
      <template #title>
        <el-icon>
          <i class="r4 r4-dashboard"></i>
        </el-icon>
        <span>Dashboard</span>
      </template>
      <el-menu-item index="/analysis">
        {{ $t('msg.sidebar.analysis') }}
      </el-menu-item>
      <el-menu-item index="/workBench">
        {{ $t('msg.sidebar.workBench') }}
      </el-menu-item>
    </el-sub-menu>
    <!-- 个人页 -->
    <el-sub-menu index="profile">
      <template #title>
        <el-icon>
          <i class="r4 r4-profile"></i>
        </el-icon>
        <span>个人页</span>
      </template>
      <el-menu-item index="/profile">个人中心</el-menu-item>
      <el-menu-item index="/editProfile">个人设置</el-menu-item>
    </el-sub-menu>
    <!-- 异常页 -->
    <el-sub-menu index="error">
      <template #title>
        <el-icon>
          <i class="r4 r4-error"></i>
        </el-icon>
        <span>异常页</span>
      </template>
      <el-menu-item index="/403">403</el-menu-item>
      <el-menu-item index="/404">404</el-menu-item>
      <el-menu-item index="/500">500</el-menu-item>
      <el-menu-item index="/empty">empty</el-menu-item>
    </el-sub-menu>
    <!-- 结果页 -->
    <el-sub-menu index="result">
      <template #title>
        <el-icon>
          <i class="r4 r4-checked"></i>
        </el-icon>
        <span>结果页</span>
      </template>
      <el-menu-item index="/success">成功</el-menu-item>
      <el-menu-item index="/failure">失败</el-menu-item>
    </el-sub-menu>
    <!-- 表单页 -->
    <el-sub-menu index="form">
      <template #title>
        <el-icon>
          <i class="r4 r4-document"></i>
        </el-icon>
        <span>表单页</span>
      </template>
      <el-menu-item index="/basicForm">基础表单</el-menu-item>
      <el-menu-item index="/stepForm">分步表单</el-menu-item>
      <el-menu-item index="/advancedForm">高级表单</el-menu-item>
      <el-menu-item index="/keepAlive">页面缓存</el-menu-item>
    </el-sub-menu>
    <!-- 系统管理页 -->
    <el-sub-menu index="sys" v-if="store.role === 'admin'">
      <template #title>
        <el-icon>
          <i class="r4 r4-setting"></i>
        </el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/accountManager">账号管理</el-menu-item>
      <el-menu-item index="/roleManager">角色管理</el-menu-item>
      <el-menu-item index="/deptManager">部门管理</el-menu-item>
    </el-sub-menu>
    <!-- 权限管理 -->
    <el-sub-menu index="permission">
      <template #title>
        <el-icon>
          <i class="r4 r4-permission"></i>
        </el-icon>
        <span>权限管理</span>
      </template>
      <el-menu-item index="/profile" @click="switchRole">切换权限</el-menu-item>
    </el-sub-menu>
    <!-- 组件页-->
    <el-sub-menu index="components">
      <template #title>
        <el-icon>
          <i class="r4 r4-components"></i>
        </el-icon>
        <span>组件</span>
      </template>
      <el-menu-item index="/card">卡片</el-menu-item>
      <el-menu-item index="/button">按钮</el-menu-item>
      <el-menu-item index="/loader">加载</el-menu-item>
      <el-menu-item index="/input">输入框</el-menu-item>
      <el-menu-item index="/upload">文件上传下载</el-menu-item>
    </el-sub-menu>
    <!-- 流程图 -->
    <el-menu-item index="/flow">流程图</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';

const store = useAppStore();
const router = useRouter();

const switchRole = () => {
  if (store.role === 'admin') {
    localStorage.setItem('role', JSON.stringify('employ'));
  } else {
    localStorage.setItem('role', JSON.stringify('admin'));
  }
  location.reload();
  router.push('/analysis');
};
</script>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100vh;
  border-right: unset;

  &:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
  }

  .logo {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
}
</style>
