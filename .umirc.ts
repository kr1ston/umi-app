import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/login', component: 'login' },
    {
      path: '/',
      routes: [
        { path: '/dashboard', component: 'dashboard' },
        { path: '/chat', component: 'chat' },
        {
          path: '/agent',
          wrappers: ['@/pages/agent/wrapper'],
          routes: [{ path: '/agent/test', component: 'agent' }],
        },
      ],
    },
  ],
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/request',
  ],
  antd: {},
  initialState: {},
  model: {},
  request: {},
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
