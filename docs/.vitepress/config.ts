export default {
    themeConfig: {
      sidebar: [
        {
          text: '导航',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
          ]
        },
        {
            text:'组件',
            items:[
                { text: 'Button', link: '/components/button' },
                { text: 'ConfigProvider', link: '/components/config-provider' },
            ]
        },
        {
            text:'工具',
            items:[
                { text: 'useLocale', link: '/hooks/useLocale' },
            ]
        },
        {
            text:'插件',
            items:[
                { text: 'UiTemplateResolver', link: '/plugins/UiTemplateResolver' },
                { text: 'importWebComponent', link: '/plugins/importWebComponent' },
            ]
        }
      ]
    }
}