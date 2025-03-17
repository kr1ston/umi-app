import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/login', component: 'login' },
    { path: '/dashboard', component: 'dashboard' },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/initial-state',
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
