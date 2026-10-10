# 邓婉婷的个人作品集

这是我的个人作品集网站源码，基于 Vue 3 + TypeScript + Vite 搭建，用于展示我的 AI 产品项目、大厂实习经历、独立全栈作品与内容创作实践。

在线网站：https://sinera-kiki.github.io/portfolio/  
简历下载：https://sinera-kiki.github.io/portfolio/wanting-deng-resume.pdf

## 项目内容

网站主要包含以下板块：

- **实习经历与业务项目**：记录在小红书（专业号资质造假智能化治理）、科大讯飞（车载多媒体 Agent 架构设计）、杉数科技（Colormind 智慧教育平台）的产品落地与数据成果。
- **AI 独立项目**：收录自主设计并全栈落地的 AI 产品，包括 MeowLog AI 伴侣猫（轻量养成与长效记忆机制）、MealPlanner AI（周餐规划与确定性规则引擎）以及 AI 早报自动化推送工具。
- **内容创作与社会实践**：展示个人小红书账号运营（1199 粉丝、6.9 万赞藏）、校团委宣传部 50+ 篇深度推文采编，以及带队完成的延安国家级专项优秀社会实践。
- **个人特质与生活**：结合 2000 分王者辅助大局观、长期家教经验、阅读与旅行习惯，呈现工作之外的思考方式与用户视角。

## 技术实现

- **核心框架**：Vue 3（`<script setup>` + Composition API）配合 TypeScript 进行严格类型约束。
- **页面与交互**：手写 CSS 样式系统，适配桌面端与移动端排版；通过原生 IntersectionObserver 实现轻量滚动渐入动效，支持 prefers-reduced-motion 减弱动效偏好。
- **性能与加载优化**：
  - 全站图片转为 WebP 格式并精细化压缩，首屏外图片统一配置懒加载，首屏头像配置高优先级加载。
  - 字体文件本地化（woff2 格式），去除外部 CDN 依赖，保障国内访问稳定性与加载速度。

## 目录结构

```text
├── src/
│   ├── assets/           # 本地字体（woff2）与 WebP 图片素材
│   ├── components/       # 导航栏等通用组件
│   ├── composables/      # useReveal 原生动效逻辑
│   ├── pages/            # Home.vue 单页主体
│   ├── styles.css        # 全局样式系统
│   ├── App.vue           # 根组件
│   ├── main.ts           # 应用入口与路由
│   └── vite-env.d.ts     # 类型声明
├── public/               # 简历 PDF 与 favicon
├── docs/                 # GitHub Pages 静态构建产物
├── index.html
├── vite.config.ts
└── package.json
```

## 本地开发与构建

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发
npm run dev

# 3. 类型检查
npm run typecheck

# 4. 构建 GitHub Pages 部署产物（输出至 docs/）
npm run build:pages
```

## License

MIT © 2026 Deng Wanting
