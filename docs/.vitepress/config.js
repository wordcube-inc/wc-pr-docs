// .vitepress/config.js
export default {
    // 站点级选项
    title: 'Documents by xt',
    description: 'Some documents',
  
    themeConfig: {
        sidebar: [
            {
              text: '文档导航',
              items: [
                { text: '首页', link: '/' },
                { text: 'wc-pr-docker 文档', link: '/wcprdocker/index.html' },
              ]
            }
        ]
    }
  }