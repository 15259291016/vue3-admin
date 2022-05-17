import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';

/* 
  公开路由表
*/
const publicRoutes = [
  { path: '/', component: () => import('@/views/login/index.vue') },
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
