<script setup lang="ts">
import portraitUrl from '../assets/photos/avatar.webp'
import wangzheUrl from '../assets/photos/wangzhe.webp'
import cat2Url from '../assets/photos/cat2.webp'
import catSilverUrl from '../assets/photos/cat_silver.webp'
import travelUrl from '../assets/photos/travel_new.webp'
import travel2Url from '../assets/photos/travel2.webp'
import flowerUrl from '../assets/photos/flower.webp'
import practice1Url from '../assets/photos/practice_1.webp'
import practice2Url from '../assets/photos/practice_2.webp'
import practice3Url from '../assets/photos/practice_3.webp'
import xhsUrl from '../assets/photos/xhs_profile.webp'
import xhsPost1Url from '../assets/photos/xhs_post_1.webp'
import xhsPost2Url from '../assets/photos/xhs_post_2.webp'
import { useReveal } from '../composables/useReveal'

useReveal()

const base = import.meta.env.BASE_URL

const experiences = [
  {
    time: '2026.07 - 至今',
    role: 'AI 智能治理产品经理',
    company: '小红书 · 专业号治理',
    desc: '参与专业号资质造假治理，负责机审链路、策略迭代及自动化风控工作流建设。',
    metrics: [
      { value: '13.37% → 1.93%', label: '新入驻资质造假浓度' },
      { value: '67% → 2.89%', label: '金融行业造假浓度' },
      { value: '41% → 7.51%', label: '房地产行业造假浓度' },
    ],
  },
  {
    time: '2025.11 - 2026.03',
    role: '车载 AI 智能语音产品经理',
    company: '科大讯飞 · 智慧出行',
    desc: '负责多媒体 Agent 产品规划，清洗归因数万条历史语音日志，推动“功能补全 + 混合架构（本地规则为主、云端 LLM 为辅）”策略落地。',
    metrics: [
      { value: '< 35%', label: '音乐类负反馈率' },
      { value: '90% / 85%', label: '标准 / 模糊指令成功率' },
    ],
  },
  {
    time: '2025.04 - 2025.09',
    role: '大模型产品经理',
    company: '杉数科技 · B 端智慧教育',
    desc: '参与智慧教育产品 Colormind 规划，负责多 Agent 协作架构、人机协同实训流程及 AI 能力评价看板设计。',
    metrics: [
      { value: '3 所', label: '合作高校' },
      { value: '千万级', label: '预计交付额' },
    ],
  },
]

const projects = [
  {
    num: 'Project 01',
    featured: true,
    title: '专业号资质造假智能化治理',
    org: '小红书 · AI 智能治理产品经理 · 2026.07 - 至今',
    context: '7月初风险感知团队反馈一批利用相似的资质图片批量入驻的违规账号，疑似黑产入侵。我们对专业号的入驻流程及存量账号的入驻材料进行分析，发现对公打款绕过、同名法人人脸识别绕过、资质材料造假等问题。黑产手法多样且对抗持续升级，人工审核和常规机审均难以有效拦截。',
    metrics: [
      { value: '13.37% → 1.93%', label: '新入驻资质造假浓度' },
      { value: '67% → 2.89%', label: '金融行业造假浓度' },
      { value: '41% → 7.51%', label: '房地产行业造假浓度' },
    ],
    actions: [
      {
        tag: '指标体系建设',
        text: '为看清风险规模，实时监控问题，与算法、数分、评估团队合作，自研算法能力，设计风险标签、标注流程与指标口径，搭建自动化评估工作流，设计指标看板，监控入驻量级变化、行业造假率、同主体/同设备/同付款信息聚合数据、机审漏放数据等多维度指标，发现异动并追溯归因，实现「感知→归因→迭代」。'
      },
      {
        tag: '治理方案落地',
        text: '针对打款漏洞问题进行修复，造假严重行业下线平台对客户打款；针对同名法人人脸识别绕过问题，上线企业四要素校验；资质造假方面，对于模版造假问题，上线相似模板与高危模板库拦截策略；对于单图造假问题，采买合合信息文字篡改识别能力，自研二维码比对与假公章识别能力，接入机审工作流进行拦截。'
      },
      {
        tag: '团伙识别建设',
        text: '治理动作后，对抗持续升级，但现有能力大多支持单个账号违规识别，团伙扩散能力缺失，「打一个、漏一批」问题长期存在。分析已发现的黑产账号特征，梳理账号关联介质，按强弱分级设计建图规则，整理数据需求与口径，与算法、数仓合作搭建团伙识别图谱。'
      }
    ],
    result: '治理动作上线后，新入驻资质造假浓度从 13.37% 降至 1.93%，金融行业造假浓度从 67% 降至 2.89%，房地产行业造假浓度由 41% 降至 7.51%。',
    repo: 'https://github.com/Sinera-kiki/pro-qual-fraud-eval',
  },
  {
    num: 'Project 02',
    featured: false,
    title: '多媒体 Agent 混合架构设计',
    org: '科大讯飞 · 车载 AI 语音产品经理 · 2025.11 - 2026.03',
    context: '车载多媒体语音场景下，音乐类问题有 48% 源于功能缺失、33% 源于语义理解偏差，单纯依赖大模型生成效果不可控。',
    actions: [
      {
        tag: '业务路径确立',
        text: '清洗归因数万条历史语音日志，确立“功能补全优先于 AI 优化”的业务路径。'
      },
      {
        tag: '高频功能落地',
        text: '针对功能缺失问题，参与竞品调研，整理高频指令清单，推动功能工程落地。'
      },
      {
        tag: '混合架构设计',
        text: '针对语义理解偏差问题，参与制定并落地“本地规则为主，云端 LLM 为辅”的混合架构。'
      }
    ],
    result: '标准指令成功率提升至 90%，模糊指令提升至 85%，在保障响应速度的同时大幅提升泛化能力。',
  },
  {
    num: 'Project 03',
    featured: false,
    title: 'Colormind AI 实训平台',
    org: '杉数科技 · 大模型产品经理 · 2025.04 - 2025.09',
    context: '传统问答式大模型缺少教学上下文，高校课程与真实工作场景脱节，同时缺乏可量化的 AI 能力评价方式。',
    actions: [
      {
        tag: '教学节点解耦',
        text: '将 AI 能力封装为可编排的教学叶节点，设计单/多 Agent 模式，支持系统 Prompt、多角色及私有数据集绑定。'
      },
      {
        tag: '任务流式驱动',
        text: '设计“阅读任务简报—组建 Agent 团队—完成实训任务”的项目制工作流，让学生在真实业务情境中完成探索与建模。'
      },
      {
        tag: '组件与权限管控',
        text: '参与实训工具与课程组件管理模块设计，补齐输入输出合规校验、权限下发及教学调用额度看板。'
      },
      {
        tag: '量化过程评价',
        text: '从 0 到 1 搭建 AI 过程评价看板，以提问清晰度、多轮对话深度、任务达成率评估学生的 AI 使用能力。'
      }
    ],
    result: '平台完成二期开发并上线，与上海立信、宿迁学院、上海交大等高校达成合作，预计交付额千万元。',
  },
]

const skills = [
  {
    cat: 'AI 工程 · AI Craft',
    items: ['Cursor / Claude Code 编程', 'Coze / Dify Agent 编排', 'Prompt 工程与 Few-shot', 'Bad Case 归因与评估'],
  },
  {
    cat: '产品设计 · Product',
    items: ['PRD / 竞品分析 / 排期', 'Axure RP · Figma 原型', '需求拆解与 MVP 规划', '用户访谈与画像'],
  },
  {
    cat: '数据能力 · Data',
    items: ['SQL 多表联查 · 窗口函数', 'Python · Pandas · NumPy', 'A/B 实验设计', '描述性统计分析'],
  },
  {
    cat: '工程基础 · Engineering',
    items: ['C / C++ / Python', 'Git · Docker · GitHub Actions', 'React · FastAPI · PWA', 'Linux 部署与 CI/CD'],
  },
]

const playgrounds = [
  {
    title: 'MeowLog · AI 伴侣猫',
    desc: '从“用户为什么愿意每天回来”出发，设计了一只会自己生活的 AI 治愈猫：用陪伴互动、任务签到、叶子币经济与换装收藏构成轻量养成循环，让对话式 AI 拥有成长目标；猫咪离线时也会自主“生活”并在探险后写下手帐，能记住用户聊过的偏好与情绪，越用越懂你。独立完成从产品设计、玩法数值到前后端研发的全流程，已在公网稳定运行，支持手机端试玩。',
    tag: 'AI 产品 0→1 · 情感陪伴 · 游戏化养成 · 全栈独立研发',
    links: [
      { label: '在线体验 ↗', href: 'http://154.8.153.135:8000' },
      { label: 'GitHub 源码 ↗', href: 'https://github.com/Sinera-kiki/meowlog-ai-companion' },
    ],
    featured: true
  },
  {
    title: '一周好好吃 · MealPlanner AI',
    desc: '面向独居青年的 AI 周餐规划助手，从“想吃什么”到“买什么菜”一步到位。用户可自由勾选 1-21 餐、设置预算与忌口，由大模型结合确定性规则引擎生成动态周餐单与零损耗采购清单，支持单餐换菜、库存抵扣与跨周偏好记忆。',
    tag: 'React · FastAPI · PostgreSQL · PWA · LLM 编排 + 规则引擎',
    links: [
      { label: '在线体验 ↗', href: 'http://154.8.153.135' },
      { label: 'GitHub 源码 ↗', href: 'https://github.com/Sinera-kiki/wanting-meal-planner' },
    ],
  },
  {
    title: 'AI 早报自动推送工具',
    desc: '每日定时聚合 AI 实验室、科技媒体与 arXiv 等多源资讯，经 DeepSeek 完成去重、筛选和结构化摘要，再通过 HTML 邮件自动推送；使用 GitHub Actions 调度，无需独立服务器。',
    tag: 'Python · DeepSeek API · GitHub Actions',
    link: 'https://github.com/Sinera-kiki/ai-daily-digest',
  }
]
</script>

<template>
  <div id="top"></div>

  <!-- ============ Hero ============ -->
  <section class="hero" style="border-bottom: 1px solid rgba(217, 212, 203, 0.4);">
    <div class="wrap">
      <div class="hero-grid">
        <div class="hero-text">
          <div class="hero-eyebrow">Portfolio · 2026 Autumn Recruitment</div>
          <h1 class="hero-title">邓婉婷<br /><em>Wanting Deng</em></h1>
          <p class="hero-slogan">懂技术的边界，<br />也对业务结果负责。</p>
          <div class="hero-meta">
            <div class="hero-meta-row"><span>求职方向</span><strong>AI 产品经理 / 大模型应用</strong></div>
            <div class="hero-meta-row"><span>教育背景</span><strong>东南大学（985）· 2027 届</strong></div>
            <div class="hero-meta-row"><span>实习经历</span><strong>小红书 / 科大讯飞 / 杉数科技</strong></div>
            <div class="hero-meta-row"><span>期望城市</span><strong>北京 / 上海 / 杭州</strong></div>
          </div>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">看看我做过的产品 →</a>
            <a :href="base + 'wanting-deng-resume.pdf'" target="_blank" rel="noopener" class="btn btn-ghost">下载简历 PDF</a>
            <a href="#contact" class="btn btn-ghost">联系我</a>
          </div>
        </div>
        <div class="hero-portrait-wrap" style="position: relative;">
          <div class="hero-portrait">
            <img fetchpriority="high" :src="portraitUrl" alt="Wanting portrait" class="portrait-illust" />
            <div class="portrait-caption">- Wanting Deng -</div>
          </div>
        </div>
      </div>
      <a href="#about" class="scroll-hint" aria-label="Scroll down">
        <span>Scroll</span>
        <span class="scroll-hint-arrow">↓</span>
      </a>
    </div>
  </section>

  <!-- ============ About ============ -->
  <section id="about">
    <div class="wrap" data-reveal>
      <div class="section-label">— About</div>
      <h2 class="section-title">两面的我</h2>
      <div class="about-grid">
        <div class="about-col">
          <h3>
            <span class="kicker">The Professional</span>
            专业的我
          </h3>
          <p class="pitch">
            东南大学信管本科，做过 C 端 AI 工具、车载语音 Agent、B 端 AI 实训与智能治理。
          </p>
          <p>
            我习惯先用数据定位问题，再把方案拆成能上线的产品、策略或工作流。做过 Prompt 与 Agent 设计，也写 Python 和 SQL 验证想法；对我来说，产品方案是否成立，最终要回到真实数据和用户反馈。
          </p>
          <p>
            我喜欢追问问题背后的原因：用户为什么不采纳 AI 生成内容、模糊指令为什么执行失败、风险策略漏掉了哪类样本。比起包装概念，我更关心问题有没有被解决。
          </p>
          <div class="about-tags">
            <span class="about-tag">Agent 编排</span>
            <span class="about-tag">Prompt 工程</span>
            <span class="about-tag">业务与风控策略</span>
            <span class="about-tag">代码与数据驱动</span>
            <span class="about-tag">中国国际大学生创新大赛 · 全国银奖</span>
            <span class="about-tag">国家奖学金</span>
          </div>
        </div>
        <div class="about-col">
          <h3>
            <span class="kicker">The Person</span>
            生活的我
          </h3>
          <p class="pitch">
            写内容、带团队、教学生，也认真保留自己的兴趣和生活。
          </p>
          <p>
            工作之外，我长期写内容、做校媒，也运营自己的小红书账号。做过 50+ 篇推文，带队完成国家级社会实践；个人账号积累 1199 名粉丝、6.9 万赞藏，做出过多篇千赞内容。
          </p>
          <p>
            大学期间辅导过数10名学生，我会根据每个人的理解方式调整讲解和练习节奏。这段经历让我更习惯观察具体的人，也更愿意耐心把复杂问题讲清楚。
          </p>
          <p>
            我也喜欢小说、民谣、旅行和猫，王者辅助打到过巅峰 2000 分。工作之外保留这些兴趣，让我能从不同视角理解产品和用户。
          </p>
          <div class="about-tags">
            <span class="about-tag">📖 小说</span>
            <span class="about-tag">🎧 音乐</span>
            <span class="about-tag">🎮 王者荣耀 · 辅助省标</span>
            <span class="about-tag">🐱 猫奴</span>
            <span class="about-tag">🐕 狗控</span>
            <span class="about-tag">✈️ 旅行</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ Experience ============ -->
  <section id="experience" style="background: rgba(238, 235, 227, 0.3);">
    <div class="wrap" data-reveal>
      <div class="section-label">— Experience</div>
      <h2 class="section-title">实习经历</h2>
      <div class="timeline">
        <div v-for="(item, i) in experiences" :key="i" class="tl-item">
          <div class="tl-time">{{ item.time }}</div>
          <h3 class="tl-role">{{ item.role }}</h3>
          <div class="tl-company">{{ item.company }}</div>
          <p class="tl-desc">{{ item.desc }}</p>
          <div class="tl-metrics">
            <div v-for="(m, j) in item.metrics" :key="j" class="tl-metric">
              <div class="tl-metric-value">{{ m.value }}</div>
              <div class="tl-metric-label">{{ m.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ Projects ============ -->
  <section id="projects">
    <div class="wrap">
      <div class="section-label" data-reveal>— Selected Projects</div>
      <h2 class="section-title" data-reveal>核心项目</h2>
      <div class="projects-grid">
        <article
          v-for="p in projects"
          :key="p.title"
          :class="['project-card', { 'project-featured': p.featured }]"
          data-reveal
        >
          <!-- Featured Layout (Project 01 小红书) -->
          <div v-if="p.featured" class="featured-layout">
            <div class="featured-primary">
              <div class="project-header">
                <span class="project-num">{{ p.num }}</span>
                <span class="project-badge">核心代表作 · Flagship</span>
              </div>
              <h3 class="project-title">{{ p.title }}</h3>
              <div class="project-org">{{ p.org }}</div>

              <div class="project-section">
                <div class="project-section-label">Context · 业务背景与痛点</div>
                <p class="project-context">{{ p.context }}</p>
              </div>

              <!-- 战绩指标小卡 -->
              <div v-if="p.metrics" class="featured-metrics">
                <div v-for="(m, mi) in p.metrics" :key="mi" class="f-metric-card">
                  <div class="f-metric-val">{{ m.value }}</div>
                  <div class="f-metric-lbl">{{ m.label }}</div>
                </div>
              </div>

              <div class="project-result">
                <strong>成效达成：</strong>{{ p.result }}
              </div>

              <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="project-source">
                查看 GitHub 开源治理体系 ↗
              </a>
            </div>

            <div class="featured-secondary">
              <div class="project-section-label">What I did · 核心动作拆解</div>
              <div class="featured-actions">
                <div v-for="(a, i) in p.actions" :key="i" class="f-action-item">
                  <div class="f-action-header">
                    <span class="f-action-num">0{{ i + 1 }}</span>
                    <strong class="f-action-tag">【{{ a.tag }}】</strong>
                  </div>
                  <p class="f-action-text">{{ a.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Standard Card Layout (Projects 02 & 03) -->
          <template v-else>
            <div class="project-header">
              <div class="project-num">{{ p.num }}</div>
            </div>
            <h3 class="project-title">{{ p.title }}</h3>
            <div class="project-org">{{ p.org }}</div>

            <div class="project-section">
              <div class="project-section-label">Context · 背景</div>
              <p>{{ p.context }}</p>
            </div>

            <div class="project-section project-section-grow">
              <div class="project-section-label">What I did · 我做了什么</div>
              <div class="std-actions">
                <div v-for="(a, i) in p.actions" :key="i" class="std-action-item">
                  <div class="std-action-header">
                    <span class="std-action-dot"></span>
                    <strong class="std-action-tag">{{ a.tag }}</strong>
                  </div>
                  <p class="std-action-text">{{ a.text }}</p>
                </div>
              </div>
            </div>

            <div class="project-result">
              <strong>成效：</strong>{{ p.result }}
            </div>

            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="project-source">
              查看 GitHub 源码 ↗
            </a>
          </template>
        </article>
      </div>
    </div>
  </section>

  <!-- ============ Skills ============ -->
  <section id="skills" style="background: rgba(238, 235, 227, 0.3);">
    <div class="wrap" data-reveal>
      <div class="section-label">— Skills & Honors</div>
      <h2 class="section-title">工具箱</h2>
      <div class="skills-grid">
        <div v-for="s in skills" :key="s.cat" class="skill-box">
          <h4 class="skill-cat">{{ s.cat }}</h4>
          <ul class="skill-list">
            <li v-for="(item, i) in s.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="honors">
        <div class="honor-item">
          <div class="honor-value">全国银奖</div>
          <div class="honor-label">中国国际大学生创新大赛</div>
        </div>
        <div class="honor-item">
          <div class="honor-value">国家奖学金</div>
          <div class="honor-label">National Scholarship</div>
        </div>
        <div class="honor-item">
          <div class="honor-value">CET-6</div>
          <div class="honor-label">College English Test Band 6</div>
        </div>
        <div class="honor-item">
          <div class="honor-value">985</div>
          <div class="honor-label">东南大学 · 信息管理与信息系统</div>
        </div>
      </div>
    </div>
  </section>

  
  <!-- ============ AI Playground ============ -->
  <section id="playground">
    <div class="wrap" data-reveal>
      <div class="section-label">— AI Projects</div>
      <h2 class="section-title">AI 项目与工具</h2>
      <p style="margin-bottom: 32px; color: #666; font-family: 'Cormorant Garamond', serif; font-style: italic;">
        用代码和模型验证产品想法，逐步沉淀为可运行、可复用的项目。
      </p>
      <div class="playground-grid">
        <div v-for="(play, i) in playgrounds" :key="i" style="padding: 24px; border: 1px solid rgba(217, 212, 203, 0.6); transition: all 0.3s;" class="play-card" :class="{ 'play-card-featured': play.featured }">
          <div style="font-size: 12px; color: #8DA290; margin-bottom: 8px;">{{ play.tag }}</div>
          <h3 class="card-title" style="margin-bottom: 12px;">{{ play.title }}</h3>
          <p style="font-size: 14px; color: #555; line-height: 1.6; margin-bottom: 20px;">{{ play.desc }}</p>
          <div v-if="play.links" class="play-card-links">
            <a v-for="(l, li) in play.links" :key="li" :href="l.href" target="_blank" rel="noopener" class="play-card-link">{{ l.label }}</a>
          </div>
          <a v-else-if="play.link !== '#'" :href="play.link" target="_blank" rel="noopener" class="play-card-link">查看 GitHub 源码 ↗</a>
          <span v-else class="play-card-status">开发中</span>
        </div>
      </div>
    </div>
  </section>

  
  <!-- ============ Creator & Explorer ============ -->
  <section id="creator">
    <div class="wrap" data-reveal>
      <div class="section-label">— Content & Practice</div>
      <h2 class="section-title">内容创作与社会实践</h2>
      <p style="margin-bottom: 32px; color: #666; font-family: 'Cormorant Garamond', serif; font-style: italic;">
        从个人账号、校园媒体到社会调研，我持续练习选题、表达与传播。
      </p>

      <div class="creator-grid">
        
        <!-- XHS -->
        <div class="creator-card">
          <div class="xhs-gallery" aria-label="小红书运营数据截图">
            <a :href="xhsUrl" target="_blank"><img loading="lazy" :src="xhsUrl" alt="小红书主页数据" /></a>
            <a :href="xhsPost1Url" target="_blank"><img loading="lazy" :src="xhsPost1Url" alt="高中数学合集数据" /></a>
            <a :href="xhsPost2Url" target="_blank"><img loading="lazy" :src="xhsPost2Url" alt="校园内容数据" /></a>
          </div>
          <h3 class="card-title" style="margin-bottom: 8px;">个人账号运营</h3>
          <p style="font-size: 14px; color: #555; line-height: 1.65; flex-grow: 1;">围绕学习方法与校园生活持续创作，账号现有 <strong>1199 名粉丝、累计 6.9 万赞藏</strong>。高中数学合集共 11 篇，其中单篇获得 <strong>1.8 万赞、9220 收藏</strong>；校园竞选类内容最高浏览量超过 6 万。</p>
          <a href="https://xhslink.cn/o/2QX17q6dgMZ" target="_blank" style="font-size: 14px; color: #222; text-decoration: underline; margin-top: 12px; display: inline-block;">查看小红书主页 ↗</a>
        </div>

        <!-- WeChat Articles -->
        <div class="creator-card">
          <div class="creator-media article-list">
             <a href="https://mp.weixin.qq.com/s/FwAIb7jRoS6hx0N7FWFu2g" target="_blank" class="wx-article-link">十二连｜追光而遇，沐光而行 ↗</a>
             <a href="https://mp.weixin.qq.com/s/vOwuXKbrMJZG5FZSTaCKwQ" target="_blank" class="wx-article-link">有人丨专访朱道元教授：希望有一天数模... ↗</a>
             <a href="https://mp.weixin.qq.com/s/eF_ZVoP6_3TSGdKwZDO-tA" target="_blank" class="wx-article-link">十二连｜拨云见日，寻觅 “消失的TA” ↗</a>
             <a href="https://mp.weixin.qq.com/s/prrnEt2VdtgmoFH0AJZpXg" target="_blank" class="wx-article-link">十二连 | 不是吧，我竟在军训打怪升级！ ↗</a>
             <a href="https://mp.weixin.qq.com/s/BZJQEJj1s6_HjLhTwiDYLQ" target="_blank" class="wx-article-link">十二连｜向云端，观望军训专属色卡！ ↗</a>
             <div style="font-size: 12px; color: #999; text-align: center; margin-top: 4px;">等 50+ 篇推文</div>
          </div>
          <h3 class="card-title" style="margin-bottom: 8px;">校园内容策划</h3>
          <p style="font-size: 14px; color: #555; line-height: 1.65; flex-grow: 1;">曾任校团委宣传部主任，累计完成 50+ 篇推文与深度报道，覆盖军训专题、人物采访与研究生数模赛事。负责选题、采访、撰稿与排版，所在军训编辑部获新生宣传优胜连第一名，相关内容累计浏览 1 万+。</p>
        </div>

        <!-- Practice: 怀珠韫玉 -->
        <div class="creator-card practice-card">
          <div class="practice-gallery">
            <img loading="lazy" :src="practice1Url" alt="探访八一敬老院革命老战士" />
            <img loading="lazy" :src="practice3Url" alt="探访非遗剪纸传承人" />
            <img loading="lazy" :src="practice2Url" alt="街头党史宣传实践" />
          </div>
          <div class="practice-copy">
          <h3 class="card-title" style="margin-bottom: 8px;">延安社会实践</h3>
          <div style="font-size: 12px; color: #8DA290; margin-bottom: 12px;">怀珠韫玉实践团 · 队长</div>

          <p style="font-size: 14px; color: #555; line-height: 1.7; margin-bottom: 12px;">
            作为队长统筹选题、路线、分工与传播，带队赴延安开展红色文化调研。
          </p>

          <div class="practice-summary">
            <div><strong>非遗传播</strong><span>围绕剪纸技艺与传承开展访谈和体验式记录，将一手材料转化为图文与短视频，在抖音、小红书、B站等平台完成跨媒介传播。</span></div>
            <div><strong>老兵口述史</strong><span>访谈八一敬老院革命老战士，围绕战时经历与个人生命史完成口述资料采集、整理与内容呈现。</span></div>
          </div>

          <div style="display: flex; gap: 12px; margin-bottom: 16px; padding: 12px; background: #f9f8f6; border-radius: 4px;">
            <div style="flex: 1;">
              <div style="font-size: 16px; font-weight: 500; color: #8DA290;">国家专项</div>
              <div style="font-size: 11px; color: #999; margin-top: 2px;">社会实践优秀奖</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 16px; font-weight: 500; color: #8DA290;">校十佳</div>
              <div style="font-size: 11px; color: #999; margin-top: 2px;">优秀实践团队</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 16px; font-weight: 500; color: #8DA290;">10000+</div>
              <div style="font-size: 11px; color: #999; margin-top: 2px;">推文/视频浏览量</div>
            </div>
          </div>

          <div class="practice-links">
            <a href="https://mp.weixin.qq.com/s/rjVFeU6EHNO184h584MZ8Q" target="_blank" class="wx-article-link" style="font-size: 12px;">剪影千年 · 探访非遗剪纸传承人 ↗</a>
            <a href="https://mp.weixin.qq.com/s/joGEP1Bl9TpBYoPSYWaNAw" target="_blank" class="wx-article-link" style="font-size: 12px;">铭记历史 · 探访八一敬老院老兵 ↗</a>
            <a href="https://mp.weixin.qq.com/s/vXw89KnwAXLlAmYPonXSFg" target="_blank" class="wx-article-link" style="font-size: 12px;">延安情韵 · 文创设计一览 ↗</a>
            <a href="https://mp.weixin.qq.com/s/Uw_S8CQB_NWINhcBdnMhqA" target="_blank" class="wx-article-link" style="font-size: 12px;">集中实践总结 · 怀珠韫玉实践团 ↗</a>
          </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ============ Beyond Work ============ -->
  <section id="beyond">
    <div class="wrap" data-reveal>
      <div class="section-label">— Beyond Work</div>
      <h2 class="section-title">生活的另一面</h2>
      <p class="beyond-intro">
        工作之外，我也在游戏、阅读、旅行和教学中观察人如何做决策、理解信息与彼此协作。这些经验也在影响我做产品的方式。
      </p>

      <!-- 兴趣卡片 -->
      <div class="beyond-grid">
        <div class="beyond-card life-game">
          <img loading="lazy" :src="wangzheUrl" class="beyond-photo" alt="王者战绩" />
          <div class="beyond-icon">01 · Honor of Kings</div>
          <h3 class="beyond-title">王者 2000 分 · 辅助玩家</h3>
          <p class="beyond-text">
            长期玩辅助位，最高巅峰 2000 分，多个英雄获得省标。辅助需要持续观察全局、判断优先级并与队友协同；做项目时，我也习惯先看目标和节奏，再决定当下最值得解决的问题。
          </p>
        </div>

        <div class="beyond-card life-cats">
          <div class="cat-gallery">
            <img loading="lazy" :src="catSilverUrl" class="beyond-photo" alt="长毛银渐层" />
            <img loading="lazy" :src="cat2Url" class="beyond-photo" alt="白色小猫" />
          </div>
          <div class="beyond-icon">02 · Cats &amp; Dogs</div>
          <h3 class="beyond-title">猫咪观察员</h3>
          <p class="beyond-text">喜欢猫狗，也习惯用照片记录相处的片段。与小动物相处让我更留意情绪、距离和非语言反馈，也更愿意耐心观察，而不是急着下结论。</p>
        </div>

        <div class="beyond-card life-reading">
          <div class="beyond-icon">03 · Reading</div>
          <h3 class="beyond-title">小说</h3>
          <p class="beyond-text">偏爱人物关系和情绪细腻的故事。阅读让我习惯站在不同角色的处境里理解选择，也提醒我：用户行为背后往往有比数据更具体的动机。</p>
        </div>

        <div class="beyond-card life-travel">
          
          <div class="beyond-icon">04 · Wandering</div>
          <h3 class="beyond-title">在陌生的城市里散步</h3>
          <p class="beyond-text">旅行时喜欢慢慢走，观察街道、动线、标识和日常服务。比起打卡景点，我更在意人在真实场景中如何行动，这也训练了我从场景出发理解体验。</p>
          <div class="travel-gallery">
            <img loading="lazy" :src="travelUrl" class="beyond-photo" alt="海边游船" />
            <img loading="lazy" :src="flowerUrl" class="beyond-photo" alt="花丛中" />
            <img loading="lazy" :src="travel2Url" class="beyond-photo" alt="旅行照" />
          </div>
        </div>

        <div class="beyond-card life-music">
          <div class="beyond-icon">05 · Music</div>
          <h3 class="beyond-title">民谣 · 古风 · 安静的歌</h3>
          <p class="beyond-text">常听民谣、古风和舒缓的音乐，也喜欢在旋律里记住一段情绪或一座城市。对节奏与情绪的感知，也让我在设计内容体验时更关注用户感受，而不只关注信息是否完整。</p>
        </div>
      </div>

      <!-- Tutoring highlight -->
      <div class="tutoring">
        <div>
          <div class="kicker">Bonus · Beyond Metrics</div>
          <h3>10 名学生 · 长期家教经历</h3>
        </div>
        <div>
          <p style="margin-bottom: 18px;">
            大学期间累计辅导 <strong>10 名学生</strong>，覆盖 <strong>初中数学、英语、物理与化学</strong>。我会先定位每个人真正卡住的环节，再调整讲解方式和练习节奏。这也成为我做产品沟通时常用的方法：先找到理解障碍，再选择表达方式。
          </p>
          <div class="tutoring-cases">
            <div class="tutoring-case">
              👧 <strong>初中女孩 · 数学 40 → 85</strong> 拆解每次错题的思路盲区,用她能听懂的比喻讲抽象概念。
            </div>
            <div class="tutoring-case">
              👦 <strong>初中男孩 · 英语 55 → 80</strong> 把死记硬背换成兴趣驱动,每周留一首英文歌当作业。
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ Contact ============ -->
  <section id="contact" class="contact">
    <div class="wrap" data-reveal>
      <div class="section-label">- Get in Touch</div>
      <h2 class="contact-title">如果你也在找一个 <em>能把 AI 做"落地"</em> 的人</h2>
      <p class="contact-sub">
        欢迎聊聊 · 大模型应用 / AI Agent 产品经理岗位<br />期望城市:北京 · 上海 · 杭州
      </p>
      <div class="contact-items">
        <div class="contact-item">
          <div class="label">Email</div>
          <div class="value"><a href="mailto:dwt15229556298@163.com">dwt15229556298@163.com</a></div>
        </div>
        <div class="contact-item">
          <div class="label">WeChat</div>
          <div class="value">15229556298</div>
        </div>
        <div class="contact-item">
          <div class="label">Phone</div>
          <div class="value">+86 152 2955 6298</div>
        </div>
        <div class="contact-item">
          <div class="label">GitHub</div>
          <div class="value"><a href="https://github.com/Sinera-kiki" target="_blank" rel="noopener">Sinera-kiki</a></div>
        </div>
        <div class="contact-item">
          <div class="label">Resume PDF</div>
          <div class="value"><a :href="base + 'wanting-deng-resume.pdf'" target="_blank" rel="noopener">下载 ↓</a></div>
        </div>
      </div>
    </div>
  </section>
</template>
