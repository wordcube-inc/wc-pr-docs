import zh, {search as searchZh} from "./config/zh"
import en from "./config/en"


export default {
    title: 'WordCube 文档站',
    description: 'Some documents of WordCube Co.',
    base: '/wc-pr-docs/',
    locales: {
        root: {
          label: '简体中文',
          lang: 'zh_cn',
          link: '/zh/',
          ...zh
        },
        en: {
          label: 'English(United States)',
          lang: 'en_us',
          link: '/en/',
          ...en
        }
    },
    themeConfig: {
        search: {
            provider: 'local',
            options: {
                locales: {...searchZh}
            }
        },
        
    }
  }