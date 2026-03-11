# 钓鱼人全能决策指南 v2.0

## 🎣 项目介绍

这是一个专业的钓鱼决策指南网站，基于AI垂钓参数化数据源开发。适用于野钓、黑坑、夜钓等多种场景。

## 📱 快速部署（获得永久网址）

### 方法一：使用 Netlify（推荐，免费且简单）

1. 访问 https://www.netlify.com/ 并注册账号
2. 登录后点击 "Add new site" → "Deploy manually"
3. 将整个文件夹拖拽到上传区域
4. 等待部署完成，即可获得永久网址（格式：https://your-site-name.netlify.app）

### 方法二：使用 Vercel（免费）

1. 访问 https://vercel.com/ 并注册账号
2. 安装 Vercel CLI：
   ```bash
   npm install -g vercel
   ```
3. 在项目目录运行：
   ```bash
   cd /Users/hushunrui/CodeBuddy/20260311132753
   vercel
   ```
4. 按照提示操作，部署完成即可获得永久网址

### 方法三：使用 GitHub Pages（免费）

1. 将项目推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. 选择 GitHub Actions 或从 main/master 分支部署
4. 部署完成即可通过 `https://username.github.io/repository-name` 访问

## 🌐 本地预览

如果已经在本地启动了服务器：
- 打开浏览器访问：http://localhost:8000
- 如果端口8000被占用，尝试：http://localhost:8080

## 📦 项目结构

```
20260311132753/
├── index.html          # 主页面（单文件完整应用）
├── README.md          # 说明文档
└── netlify.toml       # Netlify部署配置（可选）
```

## 🎨 功能特性

- ✅ 完整的天气与目标鱼匹配决策表
- ✅ 精细化线组搭配公式
- ✅ 饵料味型选择指南
- ✅ 出钓时间与钓位选择
- ✅ 水情与气压深度解析
- ✅ 实战场景快速查询卡
- ✅ 响应式设计，支持手机、平板、电脑
- ✅ 现代化UI，美观易用

## 🚀 技术栈

- HTML5
- Bootstrap 5.3
- Font Awesome 6.4
- 响应式设计

## 📝 使用说明

网站已经包含了所有必要的代码和资源，无需额外配置：
1. 直接打开 `index.html` 即可使用
2. 或通过上述任一部署方法获得永久网址
3. 在任何浏览器中访问即可获得完整的钓鱼决策指导

## 🔗 快速部署指南（Netlify详细步骤）

### 步骤1：准备文件
确保目录中只有 `index.html` 文件

### 步骤2：注册 Netlify
访问 https://app.netlify.com/signup 注册账号

### 步骤3：部署网站
1. 登录后点击左侧 "Sites"
2. 点击 "Add new site" → "Deploy manually"
3. 将包含 `index.html` 的整个文件夹拖到上传区域
4. 点击 "Deploy site"

### 步骤4：获得网址
部署完成后，Netlify会自动分配一个永久网址，例如：
`https://peaceful-yak-123456.netlify.app`

### 步骤5：自定义域名（可选）
1. 在 Site settings → Domain management
2. 可以修改为自定义域名或使用 Netlify 提供的免费域名

## 🎯 获取永久网址的其他选择

### GitHub Pages（最推荐给开发者）
```bash
# 1. 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 2. 推送到 GitHub（先在GitHub创建空仓库）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main

# 3. 在 GitHub 上启用 Pages
# 进入仓库 → Settings → Pages → Source 选择 main 分支 → Save
```

### Cloudflare Pages（免费，全球CDN）
1. 访问 https://pages.cloudflare.com/
2. 连接 GitHub 账号或直接上传
3. 自动部署并获得永久网址

## 📞 技术支持

如果您在部署过程中遇到问题：
- Netlify 文档：https://docs.netlify.com/
- Vercel 文档：https://vercel.com/docs
- GitHub Pages 文档：https://docs.github.com/en/pages

---

**祝您鱼获满满！** 🎣
