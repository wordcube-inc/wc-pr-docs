export default {
    themeConfig: {
        sidebar: [
            {
                text: '文档导航',
                items: [
                    { text: '首页', link: '/zh/' },
                    { text: '关于 wc-pr-doc', link: '/zh/about/' },
                    {
                        text: 'wc-pr-docker 文档',
                        items: [
                            {
                                text: '概述',
                                link: '/zh/wc-pr-docker/intro.html'
                            },
                            {
                                text: '支持的 repo',
                                link: '/zh/wc-pr-docker/repo.html'
                            },
                            {
                                text: '环境准备',
                                link: '/zh/wc-pr-docker/env.html'
                            },
                            {
                                text: '快速开始',
                                link: '/zh/wc-pr-docker/startup.html'
                            },
                            {
                                text: '后续配置',
                                link: '/zh/wc-pr-docker/afterstartup.html'
                            },
                            {
                                text: '更多细节',
                                link: '/zh/wc-pr-docker/detail.html'
                            }
                        ]
                    },
                ]
            }
        ],

        editLink: {
            pattern: 'https://github.com/wordcube-inc/wc-pr-docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: 'WordCube\'s Document',
            copyright: `WordCube 版权所有`
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
}


export const search = {
    root: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    }
}