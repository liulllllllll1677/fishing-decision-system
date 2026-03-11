#!/bin/bash

echo "==================================="
echo "  钓鱼决策指南 - 快速部署工具"
echo "==================================="
echo ""

# 检查 Git 是否安装
if ! command -v git &> /dev/null; then
    echo "❌ 错误：未安装 Git"
    echo "请先安装 Git：https://git-scm.com/downloads"
    exit 1
fi

# 检查是否已初始化 Git 仓库
if [ ! -d ".git" ]; then
    echo "📦 正在初始化 Git 仓库..."
    git init
    git add .
    git commit -m "Initial commit: 钓鱼人全能决策指南 v2.0"
    echo "✅ Git 仓库初始化完成"
else
    echo "✅ Git 仓库已存在"
fi

echo ""
echo "==================================="
echo "  选择部署方式："
echo "==================================="
echo ""
echo "1. GitHub Pages (推荐，完全免费)"
echo "   - 需要一个 GitHub 账号"
echo "   - 永久网址格式: https://yourname.github.io/repo-name"
echo ""
echo "2. Netlify (推荐，操作简单)"
echo "   - 访问 https://app.netlify.com/drop"
echo "   - 直接拖拽此文件夹即可"
echo "   - 永久网址格式: https://random-name.netlify.app"
echo ""
echo "3. Vercel (免费，速度快)"
echo "   - 需要安装 Node.js"
echo "   - 运行: npm install -g vercel && vercel"
echo ""
echo "4. Cloudflare Pages (免费，全球CDN)"
echo "   - 访问 https://pages.cloudflare.com/"
echo "   - 连接 GitHub 或直接上传"
echo ""
echo "5. 查看详细部署教程"
echo ""
read -p "请输入选项 (1-5): " choice

case $choice in
    1)
        echo ""
        echo "🚀 GitHub Pages 部署步骤："
        echo "1. 访问 https://github.com/new 创建新仓库"
        echo "2. 仓库名建议: fishing-guide-v2"
        echo "3. 创建后复制仓库地址"
        echo ""
        read -p "请输入 GitHub 仓库地址: " repo_url
        if [ -n "$repo_url" ]; then
            git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"
            git branch -M main
            echo "📤 正在推送到 GitHub..."
            git push -u origin main
            echo ""
            echo "✅ 推送完成！"
            echo ""
            echo "📝 启用 GitHub Pages："
            echo "1. 访问你的仓库页面"
            echo "2. 点击 Settings → Pages"
            echo "3. 在 Source 中选择 'Deploy from a branch'"
            echo "4. Branch 选择 'main'，文件夹选择 '/ (root)'"
            echo "5. 点击 Save"
            echo ""
            echo "⏳ 等待约1-2分钟后，你的网站将部署成功！"
            echo "🌐 访问地址: https://YOUR_USERNAME.github.io/fishing-guide-v2"
        fi
        ;;
    2)
        echo ""
        echo "🚀 Netlify 快速部署步骤："
        echo "1. 访问以下网址："
        echo "   https://app.netlify.com/drop"
        echo ""
        echo "2. 直接将整个文件夹拖拽到上传区域"
        echo ""
        echo "3. 等待几秒钟，部署即完成！"
        echo ""
        echo "🌐 你将获得一个永久网址，如："
        echo "   https://peaceful-yak-123456.netlify.app"
        echo ""
        echo "💡 提示：你可以在 Site Settings 中修改域名"
        ;;
    3)
        echo ""
        echo "🚀 Vercel 部署步骤："
        echo "1. 首先安装 Vercel CLI："
        echo "   npm install -g vercel"
        echo ""
        echo "2. 然后在当前目录运行："
        echo "   vercel"
        echo ""
        echo "3. 按照提示操作，完成后即可获得永久网址"
        echo ""
        echo "💡 提示：需要先注册 Vercel 账号"
        ;;
    4)
        echo ""
        echo "🚀 Cloudflare Pages 部署步骤："
        echo "1. 访问：https://pages.cloudflare.com/"
        echo ""
        echo "2. 有两种方式："
        echo "   方式A：直接上传文件"
        echo "   - 点击 'Create a project'"
        echo "   - 选择 'Direct Upload'"
        echo "   - 上传 index.html 文件"
        echo ""
        echo "   方式B：连接 GitHub"
        echo "   - 点击 'Connect to Git'"
        echo "   - 选择刚才创建的 GitHub 仓库"
        echo ""
        echo "🌐 部署完成后，你将获得永久网址"
        ;;
    5)
        echo ""
        cat README.md
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

echo ""
echo "==================================="
echo "  部署完成后，你可以："
echo "==================================="
echo "✅ 通过永久网址访问网站"
echo "✅ 在任何设备上查看（手机、平板、电脑）"
echo "✅ 分享网址给其他钓友"
echo ""
echo "祝您鱼获满满！🎣"
echo "==================================="
