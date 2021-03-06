module.exports = {
    head: [
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ], //移动端优化
    theme: 'reco',
    title: "Blog",
    description: '強請るな、勝ち取れ、さすれば与えられん',

    themeConfig: {
        author: 'NutChocolatesHoney', //全局作者姓名
        sidebar: 'auto', //在所有页面中启用自动生成侧栏
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true,// 默认 true，false 不显示模式调节按钮，true 则显示
        type: 'blog',
        authorAvatar: 'https://static-resource-repository.oss-cn-shanghai.aliyuncs.com/docs/public/profile_picture.jpg',
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            }
        },
        nav: [
            {text: 'TimeLine', link: '/timeline/', icon: 'reco-date'} //时间线
        ],
        // 项目开始时间，只填写年份
        startYear: '2020'
    },
    plugins: [
        [
            "dynamic-title",
            {
                showIcon: "/favicon.ico",
                showText: "(/≧▽≦/)咦！又好了！",
                hideIcon: "/failure.ico",
                hideText: "(●—●)喔哟，崩溃啦！",
                recoverTime: 2000
            }
        ]
    ]
};