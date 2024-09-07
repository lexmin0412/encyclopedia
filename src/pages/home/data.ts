interface DataItem {
	title: string
	github?: string
	url: string
	description: string
	themeColor?: string
	tags?: string[]
}

interface GroupItem {
	id: string
	title: string
	themeColor: string
	type: 'tool' | 'article' | 'website' | 'music' | 'movie'
	children: DataItem[]
}

const getRandomClass = () => {
	const classList = [
		"bg-red-500",
		"bg-green-500",
		"bg-blue-500",
		"bg-yellow-500",
		"bg-pink-500",
		"bg-purple-500",
		"bg-indigo-500",
		"bg-orange-500",
	];
	return classList[Math.floor(Math.random() * 8)];
};

export const dataList: GroupItem[] = [
	{
		id: 'tool',
		title: '工具',
		themeColor: getRandomClass(),
		type: 'tool',
		children: [
			{
				"title": "MarsCode",
				// "github": "https://github.com/facebook/react",
				"url": "https://www.marscode.cn/",
				"description": "豆包旗下的 AI 原生 IDE，支持智能补全、智能预测、智能问答等能力。同时提供云端开发环境，一键开箱即用",
				tags: [
					'AI',
				]
			},
			{
				"title": "React",
				"github": "https://github.com/facebook/react",
				"url": "https://reactjs.org",
				"description": "用于构建用户界面的 JavaScript 库"
			},
			{
				"title": "Material-UI",
				"github": "https://github.com/mui-org/material-ui",
				"url": "https://mui.com",
				"description": "Material Design 风格的 React UI库"
			},
			{
				"title": "Ant Design",
				"github": "https://github.com/ant-design/ant-design",
				"url": "https://ant.design",
				"description": "一套企业级 UI 设计语言和 React 组件库"
			},
			{
				"title": "Ant Design Mobile",
				"github": "https://github.com/ant-design/ant-design-mobile",
				"url": "https://mobile.ant.design",
				"description": "Ant Design 的移动端版本"
			},
			{
				"title": "React Use",
				"github": "https://github.com/streamich/react-use",
				"url": "",
				"description": "React Hooks 集合"
			},
			{
				"title": "ahooks",
				"github": "https://github.com/alibaba/hooks",
				"url": "https://ahooks.js.org",
				"description": "一套高质量可靠的 React Hooks 库"
			},
			{
				"title": "Vue",
				"github": "https://github.com/vuejs/vue-next",
				"url": "https://vuejs.org",
				"description": "渐进式 JavaScript 框架"
			},
			{
				"title": "Element Plus",
				"github": "https://github.com/element-plus/element-plus",
				"url": "https://element-plus.org",
				"description": "一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库"
			},
			{
				"title": "Vant",
				"github": "https://github.com/youzan/vant",
				"url": "https://youzan.github.io/vant",
				"description": "轻量、可靠的移动端 Vue 组件库"
			},
			{
				"title": "Varlet",
				"github": "https://github.com/haoziqaq/varlet",
				"url": "https://varlet.gitee.io",
				"description": "基于 Vue3 开发的 Material 风格移动端组件库"
			},
			{
				"title": "NutUI",
				"github": "https://github.com/jdf2e/nutui",
				"url": "https://jdf2e.github.io/nutui",
				"description": "京东风格的轻量级移动端 Vue2、Vue3 组件库（支持多端小程序开发）"
			},
			{
				"title": "Svelte",
				"github": "https://github.com/sveltejs/svelte",
				"url": "https://svelte.dev",
				"description": "Cybernetically enhanced web apps"
			},
			{
				"title": "Taro",
				"github": "https://github.com/nervjs/taro",
				"url": "https://taro.zone",
				"description": "开放式跨端跨框架解决方案"
			},
			{
				"title": "Taro Hooks",
				"github": "https://github.com/innocces/taro-hooks",
				"url": "",
				"description": "为 Taro 而设计的 Hooks Library"
			},
			{
				"title": "Taroify",
				"github": "https://github.com/mallfoundry/taroify",
				"url": "",
				"description": "移动端组件库 Vant 的 Taro 版本"
			},
			{
				"title": "UniApp",
				"github": "https://gitee.com/dcloud/uni-app",
				"url": "https://uniapp.dcloud.io",
				"description": "一个使用 Vue.js 开发所有前端应用的框架"
			},
			{
				"title": "PIUI",
				"github": "https://github.com/sadais-org/piui",
				"url": "",
				"description": "基于uniapp的高质量UI开源组件库"
			},
			{
				"title": "SolidJS",
				"github": "https://github.com/solidjs/solid",
				"url": "https://www.solidjs.com",
				"description": "一个声明式、高效且灵活用于构建用户界面的 JavaScript 库"
			},
			{
				"title": "Remax",
				"github": "https://github.com/remaxjs/remax",
				"url": "https://remaxjs.org",
				"description": "使用真正的 React 构建跨平台小程序"
			},
			{
				"title": "QianKun",
				"github": "https://github.com/umijs/qiankun",
				"url": "https://qiankun.umijs.org",
				"description": "可能是你见过最完善的微前端解决方案"
			},
			{
				"title": "Flutter",
				"github": "https://github.com/flutter/flutter",
				"url": "https://flutter.dev",
				"description": "Google 推出并开源的移动应用开发框架，主打跨平台、高保真、高性能"
			},
			{
				"title": "Express",
				"github": "https://github.com/expressjs/express",
				"url": "https://expressjs.com",
				"description": "基于 Node.js 平台，快速、开放、极简的 Web 开发框架"
			},
			{
				"title": "Koa",
				"github": "https://github.com/koajs/koa",
				"url": "https://koajs.com",
				"description": "基于 Node.js 平台的下一代 web 开发框架"
			},
			{
				"title": "Fastify",
				"github": "https://github.com/fastify/fastify",
				"url": "https://www.fastify.io",
				"description": "快速并且低开销的 web 框架，专为 Node.js 平台量身打造"
			},
			{
				"title": "Egg.js",
				"github": "https://github.com/eggjs/egg",
				"url": "https://eggjs.org",
				"description": "为企业级框架和应用而生"
			},
			{
				"title": "Next.js",
				"github": "https://github.com/vercel/next.js",
				"url": "https://nextjs.org",
				"description": "用于生产环境的 React 框架"
			},
			{
				"title": "Nuxt.js",
				"github": "https://github.com/nuxt/nuxt.js",
				"url": "https://nuxtjs.org",
				"description": "基于 Vue.js 的通用应用框架"
			},
			{
				"title": "Nest.js",
				"github": "https://github.com/nestjs/nest",
				"url": "https://nestjs.com",
				"description": "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架"
			},
			{
				"title": "Remix",
				"github": "https://github.com/remix-run/remix",
				"url": "https://remix.run",
				"description": "全栈 web 框架"
			},
			{
				"title": "VSCode",
				"github": "https://github.com/microsoft/vscode",
				"url": "https://code.visualstudio.com",
				"description": "一个轻量但功能强大的源代码编辑器"
			},
			{
				"title": "Atom",
				"github": "https://github.com/atom/atom",
				"url": "https://atom.io",
				"description": "一款由 Github 开发的代码编辑器"
			},
			{
				"title": "Webpack",
				"github": "https://github.com/webpack/webpack",
				"url": "https://webpack.js.org",
				"description": "一个用于现代 JavaScript 应用程序的静态模块打包工具"
			},
			{
				"title": "Rollup",
				"github": "https://github.com/rollup/rollup",
				"url": "https://rollupjs.org",
				"description": "一个 JavaScript 模块打包器"
			},
			{
				"title": "Vite",
				"github": "https://github.com/vitejs/vite",
				"url": "https://vitejs.dev",
				"description": "下一代前端开发与构建工具"
			},
			{
				"title": "ESBuild",
				"github": "https://github.com/evanw/esbuild",
				"url": "https://esbuild.github.io/",
				"description": "极速 JavaScript 打包工具"
			},
			{
				"title": "Rspack",
				"github": "https://github.com/web-infra-dev/rspack",
				"url": "",
				"description": "基于 Rust 的高性能 Web 构建工具"
			},
			{
				"title": "NPM",
				"github": "https://github.com/npm/cli",
				"url": "https://www.npmjs.com",
				"description": "JavaScript 包管理工具"
			},
			{
				"title": "YARN",
				"github": "https://github.com/yarnpkg/yarn",
				"url": "https://classic.yarnpkg.com",
				"description": "快速、可靠、安全的依赖管理工具"
			},
			{
				"title": "PNPM",
				"github": "https://github.com/pnpm/pnpm",
				"url": "https://pnpm.js.org",
				"description": "快速的，节省磁盘空间的包管理工具"
			},
			{
				"title": "FNM",
				"github": "https://github.com/Schniz/fnm",
				"url": "https://fnm.vercel.app",
				"description": "简单快速的 Node.js 版本管理工具，基于 Rust 构建"
			},
			{
				"title": "NVM",
				"github": "https://github.com/nvm-sh/nvm",
				"url": "https://github.com/nvm-sh/nvm",
				"description": "Node.js 版本管理工具"
			},
			{
				"title": "NRM",
				"github": "https://github.com/Pana/nrm",
				"url": "https://github.com/Pana/nrm",
				"description": "NPM 源切换工具"
			},
			{
				"title": "NPKill",
				"github": "https://github.com/voidcosmos/npkill",
				"url": "https://github.com/voidcosmos/npkill",
				"description": "列出你的系统中所有 node_modules 及其体积，并可选择性清除的工具"
			},
			{
				"title": "QNM",
				"github": "https://github.com/ranyitz/qnm",
				"url": "https://github.com/ranyitz/qnm",
				"description": "类似于 `npm list` 功能但体验更好的命令行工具"
			},
			{
				"title": "NCU",
				"github": "https://github.com/raineorshine/npm-check-updates",
				"url": "https://github.com/raineorshine/npm-check-updates",
				"description": "查找 package.json 中所有依赖的最新版本"
			},
			{
				"title": "VConsole",
				"github": "https://github.com/Tencent/vConsole",
				"url": "https://github.com/Tencent/vConsole",
				"description": "一个轻量、可拓展、针对手机网页的前端开发者调试面板"
			},
			{
				"title": "Whistle",
				"github": "https://github.com/avwo/whistle",
				"url": "https://wproxy.org/whistle/",
				"description": "基于 Node 实现的跨平台抓包调试代理工具"
			},
			{
				"title": "ESLint",
				"github": "https://github.com/eslint/eslint",
				"url": "https://eslint.org",
				"description": "发现并修复 JavaScript 代码中的问题"
			},
			{
				"title": "Prettier",
				"github": "https://github.com/prettier/prettier",
				"url": "https://prettier.io",
				"description": "一个“有态度”的代码格式化工具"
			},
			{
				"title": "StyleLint",
				"github": "https://github.com/stylelint/stylelint",
				"url": "https://stylelint.io",
				"description": "一个强大的，现代的代码检查工具，可以帮助您避免错误并在您的样式中强制执行约定"
			},
			{
				"title": "MarkdownLint",
				"github": "https://github.com/DavidAnson/markdownlint",
				"url": "https://github.com/DavidAnson/markdownlint",
				"description": "一个 Node.js 风格的 Markdown/CommonMark 文件检查和校验工具"
			},
			{
				"title": "CommitLint",
				"github": "https://github.com/conventional-changelog/commitlint",
				"url": "https://commitlint.js.org",
				"description": "Git 提交规范检查工具"
			},
			{
				"title": "SonarJS",
				"github": "https://github.com/SonarSource/SonarJS",
				"url": "https://sonarsource.github.io/sonarjs",
				"description": "JavaScript/TypeScript 静态代码分析工具"
			},
			{
				"title": "Chalk",
				"github": "https://github.com/chalk/chalk",
				"url": "https://github.com/chalk/chalk",
				"description": "终端字符串样式美化工具"
			},
			{
				"title": "Handlerbars.js",
				"github": "https://github.com/handlebars-lang/handlebars.js",
				"url": "https://handlebarsjs.com",
				"description": "轻量的语义化模板"
			},
			{
				"title": "YAPI",
				"github": "https://github.com/YMFE/yapi",
				"url": "https://yapi.ymfe.org",
				"description": "高效、易用、功能强大的API管理平台"
			},
			{
				"title": "AntV/F2",
				"github": "https://github.com/antvis/F2",
				"url": "https://antv.vision/en/f2",
				"description": "开箱即用的移动端可视化解决方案"
			},
			{
				"title": "Mermaid",
				"github": "https://github.com/mermaid-js/mermaid",
				"url": "https://mermaid-js.github.io/mermaid/",
				"description": "一个基于 Javascript 的图表绘制工具"
			},
			{
				"title": "LuckySheet",
				"github": "https://github.com/mengshukeji/Luckysheet",
				"url": "https://mengshukeji.github.io/LuckysheetDocs/",
				"description": "一款纯前端类似excel的在线表格，功能强大、配置简单、完全开源"
			},
			{
				"title": "Jest",
				"github": "https://github.com/facebook/jest",
				"url": "https://jestjs.io",
				"description": "一个令人愉快的 JavaScript 测试框架"
			},
			{
				"title": "Mocha",
				"github": "https://github.com/mochajs/mocha",
				"url": "https://mochajs.org",
				"description": "一个功能丰富的 Javascript 测试框架"
			},
			{
				"title": "PlayWright",
				"github": "https://github.com/microsoft/playwright",
				"url": "https://playwright.dev",
				"description": "一个可以自动化操作 Chromium, Firefox 和 WebKit 的 node 库"
			},
			{
				"title": "Docsify",
				"github": "https://github.com/docsifyjs/docsify",
				"url": "https://docsify.js.org",
				"description": "一个神奇的文档网站生成器"
			},
			{
				"title": "VuePress",
				"github": "https://github.com/vuejs/vuepress",
				"url": "https://vuepress.vuejs.org",
				"description": "一个极简的 Vue 驱动的静态网站生成器"
			},
			{
				"title": "Docusaurus",
				"github": "https://github.com/facebook/docusaurus",
				"url": "https://docusaurus.io/",
				"description": "基于 React 帮助您在极短时间内搭建优美的文档网站"
			},
			{
				"title": "Dumi",
				"github": "https://github.com/umijs/dumi",
				"url": "https://d.umijs.org",
				"description": "为组件开发场景而生的文档工具"
			},
			{
				"title": "Rspress",
				"github": "https://github.com/web-infra-dev/rspress",
				"url": "",
				"description": "基于 Rspack 的静态站点生成器"
			},
			{
				"title": "Husky",
				"github": "https://github.com/typicode/husky",
				"url": "https://typicode.github.io/husky",
				"description": "Git Hooks 工具"
			},
			{
				"title": "Picasso",
				"github": "https://github.com/wuba/Picasso",
				"url": "https://wuba.github.io/Picasso",
				"description": "Sketch设计稿智能解析平台"
			},
			{
				title: 'Logan',
				description: '美团开源移动端基础日志库',
				github: 'https://github.com/Meituan-Dianping/Logan',
				url: 'https://tech.meituan.com/2018/10/11/logan-open-source.html',
			},
			{
				"title": "Rust",
				"github": "https://github.com/rust-lang/rust",
				"url": "https://www.rust-lang.org",
				"description": "一门赋予每个人构建可靠且高效软件能力的语言"
			},
			{
				"title": "Go",
				"github": "https://github.com/golang/go",
				"url": "https://golang.org",
				"description": "一门可以提高程序员的工作效率的编程语言"
			}
		].map((item) => {
			return {
				...item,
				themeColor: getRandomClass()
			}
		})
	},
	{
		id: 'articles',
		title: '文章',
		type: 'article',
		themeColor: getRandomClass(),
		children: [
			{ "title": "ESLint 在中大型团队的应用实践", "url": "https://tech.meituan.com/2019/08/01/eslint-application-practice-in-medium-and-large-teams.html", description: '代码规范是软件开发领域经久不衰的话题，几乎所有工程师在开发过程中都会遇到，并或多或少会思考过这一问题。随着前端应用的大型化和复杂化，越来越多的前端工程师和团队开始重视 JavaScript 代码规范。得益于前端开源社区的繁盛，当下已经有几种较为成熟的 JavaScript 代码规范检查工具，包括 JSLint、JSHint、ESLint、FECS 等等。本文主要介绍目前较为通用的方案——ESLint，它是一款插件化的 JavaScript 代码静态检查工具，其核心是通过对代码解析得到的 AST（Abstract Syntax Tree，抽象语法树）进行模式匹配，定位不符合约定规范的代码。' },
			{ "title": "一篇来自前端同学对后端接口的吐槽", "url": "https://zhuanlan.zhihu.com/p/68435690", description: '' },
			{ "title": "React Native在美团外卖客户端的实践", "url": "https://tech.meituan.com/2019/12/19/meituan-mrn-practice.html", description: '' },
			{ "title": "美团开源 Logan Web：前端日志在 Web 端的实现", "url": "https://tech.meituan.com/2020/01/09/meituan-logan.html", description: '' },
			{ "title": "Bifrost微前端框架及其在美团闪购中的实践", "url": "https://tech.meituan.com/2019/12/26/meituan-bifrost.html", description: '' },
			{ "title": "用微前端的方式搭建类单页应用", "url": "https://tech.meituan.com/2018/09/06/fe-tiny-spa.html",  description: '' },
			{ "title": "从美团这篇文章聊聊微前端的聚合问题", "url": "https://zhuanlan.zhihu.com/p/50358444", description: '' },
			{ "title": "微前端说明书", "url": "https://zhuanlan.zhihu.com/p/82051427", description: '' },
			{ "title": "打破框架的范式之争", "url": "https://mp.weixin.qq.com/s/0YuYBqD2qWf_EgKMbow1dw", description: '' },
			{ "title": "微前端在美团外卖的实践", "url": "https://tech.meituan.com/2020/02/27/meituan-waimai-micro-frontends-practice.html", description: '' },
			{ "title": "配送交付时间轻量级预估实践", "url": "https://tech.meituan.com/2019/10/10/distribution-time-prediction-practice.html", description: '' },
			{ "title": "移动端H5开发常用技巧", "url": "https://juejin.im/post/5e4a0162f265da57133b2005", description: '' },
			{ "title": "语义化版本 2.0.0", "url": "https://semver.org/lang/zh-CN/", description: '' },
			{ "title": "如何维护更新日志", "url": "https://keepachangelog.com/zh-CN/1.0.0/", description: '' },
		].map((item)=>{
			return {
				...item,
				themeColor: getRandomClass()
			}
		})
	},
	{
		id: 'website',
		title: '博客站点',
		type: 'website',
		themeColor: getRandomClass(),
		children: [
			{
				title: '美团技术团队',
				description: '美团技术团队（Tech Team，简称 TT）是一支专注于解决技术问题的技术团队',
				url: 'https://tech.meituan.com/'
			},
			{
				title: '有赞技术团队',
				description: '',
				url: 'https://tech.youzan.com/'
			},
			{
				title: '京东 - 凹凸实验室',
				description: '凹凸实验室（Aotu.io）成立于 2013 年，致力于打造一个面向京东的开源技术平台。',
				url: 'https://aotu.io/'
			},
			{
				title: '知乎 - 前端技术漫游指南',
				description: '前端技术漫游指南',
				url: 'https://zhuanlan.zhihu.com/front-end'
			}
		].map((item)=>{
			return {
				...item,
				themeColor: getRandomClass()
			}
		})
	},
	{
		id: 'open-platform',
		title: '开放平台',
		type: 'website',
		themeColor: getRandomClass(),
		children: [
			{
				title: '微信官方文档',
				description: '',
				url: 'https://developers.weixin.qq.com/doc/'
			},
			{
				title: '微信开放平台',
				description: '',
				url: 'https://open.weixin.qq.com/'
			},
			{
				title: '支付宝开放平台',
				description: '',
				url: 'https://open.alipay.com/'
			},
			{
				title: '抖音开放平台',
				description: '',
				url: 'https://developer.open-douyin.com/'
			},
			{
				title: 'VSCode 扩展 API 文档',
				description: '',
				url: 'https://code.visualstudio.com/api'
			},
			{
				title: '腾讯位置服务',
				description: '',
				url: 'https://lbs.qq.com/'
			}
		].map((item)=>{
			return {
				...item,
				themeColor: getRandomClass()
			}
		})
	},
	{
		id: 'music',
		title: '音乐',
		type: 'music',
		themeColor: getRandomClass(),
		children: [
			{
				"title": "清风徐来",
				"description": "清风徐来 by 王菲",
				"url": "https://c.y.qq.com/base/fcgi-bin/u?__=r9qTO9"
			},
			{
				"title": "老街",
				"description": "老街 by 李荣浩",
				"url": "https://c.y.qq.com/base/fcgi-bin/u?__=g3StU"
			},
			{
				"title": "篝火旁",
				"description": "篝火旁 by 吕大叶 /马子林Broma /陈觅Lynne",
				"url": "https://y.qq.com/n/ryqq/songDetail/214093439"
			},
			{
				"title": "漠河舞厅",
				"description": "漠河舞厅 by 周冬雨 /刘昊然 /梅婷 /袁弘",
				"url": "https://y.qq.com/n/ryqq/songDetail/333192479"
			}
		].map((item) => {
			return {
				...item,
				themeColor: getRandomClass()
			}
		})
	},
	{
		id: 'movie',
		title: '电影',
		type: 'movie',
		themeColor: getRandomClass(),
		children: [
			{
				"title": "海上钢琴师",
				description: "本片讲述了一个钢琴天才传奇的一生。1900年，Virginian号豪华邮轮上，一个孤儿被遗弃在头等舱，由船上的水手抚养长大，取名1900。1900慢慢长大，显示出了无师自通的非凡钢琴天赋，在船上的乐队表演钢琴，每个听过他演奏的人，都被深深打动。爵士乐鼻祖杰尼听说了1900的高超技艺，专门上船和他比赛，最后自叹弗如，黯然离去。可惜，这一切的事情都发生在海上，1900从来不愿踏上陆地，直到有一天，他爱上了一个女孩，情愫在琴键上流淌。他会不会为了爱情，踏上陆地开始新的生活，用他的琴声惊艳世界？他将怎样谱写自己非凡的人生。",
				"url": "https://m.v.qq.com/play.html?vid=n0033qgxnhc"
			}
		].map((item) => {
			return {
				...item,
				themeColor: getRandomClass()
			}
		})
	}
]
