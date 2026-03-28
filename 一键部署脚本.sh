#!/bin/bash

echo "==================================="
echo "  钓鱼大师决策系统 - 自动部署"
echo "==================================="
echo ""
echo "正在准备部署到 GitHub Pages..."
echo ""

# 检查是否已有远程仓库
if git remote | grep -q origin; then
    echo "检测到已有远程仓库配置"
    REMOTE_URL=$(git remote get-url origin)
    echo "当前远程仓库: $REMOTE_URL"
    read -p "是否使用此仓库？(y/n): " use_existing
    if [ "$use_existing" != "y" ]; then
        echo ""
        echo "请手动配置新的远程仓库："
        echo "1. 访问 https://github.com/new 创建新仓库"
        echo "2. 仓库名建议: fishing-master-v2"
        echo "3. 创建后复制仓库地址"
        echo ""
        read -p "请输入 GitHub 仓库地址: " repo_url
        if [ -n "$repo_url" ]; then
            git remote set-url origin "$repo_url"
            echo "远程仓库已更新"
        fi
    fi
else
    echo ""
    echo "==================================="
    echo "  需要创建 GitHub 仓库"
    echo "==================================="
    echo ""
    echo "1. 访问 https://github.com/new 创建新仓库"
    echo "2. 仓库名建议: fishing-master-v2"
    echo "3. 设置为 Public（公开）"
    echo "4. 点击 Create repository"
    echo ""
    read -p "创建完成后，请输入 GitHub 仓库地址: " repo_url
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "远程仓库已添加"
    else
        echo "未提供仓库地址，跳过推送步骤"
        exit 0
    fi
fi

echo ""
echo "==================================="
echo "  正在推送到 GitHub..."
echo "==================================="
echo ""

# 推送代码
git branch -M main 2>/dev/null
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "==================================="
    echo "  下一步：启用 GitHub Pages"
    echo "==================================="
    echo ""
    echo "1. 访问你的 GitHub 仓库页面"
    echo "2. 点击 Settings → Pages"
    echo "3. Source 选择 'Deploy from a branch'"
    echo "4. Branch 选择 'main'，文件夹选择 '/ (root)'"
    echo "5. 点击 Save"
    echo ""
    echo "等待 1-2 分钟后，你的网站将上线！"
    echo ""
    echo "🌐 网址格式："
    echo "   https://你的用户名.github.io/fishing-master-v2"
    echo ""
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "1. 仓库地址是否正确"
    echo "2. 是否有 GitHub 访问权限"
    echo "3. 网络连接是否正常"
fi

echo ""
echo "祝您鱼获满满！🎣"
echo "==================================="
