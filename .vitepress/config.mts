import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'x-coding',
  description: 'X编码记录',
  lang: 'zh-CN',
  themeConfig: {
    nav: [{ text: 'CSS', link: '/css/css-variable' }],
    sidebar: [
      {
        text: 'CSS',
        items: [{ text: 'CSS 自定义属性', link: '/css/css-variable' }],
      },
    ],
  },
});
