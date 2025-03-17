import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/login', component: 'login' },
    { path: '/dashboard', component: 'dashboard' },
  ],
  request: {},
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/request',
  ],
  antd: {},
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  model: {},
});
