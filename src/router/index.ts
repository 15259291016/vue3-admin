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
  {
    path: '/home',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/analysis',
        name: '分析页',
        meta: { enTitle: 'analysis' },
        component: () => import('@/views/dashboard/analysis/index.vue'),
      },
      {
        path: '/workBench',
        name: '工作台',
        meta: { enTitle: 'workBench' },
        component: () => import('@/views/dashboard/workBench/index.vue'),
      },
      {
        path: '/test',
        name: '测试',
        component: () => import('@/views/dashboard/test.vue'),
      },
      {
        path: '/test2',
        name: '测试2',
        component: () => import('@/views/dashboard/test2.vue'),
      },
    ],
  },
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
