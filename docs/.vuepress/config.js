module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',

    themeConfig: {

        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                collapsable: false,
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collapse',
                ]
            }
        ]
    }
}