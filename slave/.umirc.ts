import { defineConfig } from 'umi';

export default defineConfig({

  routes: [{ path: '/', component: '@/pages/index' }],

  qiankun: {
    slave: {},
  },
  base: '/slave',
});
