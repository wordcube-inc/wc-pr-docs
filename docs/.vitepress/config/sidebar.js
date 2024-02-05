export default [
    {
      text: '文档导航',
      items: [
        { text: '首页', link: '/' },
        { text: '关于 wc-pr-doc', link: '/about/' },
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