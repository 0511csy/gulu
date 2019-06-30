module.exports = {
    title: 'Hello Gulu UI',
    description: 'Just playing around',
    base: "/gulu/" ,
    themeConfig: {

        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/0511csy/gulu' },
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