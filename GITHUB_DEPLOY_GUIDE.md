# 🚀 使用 GitHub Pages 获得永久免费网址（完整版）

## ⚡ 完全免费，永久使用！

GitHub Pages 是 GitHub 提供的免费静态网站托管服务，100%免费，永久使用。

---

## 📋 部署步骤（5分钟完成）

### 步骤 1：创建 GitHub 账号

1. 访问：https://github.com/join
2. 填写用户名、邮箱、密码
3. 验证邮箱
4. 完成注册

**已有账号？** 直接跳到步骤2

---

### 步骤 2：创建新仓库

1. 登录 GitHub
2. 点击右上角 **+** 号
3. 选择 **New repository**
4. 填写信息：
   - **Repository name**: `fishing-master-v2`
   - **Description**: `钓鱼大师决策系统 - 专业级垂钓决策平台`
   - 选择 **Public**（公开）
   - **不要**勾选 "Add a README file"
5. 点击 **Create repository**

---

### 步骤 3：上传代码

创建仓库后，你会看到上传代码的界面，有两种方式：

#### 方式 A：命令行上传（推荐）

在你的终端中运行以下命令：

```bash
cd /Users/hushunrui/CodeBuddy/20260311132753
git remote add origin https://github.com/你的用户名/fishing-master-v2.git
git branch -M main
git push -u origin main
```

**注意**：将 `你的用户名` 替换为你的 GitHub 用户名

#### 方式 B：网页上传（无需命令行）

1. 在仓库页面点击 **uploading an existing file**
2. 拖拽以下文件到页面：
   - `index.html`
   - `fishing-data.js`
   - `package.json`
   - `netlify.toml`
   - `README.md`
3. 在 "Commit changes" 输入框填写：`Initial commit: 钓鱼大师决策系统 v2.0`
4. 点击 **Commit changes**

---

### 步骤 4：启用 GitHub Pages

1. 在仓库页面，点击 **Settings**（设置）
2. 左侧菜单找到 **Pages**（通常在左侧底部）
3. 点击 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source**: 选择 `Deploy from a branch`
   - **Branch**: 选择 `main`
   - **Folder (root)**: 选择 `/ (root)`
5. 点击 **Save**

---

### 步骤 5：等待部署完成

1. 保存后，页面会显示：
   - `Your site is live at: https://你的用户名.github.io/fishing-master-v2`
2. 等待 1-2 分钟（首次部署需要时间）
3. 点击链接访问你的网站！

---

## 🎉 完成！你的永久网址是：

```
https://你的用户名.github.io/fishing-master-v2
```

例如，如果你的用户名是 `fishingmaster`，网址就是：
`https://fishingmaster.github.io/fishing-master-v2`

---

## ✅ GitHub Pages 的优势

✅ **100%免费** - 永久免费使用
✅ **永久网址** - 只要 GitHub 在，你的网站就在
✅ **自动HTTPS** - 自动配置 SSL 证书
✅ **自定义域名** - 可以绑定自己的域名
✅ **版本控制** - 代码自动备份
✅ **全球CDN** - 访问速度快
✅ **手机访问** - 完美支持移动设备

---

## 📱 如何更新网站？

修改文件后，只需运行：

```bash
cd /Users/hushunrui/CodeBuddy/20260311132753
git add .
git commit -m "Update website"
git push
```

GitHub Pages 会自动更新网站！

---

## 🎨 自定义网址（可选）

### 方式 1：修改仓库名

1. 进入仓库 **Settings** → **General**
2. 在 **Repository name** 改为 `你的用户名.github.io`
3. 保存后网址变为：`https://你的用户名.github.io`

### 方式 2：绑定自己的域名

1. 进入仓库 **Settings** → **Pages**
2. 在 **Custom domain** 输入你的域名
3. 按照提示配置 DNS 记录

---

## 🔧 高级配置（可选）

### 添加自定义主题

1. 进入仓库 **Settings** → **Pages**
2. 在 **Theme chooser** 选择一个主题
3. 或者手动创建 `index.html` 作为首页

### 添加自定义 404 页面

1. 创建 `404.html` 文件
2. 上传到仓库
3. 当用户访问不存在的页面时会显示

---

## 💡 常见问题

### Q1: 需要花钱吗？
**A:** 完全免费，永久使用。

### Q2: 能放多少网站？
**A:** 每个账号可以创建多个仓库，每个仓库可以部署一个网站。

### Q3: 能放视频/大文件吗？
**A:** 单个仓库限制 1GB，每个仓库的流量限制 100GB/月。

### Q4: 支持哪些技术？
**A:** 静态文件（HTML, CSS, JS, 图片, 视频），不支持服务器端语言（PHP, Python, Node.js 等）。

### Q5: 网站会消失吗？
**A:** 只要 GitHub 不倒闭，你的网站就会永久存在。

---

## 📞 需要帮助？

GitHub Pages 官方文档：https://docs.github.com/en/pages

---

## 🚀 立即开始

1. 创建 GitHub 账号：https://github.com/join
2. 创建仓库：`fishing-master-v2`
3. 上传代码
4. 启用 Pages
5. 获得永久网址！

---

**祝你部署成功！** 🎉🎣
