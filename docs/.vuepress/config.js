module.exports = {
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ], //移动端优化
    theme: 'reco',
    title: "Blog",
    description: '',
    themeConfig: {
        author: 'NutChocolatesHoney', //全局作者姓名
        sidebar: 'auto', //在所有页面中启用自动生成侧栏

        mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true,// 默认 true，false 不显示模式调节按钮，true 则显示
        type: 'blog',
        authorAvatar: 'https://static-resource-repository.oss-cn-shanghai.aliyuncs.com/docs/public/profile_picture.jpg',
        locales: {
            '/': {
                recoLocales: {
                    homeBlog: {
                        article: 'article', // 默认 文章
                        tag: 'tag', // 默认 标签
                        category: 'category', // 默认 分类
                        friendLink: 'friendLink' // 默认 友情链接
                    },
                    pagation: {
                        prev: 'prev',
                        next: 'next',
                        go: 'go',
                        jump: 'jump'
                    }
                }
            }
        },
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' } //时间线
        ],
        // 项目开始时间，只填写年份
        startYear: '2020'
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }

};