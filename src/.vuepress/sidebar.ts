import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "/": [
    "DailyRoutine",
    "Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "/math/" },
    // 指定显示页面
   
    {
  text: "🧰 文学",
  icon: "",
  prefix: "chinese/",  
  collapsible: true,
  children: [
    {
      text: "文学史",
      icon: "",
      prefix: "文学史/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "文学作品",
      icon: "",
      prefix: "文学作品/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "个人小说",
      icon: "",
      prefix: "个人小说/",
      collapsible: true,
      children: "structure",
    },
  ],
   },
    {
  text: "🌐 数学",
  icon: "",
  prefix: "math/",
  collapsible: true,
  children: [
    {
      text: "代数学",
      icon: "",
      prefix: "代数学/",
      collapsible: true,
      children: [
        "线代",
        "抽代",
        "数分",
        "微分方程",
      ],
    },
    {
      text: "几何学",
      icon: "",
      prefix: "几何学/",
      collapsible: true,
      children: [
        "解析几何",
        "微分几何",
      ],
    },
    {
      text: "概率与统计",
      icon: "",
      prefix: "概率与统计/",
      collapsible: true,
      children: "structure",  // 自动显示该文件夹下所有文件
    },
    ],
    },
    {
      text: "🏗️ 物理",
      icon: "",
      prefix: "philogic/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🔡 经济学",
      icon: "",
      prefix: "economic/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🛖 生活记录",
      icon: "",
      prefix: "family/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "加密目录",
      icon: "material-symbols:encrypted",
      prefix: "encrypt/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
  // 专题区（独立侧边栏）
  "/apps/topic/": "structure",
  // 如果你不想使用默认侧边栏，可以按照路径自行设置。但需要去掉下方配置中的注释，以避免博客和时间轴出现异常。_posts 目录可以不存在。
  /*"/_posts/": [
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ], */
});