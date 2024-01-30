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
                      text: '快速开始',
                      link: '/wcprdocker/startup.html'
                    },
                    {
                      text: '操作说明',
                      link: '/wcprdocker/manual.html'
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
                {
                  text: '新 wc-pr-docker 文档',
                  items: [
                    {
                      text: '概述',
                      link: '/newwcprdocker/index.html'
                    },
                    {
                      text: '环境准备',
                      link: '/newwcprdocker/env.html'
                    },
                    {
                      text: '快速开始',
                      link: '/newwcprdocker/startup.html'
                    },
                    {
                      text: '操作说明',
                      link: '/newwcprdocker/manual.html'
                    },
                    {
                      text: '更多配置',
                      link: '/newwcprdocker/moreconf.html'
                    },
                    {
                      text: '细节',
                      link: '/newwcprdocker/detail.html'
                    }
                  ]
                },
              ]
            }
        ]
    }
  }