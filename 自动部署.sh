#!/bin/bash

echo "=========================================="
echo "  钓鱼大师决策系统 - 自动部署到GitHub"
echo "=========================================="
echo ""

# 检查远程仓库
if git remote | grep -q origin; then
    echo "发现已配置的远程仓库"
    git remote -v
    echo ""
    read -p "是否使用此仓库？(y/n): " use_existing

    if [ "$use_existing" = "y" ]; then
        echo "正在推送代码..."
        git branch -M main
        git push -u origin main

        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ 代码推送成功！"
            echo ""
            echo "=========================================="
            echo "  下一步：启用 GitHub Pages"
            echo "=========================================="
            echo ""
            echo "请按以下步骤操作："
            echo "1. 打开你的仓库页面（上面的远程地址）"
            echo "2. 点击 Settings（右上角齿轮图标）"
            echo "3. 左侧滚动到底部，点击 Pages"
            echo "4. Source 选择 'Deploy from a branch'"
            echo "5. Branch 选择 'main'，文件夹选择 '/ (root)'"
            echo "6. 点击 Save"
            echo ""
            echo "等待1-2分钟后，网站将上线！"
            echo ""
        else
            echo ""
            echo "❌ 推送失败，请检查网络和权限"
        fi
        exit 0
    fi
fi

echo "需要配置远程仓库"
echo ""
echo "=========================================="
echo "  请先创建 GitHub 仓库"
echo "=========================================="
echo ""
echo "1. 访问 https://github.com/new"
echo "2. 仓库名填写：fishing-master-v2"
echo "3. 设置为 Public（公开）"
echo "4. 点击 Create repository"
echo ""
read -p "创建完成后，请输入你的GitHub用户名: " username

if [ -n "$username" ]; then
    repo_url="https://github.com/$username/fishing-master-v2.git"
    echo ""
    echo "仓库地址：$repo_url"
    echo ""

    # 添加远程仓库
    git remote add origin "$repo_url"
    echo "✅ 远程仓库已添加"
    echo ""

    # 推送代码
    echo "正在推送代码..."
    git branch -M main
    git push -u origin main

    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 代码推送成功！"
        echo ""
        echo "=========================================="
        echo "  下一步：启用 GitHub Pages"
        echo "=========================================="
        echo ""
        echo "请访问以下链接启用 Pages："
        echo "https://github.com/$username/fishing-master-v2/settings/pages"
        echo ""
        echo "配置说明："
        echo "- Source: Deploy from a branch"
        echo "- Branch: main"
        echo "- Folder: / (root)"
        echo ""
        echo "等待1-2分钟后，你的网站将上线："
        echo "https://$username.github.io/fishing-master-v2"
        echo ""
    else
        echo ""
        echo "❌ 推送失败，请检查："
        echo "1. 用户名是否正确"
        echo "2. 仓库是否已创建"
        echo "3. 网络连接是否正常"
    fi
else
    echo "未输入用户名，退出"
fi

echo ""
echo "祝你鱼获满满！🎣"
echo "=========================================="
