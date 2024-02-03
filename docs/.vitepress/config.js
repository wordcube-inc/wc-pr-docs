// .vitepress/config.js
export default {
    // 站点级选项
    title: 'Documents by xt',
    description: 'Some documents',
    base: '/xtdoc/',
    themeConfig: {
        sidebar: [
            {
              text: '文档导航',
              items: [
                { text: '首页', link: '/' },
                {
                  text: 'wc-pr-docker 文档',
                  items: [
                    {
                      text: '概述',
                      link: '/wc-pr-docker/intro.html'
                    },
                    {
                      text: '支持的 repo',
                      link: '/wc-pr-docker/repo.html'
                    },
                    {
                      text: '环境准备',
                      link: '/wc-pr-docker/env.html'
                    },
                    {
                      text: '快速开始',
                      link: '/wc-pr-docker/startup.html'
                    },
                    {
                      text: '后续配置',
                      link: '/wc-pr-docker/afterstartup.html'
                    },
                    {
                      text: '更多细节',
                      link: '/wc-pr-docker/detail.html'
                    }
                  ]
                },
              ]
            }
        ]
    }
  }