#!/bin/bash

echo "=========================================="
echo "  钓鱼大师决策系统 - 自动部署"
echo "=========================================="
echo ""

# 进入项目目录
cd /Users/hushunrui/CodeBuddy/20260311132753

# 检查远程仓库
if git remote | grep -q origin; then
    echo "发现已配置的远程仓库："
    git remote -v
    echo ""
    read -p "是否使用此仓库推送代码？(y/n): " use_existing
    
    if [ "$use_existing" = "y" ] || [ "$use_existing" = "Y" ]; then
        echo ""
        echo "正在推送代码..."
        git branch -M main 2>/dev/null || true
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
            echo "1. 打开你的仓库页面（见上面的远程地址）"
            echo "2. 点击 Settings（右上角齿轮图标）"
            echo "3. 左侧滚动到底部，点击 Pages"
            echo "4. Source 选择 'Deploy from a branch'"
            echo "5. Branch 选择 'main'"
            echo "6. Folder 选择 '/ (root)'"
            echo "7. 点击 Save"
            echo ""
            echo "等待1-2分钟后，网站将上线！"
            echo ""
            exit 0
        else
            echo ""
            echo "❌ 推送失败，请检查："
            echo "1. 网络连接"
            echo "2. GitHub权限"
            echo "3. 仓库是否存在"
            echo ""
            exit 1
        fi
    fi
fi

echo "需要配置新的远程仓库"
echo ""
echo "=========================================="
echo "  请先创建 GitHub 仓库"
echo "=========================================="
echo ""
echo "1. 访问 https://github.com/new"
echo "2. 仓库名填写：fishing-master-v2"
echo "3. 设置为 Public（公开）"
echo "4. 不要勾选 'Add a README file'"
echo "5. 点击 Create repository"
echo ""

# 获取用户输入
read -p "创建完成后，请输入你的GitHub用户名: " username

if [ -z "$username" ]; then
    echo ""
    echo "未输入用户名，退出"
    exit 1
fi

# 构建仓库URL
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
git branch -M main 2>/dev/null || true
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "=========================================="
    echo "  下一步：启用 GitHub Pages"
    echo "=========================================="
    echo ""
    echo "请立即访问以下链接启用 Pages："
    echo "https://github.com/$username/fishing-master-v2/settings/pages"
    echo ""
    echo "或按以下步骤操作："
    echo "1. 打开仓库页面：https://github.com/$username/fishing-master-v2"
    echo "2. 点击 Settings（右上角齿轮图标）"
    echo "3. 左侧滚动到底部，点击 Pages"
    echo "4. Source 选择 'Deploy from a branch'"
    echo "5. Branch 选择 'main'"
    echo "6. Folder 选择 '/ (root)'"
    echo "7. 点击 Save"
    echo ""
    echo "等待1-2分钟后，你的网站将上线："
    echo "https://$username.github.io/fishing-master-v2"
    echo ""
    echo "================================================"
    echo "  祝你鱼获满满！🎣"
    echo "================================================"
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "1. 用户名是否正确：$username"
    echo "2. 仓库是否已创建：fishing-master-v2"
    echo "3. 网络连接是否正常"
    echo ""
    echo "请手动检查："
    echo "1. 访问 https://github.com/$username/fishing-master-v2"
    echo "2. 确认仓库存在"
    echo "3. 确认是 Public（公开）仓库"
    echo ""
    exit 1
fi
