# Cloudflare Pages 自动部署指南（3步完成）

## 您需要做的（仅3步）：

### 第1步：登录
- 在打开的Cloudflare页面登录您的账号
- 如无账号，免费注册即可

### 第2步：创建Pages项目
1. 点击左侧菜单 "Workers & Pages"
2. 点击 "Create application" → "Pages"
3. 选择 "Connect to Git"
4. 点击 "Connect to GitHub" 授权

### 第3步：部署
1. 选择您的GitHub仓库（需要先创建）
2. 配置构建设置：
   - Build command: 留空
   - Build output directory: 留空（根目录）
3. 点击 "Save and Deploy"
4. 等待2-3分钟，获得永久网址

---

## 完成后您将获得：
✅ 永久免费网站（.pages.dev域名）
✅ 全球CDN加速
✅ 自动HTTPS
✅ 无限流量

---

## 如果没有GitHub仓库：

替代方案：直接上传
1. 在Cloudflare Pages选择 "Upload assets"
2. 将项目文件夹拖拽上传
3. 点击 "Deploy site"
