const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const langButton = document.querySelector('.lang-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

document.getElementById('year').textContent = new Date().getFullYear();

const I18N = {
  en: {
    page_title: 'Huancong GUAN · 关焕聪',
    meta_description: 'Personal academic homepage of Huancong Guan. Research interests include 3D Gaussian Splatting, 3D scene understanding, multimodal learning, and LLM applications.',
    nav_aria: 'Main navigation',
    menu: 'Menu',
    nav_education: 'Education',
    nav_publications: 'Publications',
    nav_projects: 'Projects',
    nav_honors: 'Honors',
    lang_label: 'Switch to Chinese',
    lang_btn: '中',
    theme_to_dark: 'Switch to dark mode',
    theme_to_light: 'Switch to light mode',
    contact_aria: 'Contact',
    resume_zh_label: 'Chinese CV',
    resume_en_label: 'English CV',
    bio_p1: 'I am a master’s student in Computer Science and Technology at the College of Artificial Intelligence, Shenzhen University. My research interests mainly include <a href="#publications">3D Gaussian Splatting</a>, 3D scene understanding, instance segmentation, multimodal learning, and large language model applications.',
    bio_p2: 'My research aims to build more reliable 3D scene representations and understanding with <a href="#publications">3D Gaussian Splatting</a>, with a focus on robust instance segmentation under noisy 2D supervision and cross-view inconsistency. I am also interested in language-guided 3D instance retrieval for more natural interaction with reconstructed scenes.',
    bio_p3: 'Beyond 3D vision research, I also have experience in multimodal video modeling, RAG, agent orchestration, and LLM fine-tuning and alignment, and can independently complete data processing, model training, experimental evaluation, and system implementation.',
    bio_contact: 'Feel free to reach me at <a href="mailto:1473229459@qq.com">📧 1473229459@qq.com</a>.',
    profile_role: '<strong>Huancong Guan</strong><br>Master Student · AI Researcher<br>📍 Shenzhen, China',
    edu_title: '👨🏻‍🎓 Education Experience',
    edu_hint: 'Click a school below to expand details.',
    alt_szu: 'Shenzhen University emblem',
    alt_gdut: 'Guangdong University of Technology emblem',
    szu_name_en: 'Shenzhen University',
    szu_period: 'Master · 2024 — Present',
    gdut_name_en: 'Guangdong University of Technology',
    gdut_period: 'Bachelor · 2020 — 2024',
    szu_name: 'Shenzhen University',
    szu_college: 'College of Artificial Intelligence · 📍 Shenzhen, China',
    szu_degree: 'Master’s Student',
    szu_dates: '2024.09 — Present',
    label_major: 'Major',
    label_awards: 'Awards',
    szu_major: 'Computer Science and Technology',
    szu_awards: '2024 University Special Scholarship for Graduate Students',
    gdut_name: 'Guangdong University of Technology',
    gdut_college: 'School of Automation · 📍 Guangzhou, China',
    gdut_degree: 'B.Eng.',
    gdut_major: 'Internet of Things Engineering',
    gdut_gpa: '3.75 / 5.00 · Rank 11 / 86 (recommended for postgraduate admission)',
    gdut_awards: 'Second-class Scholarship, Guangdong University of Technology (2021, 2023)<br>Third-class Scholarship, Guangdong University of Technology (2022)',
    pub_title: '📖 Selected Publications',
    pub_preprints: 'Journal Papers',
    pub_status: '🎉 Accepted',
    pub_venue: 'IEEE Transactions on Image Processing (CCF-A)',
    pub_abstract: 'Abstract',
    paper_link: 'Paper ↗',
    paper_link_pending: 'Link coming soon',
    proj_title: '🚀 Project Experience',
    tech_stack: 'Tech Stack:',
    code_link: 'Code ↗',
    p1_title: 'EviLoop: Evidence-Driven Closed-Loop Web Agent',
    p1_b1: 'For complex web interaction tasks such as MiniWoB++/WebShop/WebArena, built an evidence-driven closed-loop agent on Browser Use to address noisy long DOMs, repeated invalid actions, and premature submit/purchase when constraints are unmet; delivered policy implementation, a unified evaluation harness, and end-to-end main/ablation experiments.',
    p1_b2: 'Proposed EviLoop: on top of the classic agent loop, introduced HTML-first evidence extraction, semantic candidate reranking, structured execution memory, irreversible-action submit gates, and budgeted failure recovery, forming a verifiable observe→plan→act→verify→remember loop with dataset-agnostic constraint extraction and progress detection/recovery routing.',
    p1_b3: 'Evaluated with Qwen3-VL-32B: MiniWoB++/WebShop three-seed overall success rate reached 69.0%, about 24.3 points above vanilla Browser Use (44.7%); on the Seed-17 fixed subset, MiniWoB++ reached 96.0% (baseline 66.0%) and WebShop 64.0% (baseline 24.0%); WebArena four sites totaled 22.5% (baseline ~5.4%).',
    hs_title: 'HarnessSWE: Code-Repair Agent and Reproducible Experiment Framework',
    hs_b1: 'For SWE-bench Verified, built a pluggable code-repair agent on DeepSeek Harness to address tool coupling, verbose outputs, and hard-to-reproduce experiments; integrated mini-SWE baseline, Docker isolation, and the official evaluator for policy implementation and ablation studies.',
    hs_b2: 'Implemented search/read/edit/Shell tools on Harness/Cordis with parameter validation, path constraints, and trajectory logging; designed fixed truncation and adaptive deduplication, supporting independent swaps of model/tool/result handlers with checkpoint recovery and config-hash freezing.',
    hs_b3: 'Ran 7 groups × 50 fixed tasks (350 runs) with DeepSeek Flash/Pro: fixed-truncation Resolve Rate reached 54.0%, 8 points above Base (46.0%), with ~6.5% fewer total tokens; vs official Bash, the custom four-tool setup improved Resolve Rate from 42% to 46% (Flash) and 38% to 48% (Pro).',
    p2_title: 'IndexChart Multimodal ChartQA Agent with LoRA Alignment',
    p2_b1: 'Built a multimodal tool-calling agent for ChartQA so the model can read bar/line charts, autonomously invoke image-focus tools, and answer questions, covering data construction, training, and evaluation end to end.',
    p2_b2: 'Proposed the IndexChart structured action interface, replacing error-prone free-text tool arguments with stable label indices; implemented draw/highlight/mask focusing with a safe tool sandbox, and ran LoRA SFT and GRPO training on Qwen2.5-Omni/Qwen3-VL to improve answer correctness and tool executability.',
    p2_b3: 'On ChartQA validation (813 samples), Exact/Relaxed reached 73.80%/80.07%, up 16.6%/18.6% over RFT legacy; tool success rate ~98%, about 40%–57% above the baseline.',
    p3_title: 'Paper Retrieval QA System',
    p3_b1: 'Designed a local-first paper retrieval agent for reading and research QA, supporting arXiv search, PDF download/indexing, session file upload QA, local library retrieval, and complementary web search.',
    p3_b2: 'Built multi-path agent orchestration with FastAPI + LangGraph, routing requests into paper search, paper content QA, local retrieval, tool calling, and dialogue-history retrieval.',
    p3_b3: 'Designed a local-first paper QA pipeline; when local content is missing, trigger arXiv search, PDF download, structured indexing, and vectorization, and build section trees with section roles.',
    p3_b4: 'Built a hybrid RAG strategy combining Chroma vector search, BM25, RRF, and CrossEncoder reranking, with metadata weighting and section-aware retrieval to improve evidence relevance.',
    p3_b5: 'Integrated an MCP tool stack and returned routing, retrieval, tool-call, and generation traces via SSE streaming to improve observability and debuggability.',
    p4_title: 'Personalized Travel Recommendation System',
    p4_b1: 'Designed a multi-agent itinerary planner with LangGraph + FastAPI that auto-generates complete travel plans with attractions, hotels, weather, transport, and budget from destination, days, budget, and preferences.',
    p4_b2: 'Split the task into three parallel nodes—POI retrieval, hotel recommendation, and weather analysis—and designed rule filtering + name scoring + LLM secondary filtering for attractions.',
    p4_b3: 'Implemented route planning, transport recommendation, and budget estimation, with Cost, Relax, and Coverage multi-objective plan generation.',
    p5_title: 'Qwen2.5 Fine-Tuning and Alignment Experiments',
    p5_b1: 'Built a multi-stage SFT, DPO, Reward Model, and PPO training/evaluation pipeline on Qwen2.5-7B-Instruct, covering dataset setup, LoRA/full fine-tuning comparison, and metric evaluation.',
    p5_b2: 'On CNN/DailyMail summarization, LoRA reduced eval loss from 3.006 to 1.392 (~53.7% drop).',
    p5_b3: 'On Summarize preference modeling, Reward Model eval accuracy rose from 42.4% to 75.2%, with eval loss from 0.744 to 0.498.',
    p5_b4: 'Completed UltraFeedback DPO and PPO policy training, forming a reusable RLHF pipeline from SFT and RM to PPO.',
    p6_title: 'Multimodal Human Oocyte Classification',
    p6_time: '2025.09 — Present',
    p6_b1: 'For a hospital collaboration in assisted reproduction, explored multimodal classification from oocyte development videos and structured tabular data, with temporal preprocessing for variable-length video clips.',
    p6_b2: 'Built a multi-branch video encoding and multimodal fusion model with Neighborhood Attention, temporal encoding, Transformer, frame/segment attention pooling, and modality gating.',
    p6_b3: 'Set up DDP distributed training and evaluation with mixed precision, gradient accumulation, gradient clipping, LR scheduling, and checkpoint management.',
    p6_b4: 'Current experimental accuracy reaches 70%+.',
    honors_title: '🌟 Selected Honors',
    h1: 'Second Prize, Guangdong Contest of the Contemporary Undergraduate Mathematical Contest in Modeling',
    h2: 'Third Prize, “Electrical Engineering Cup” National Undergraduate Mathematical Contest in Modeling',
    h3: 'First Prize, Guangdong University of Technology Mathematical Challenge',
    h4: '2 software copyrights for human ECG signal analysis',
    skills_title: '🛠 Skills',
    skills_prog: 'Programming & Frameworks',
    skills_research: 'Research & Engineering',
    skills_lang: 'Language',
    skills_lang_val: 'CET-6 488 · Academic English reading & writing',
    footer_updated: 'Last updated: August 2026',
  },
  zh: {
    page_title: 'Huancong GUAN · 关焕聪',
    meta_description: '关焕聪的个人学术主页，研究方向包括 3D Gaussian Splatting、三维场景理解、多模态学习与大模型应用。',
    nav_aria: '主导航',
    menu: '菜单',
    nav_education: '教育经历',
    nav_publications: '论文发表',
    nav_projects: '项目经历',
    nav_honors: '荣誉奖项',
    lang_label: '切换到英文',
    lang_btn: 'EN',
    theme_to_dark: '切换深色模式',
    theme_to_light: '切换浅色模式',
    contact_aria: '联系方式',
    resume_zh_label: '中文简历',
    resume_en_label: '英文简历',
    bio_p1: '我是深圳大学人工智能学院计算机科学与技术专业的硕士研究生，研究兴趣主要包括 <a href="#publications">3D Gaussian Splatting</a>、三维场景理解、实例分割、多模态学习与大模型应用。',
    bio_p2: '我的研究致力于基于 <a href="#publications">3D Gaussian Splatting</a> 构建更可靠的三维场景表示与理解方法，重点关注二维监督噪声与跨视角不一致下的鲁棒实例分割，并探索文本引导的三维实例检索，以支持更自然的场景交互。',
    bio_p3: '除三维视觉研究外，我也具备多模态视频建模、RAG、Agent 编排及大模型微调与对齐经验，能够独立完成数据处理、模型训练、实验评估和系统实现。',
    bio_contact: '欢迎通过 <a href="mailto:1473229459@qq.com">📧 1473229459@qq.com</a> 与我交流。',
    profile_role: '<strong>Huancong Guan</strong><br>硕士研究生 · AI 研究者<br>📍 深圳，中国',
    edu_title: '👨🏻‍🎓 教育经历',
    edu_hint: '点击下方学校展开详情。',
    alt_szu: '深圳大学校徽',
    alt_gdut: '广东工业大学校徽',
    szu_name_en: '深圳大学',
    szu_period: '硕士 · 2024 — 至今',
    gdut_name_en: '广东工业大学',
    gdut_period: '本科 · 2020 — 2024',
    szu_name: '深圳大学',
    szu_college: '人工智能学院 · 📍 深圳，中国',
    szu_degree: '硕士研究生',
    szu_dates: '2024.09 — 至今',
    label_major: '专业',
    label_awards: '获奖',
    szu_major: '计算机科学与技术',
    szu_awards: '2024 年校级研究生特等奖学金',
    gdut_name: '广东工业大学',
    gdut_college: '自动化学院 · 📍 广州，中国',
    gdut_degree: '工学学士',
    gdut_major: '物联网工程',
    gdut_gpa: '3.75 / 5.00 · 排名 11 / 86（推免）',
    gdut_awards: '2021、2023 年广东工业大学学生二等奖学金<br>2022 年广东工业大学学生三等奖学金',
    pub_title: '📖 论文发表',
    pub_preprints: '期刊论文',
    pub_status: '🎉 已接收',
    pub_venue: 'IEEE Transactions on Image Processing（CCF-A）',
    pub_abstract: '摘要',
    paper_link: '论文 ↗',
    paper_link_pending: '链接即将更新',
    proj_title: '🚀 项目经历',
    tech_stack: '技术栈：',
    code_link: '代码 ↗',
    p1_title: 'EviLoop：证据驱动的闭环网页 Agent',
    p1_b1: '面向 MiniWoB++/WebShop/WebArena 等复杂网页交互任务，针对通用 Web Agent 易受冗长 DOM 干扰、重复无效操作、以及约束未满足即误触发提交/购买等问题，基于 Browser Use 构建证据驱动闭环 Agent；完成策略实现、统一评测 Harness 与主实验/消融对比的端到端流程。',
    p1_b2: '提出 EviLoop 方法：在经典 Agent Loop 上引入 HTML-first 证据抽取、语义候选重排、结构化执行记忆、不可逆操作提交门禁与预算化失败恢复，形成「观察→规划→执行→验证→记忆」可校验闭环，并实现数据集无关的约束抽取与进度检测/恢复路由。',
    p1_b3: '以 Qwen3-VL-32B 评测：MiniWoB++/WebShop 三 Seed 总成功率达 69.0%，相对原版 Browser Use（44.7%）提升约 24.3 个百分点；Seed-17 固定子集上 MiniWoB++ 达 96.0%（基线 66.0%）、WebShop 达 64.0%（基线 24.0%），WebArena 四站合计 22.5%（基线约 5.4%）。',
    hs_title: 'HarnessSWE：代码修复 Agent 与可复现实验框架',
    hs_b1: '面向 SWE-bench Verified，针对工具耦合、输出冗长与实验难复现等问题，基于 DeepSeek Harness 构建可插拔 Agent；接入 mini-SWE baseline、Docker 隔离与官方评测器，完成策略实现与消融评测。',
    hs_b2: '基于 Harness/Cordis 实现搜索、读取、编辑与 Shell 四类工具，并加入参数校验、路径约束与轨迹记录；设计固定截断与自适应去重，支持模型/工具/结果处理独立替换，配套断点恢复与配置哈希冻结。',
    hs_b3: '用 DeepSeek Flash/Pro 在固定 50 条任务上完成 7 组共 350 次实验：固定截断组 Resolve Rate 达 54.0%，较 Base（46.0%）高 8 个百分点，总 Token 约降 6.5%；在工具对照实验中进一步对比官方 Bash 与自研搜索/读取/编辑/Shell 四工具组，Flash 下 Resolve Rate 由 42% 升至 46%、Pro 下由 38% 升至 48%。',
    p2_title: '基于 IndexChart 的多模态图表问答 Agent 与 LoRA 对齐训练',
    p2_b1: '面向 ChartQA 构建多模态工具调用 Agent，使模型阅读柱状图/折线图后可自主调用图像聚焦工具并完成作答，覆盖数据构建、训练与评测全流程。',
    p2_b2: '提出 IndexChart 结构化动作接口，用稳定标签编号替代易错的自由文本工具参数；实现 draw/highlight/mask 图像聚焦与安全工具沙箱，并基于 Qwen2.5-Omni/Qwen3-VL 开展 LoRA SFT 与 GRPO 强化训练，优化答案正确性与工具可执行性。',
    p2_b3: '在 ChartQA validation（813 样本）上 Exact/Relaxed 达 73.80%/80.07%，相对 RFT legacy 提升 16.6%/18.6%；工具成功率约 98%，较基线提升约 40%–57%。',
    p3_title: '论文检索问答系统',
    p3_b1: '面向论文阅读与科研问答场景，设计本地优先的论文检索 Agent，支持 arXiv 论文搜索、PDF 下载入库、会话级文件上传问答、本地论文库检索与联网补充检索。',
    p3_b2: '基于 FastAPI + LangGraph 构建多路径 Agent 编排流程，将请求划分为论文搜索、论文内容问答、本地库检索、工具调用及历史对话检索等类型。',
    p3_b3: '设计 Local-first 论文问答链路；本地缺失时再触发 arXiv 搜索、PDF 下载、结构化入库和向量化，并构建 Section tree 与 Section role。',
    p3_b4: '构建 Hybrid RAG 检索策略，融合 Chroma 向量检索、BM25、RRF 与 CrossEncoder Reranker，结合元数据加权和 Section-aware 检索提升证据相关性。',
    p3_b5: '接入 MCP 工具体系，并通过 SSE 流式接口返回路由、检索、工具调用和生成过程 trace，提升系统可观测性与可调试性。',
    p4_title: '个性化旅行推荐系统',
    p4_b1: '基于 LangGraph + FastAPI 设计多 Agent 行程规划系统，根据目的地、天数、预算与偏好自动生成包含景点、酒店、天气、交通和预算的完整旅行方案。',
    p4_b2: '将任务拆分为 POI 检索、酒店推荐、天气分析三个并行节点，设计规则过滤 + 名称打分 + LLM 二次筛选的景点过滤机制。',
    p4_b3: '实现路线规划、交通推荐与预算估算，并支持 Cost、Relax、Coverage 三类多目标方案生成。',
    p5_title: 'Qwen2.5 微调与对齐实验',
    p5_b1: '基于 Qwen2.5-7B-Instruct 搭建 SFT、DPO、Reward Model 与 PPO 多阶段训练评测流程，完成数据集配置、LoRA/Full 微调对比和指标评估。',
    p5_b2: '在 CNN/DailyMail 摘要任务上通过 LoRA 将 eval loss 从 3.006 降至 1.392，下降约 53.7%。',
    p5_b3: '在 Summarize 偏好建模任务上将 Reward Model 的 eval accuracy 从 42.4% 提升至 75.2%，eval loss 从 0.744 降至 0.498。',
    p5_b4: '完成 UltraFeedback DPO 实验及 PPO 策略模型训练，形成从 SFT、RM 到 PPO 的可复用 RLHF 实验链路。',
    p6_title: '多模态人体卵细胞分类',
    p6_time: '2025.09 — 至今',
    p6_b1: '面向医院合作的辅助生殖场景，探索基于卵细胞发育视频与结构化表格数据的多模态分类方法，并构建支持变长视频片段输入的时序预处理流程。',
    p6_b2: '构建多分支视频编码与多模态融合模型，结合 Neighborhood Attention、时间编码、Transformer、帧级/段级注意力池化和 Modality gating。',
    p6_b3: '搭建 DDP 分布式训练与评测流程，支持混合精度、梯度累积、梯度裁剪、学习率调度与 checkpoint 管理。',
    p6_b4: '当前实验准确率达到 70%+。',
    honors_title: '🌟 荣誉奖项',
    h1: '全国大学生数学建模大赛广东省赛二等奖',
    h2: '“电工杯”全国大学生电工数学建模竞赛三等奖',
    h3: '广东工业大学数学挑战赛一等奖',
    h4: '人体心电信号分析软件著作权 2 项',
    skills_title: '🛠 技能',
    skills_prog: '编程与框架',
    skills_research: '研究与工程',
    skills_lang: '语言能力',
    skills_lang_val: 'CET-6 488 · 英文学术阅读与写作',
    footer_updated: '最近更新：2026 年 8 月',
  },
};

function systemLang() {
  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || 'en'];
  return langs.some((l) => String(l).toLowerCase().startsWith('zh')) ? 'zh' : 'en';
}

function resolveLang() {
  const saved = localStorage.getItem('lang');
  if (saved === 'en' || saved === 'zh') return saved;
  return systemLang();
}

function getLang() {
  return root.dataset.lang === 'en' ? 'en' : 'zh';
}

function applyLanguage(lang, { persist = false } = {}) {
  const dict = I18N[lang] || I18N.en;
  root.dataset.lang = lang;
  root.lang = lang === 'zh' ? 'zh-CN' : 'en';
  if (persist) localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });

  langButton.textContent = dict.lang_btn;
  langButton.setAttribute('aria-label', dict.lang_label);
  langButton.setAttribute('title', dict.lang_label);
  updateThemeButton();
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.dataset.theme = savedTheme;
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';

function updateThemeButton() {
  const dark = root.dataset.theme === 'dark';
  const dict = I18N[getLang()];
  themeButton.textContent = dark ? '☀' : '☾';
  const label = dark ? dict.theme_to_light : dict.theme_to_dark;
  themeButton.setAttribute('aria-label', label);
  themeButton.setAttribute('title', label);
}

applyLanguage(resolveLang());

themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  updateThemeButton();
});

langButton.addEventListener('click', () => {
  applyLanguage(getLang() === 'en' ? 'zh' : 'en', { persist: true });
});

window.addEventListener('languagechange', () => {
  if (localStorage.getItem('lang') !== 'en' && localStorage.getItem('lang') !== 'zh') {
    applyLanguage(systemLang());
  }
});

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.education-item').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = document.getElementById(button.dataset.target);
    const alreadyOpen = button.classList.contains('active');

    document.querySelectorAll('.education-item').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.detail-card').forEach((card) => {
      card.hidden = true;
      card.classList.remove('active');
    });

    if (!alreadyOpen) {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      selected.hidden = false;
      selected.classList.add('active');
    }
  });
});

document.querySelectorAll('.paper-link.is-pending').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -65%' });
sections.forEach((section) => observer.observe(section));
