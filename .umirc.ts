import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '马上有码',
  },
  favicons:[
    '/logo.jpg'
  ],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '关注',
      path: '/focus',
      component: './Focus',
    },
    {
      name: '推荐',
      path: '/recommend',
      component: './Recommend',
    },
    {
      name: '热榜',
      path: '/hot',
      component: './HotList',
    },
  ],
  npmClient: 'yarn',
});

