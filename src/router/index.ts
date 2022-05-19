import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';

// 布局组件
import Layout from '@/layout/Layout.vue';

/* 
  公开路由表
*/
const publicRoutes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  { path: '/home', name: 'Layout', component: Layout },
];

const router = createRouter({
  history: createWebHashHistory(),
  // 配置路由表
  routes: publicRoutes,
});

// 配置路由守卫
router.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
