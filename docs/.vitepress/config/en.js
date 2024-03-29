export default {
    title: 'WordCube Documents',
    themeConfig: {
        sidebar: [
            {
                text: 'Documents',
                items: [
                    { text: 'Homepage', link: '/en/' },
                    { text: 'About wc-pr-doc', link: '/en/about/' },
                    { text: 'Postman API Document', link: '/postman-api/' },
                    {
                        text: 'wc-pr-docker doc.',
                        items: [
                            {
                                text: 'Describe',
                                link: '/en/wc-pr-docker/intro.html'
                            },
                            {
                                text: 'Repo Supported',
                                link: '/en/wc-pr-docker/repo.html'
                            },
                            {
                                text: 'Ready for environment',
                                link: '/en/wc-pr-docker/env.html'
                            },
                            {
                                text: 'Get started',
                                link: '/en/wc-pr-docker/startup.html'
                            },
                            {
                                text: 'More configs',
                                link: '/en/wc-pr-docker/afterstartup.html'
                            },
                            {
                                text: 'More detail',
                                link: '/en/wc-pr-docker/detail.html'
                            }
                        ]
                    },
                ]
            }
        ],

        editLink: {
            pattern: 'https://github.com/wordcube-inc/wc-pr-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'WordCube\'s Document',
            copyright: `WordCube Copyright`
        },

        docFooter: {
            prev: 'Prev',
            next: 'Next'
        },

        outline: {
            label: 'NAV'
        },

        lastUpdated: {
            text: 'Last update at',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: 'i18n',
        returnToTopLabel: 'Top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Light',
        darkModeSwitchTitle: 'Dark'
    }
}