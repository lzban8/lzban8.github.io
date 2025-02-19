---
title: "Hugo 博客搭建教程（一）：基础安装与配置"
date: 2024-02-19
draft: false
tags: ["Hugo", "博客", "教程"]
categories: ["技术"]
series: ["Hugo 博客搭建"]
series_weight: 1
description: "从零开始学习如何使用 Hugo 搭建个人博客，包括安装、基本配置和主题选择。"
---

## 什么是 Hugo？

Hugo 是一个用 Go 语言编写的静态网站生成器。它以其快速的构建速度和灵活的配置而闻名。

## 安装 Hugo

### macOS 安装方法

使用 Homebrew 安装：

```bash
brew install hugo
```

### 验证安装

```bash
hugo version
```

## 创建新站点

```bash
hugo new site myblog
```

## 安装主题

我们选择 PaperMod 主题：

```bash
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

## 基础配置

创建配置文件 `hugo.toml`：

```toml
baseURL = 'https://example.org/'
languageCode = 'zh-cn'
title = '我的博客'
theme = 'PaperMod'
```

## 下一步

在下一篇文章中，我们将详细介绍：
1. 主题的深度定制
2. 添加评论系统
3. 配置分析统计

敬请期待！ 