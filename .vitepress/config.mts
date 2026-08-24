import { defineConfig } from "vitepress"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Acovia 档案馆",
  appearance:"dark",
  description: "Fovlin 的档案存放处",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"/star.svg",
    outline: {
      level:2,
      label:"本页目录"
    },
    nav: [
      { text: "Home", link: "/"},
    ],
    search: {
      provider: "local"
    },
    sidebar: [
      {
        text: "关于 Acovia",
        collapsed:false,
        items: [
          { text: "社区介绍", link: "/acovia-server/1-1" },
          { text: "特殊玩法", link: "/acovia-server/special-gameplay" },
          { text: "更新日志", link: "/acovia-server/new" },
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link:"https://github.com/acovia-studio/acovia-website" },
      { icon: "bilibili", link : "https://b23.tv/gOLGiGq" }
    ]
  }
})