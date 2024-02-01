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
                      link: '/wcprdocker/index.html'
                    },
                    {
                      text: '环境准备',
                      link: '/wcprdocker/env.html'
                    },
                    {
                      text: 'Windows 快速开始',
                      link: '/wcprdocker/startup_win.html'
                    },
                    {
                      text: 'MacOS 快速开始',
                      link: '/wcprdocker/startup_mac.html'
                    },
                    {
                      text: '更多配置',
                      link: '/wcprdocker/moreconf.html'
                    },
                    {
                      text: '细节',
                      link: '/wcprdocker/detail.html'
                    }              
                  ]
                },
              ]
            }
        ]
    }
  }