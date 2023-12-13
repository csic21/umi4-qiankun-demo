import { defineConfig } from 'umi';

export default defineConfig({

  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/slave',
      microApp: 'app1',
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
      ],
    },
  },
});
