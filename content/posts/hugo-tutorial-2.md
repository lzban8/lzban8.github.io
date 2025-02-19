---
title: "Hugo 博客搭建教程（二）：主题定制与功能增强"
date: 2024-02-19
draft: false
tags: ["Hugo", "博客", "教程"]
categories: ["技术"]
series: ["Hugo 博客搭建"]
series_weight: 2
description: "深入了解 Hugo 主题定制，包括评论系统集成、统计分析和性能优化。"
---

## 主题定制

### 自定义 CSS

创建 `assets/css/extended/custom.css` 文件：

```css
.post-content {
    font-size: 1.1rem;
    line-height: 1.8;
}
```

### 配置评论系统

我们使用 Giscus 作为评论系统：

```toml
[params.comments]
enabled = true
provider = "giscus"
```

## 添加统计分析

### Google Analytics 配置

```toml
[params.analytics]
enabled = true
provider = "google"
googleAnalytics = "G-XXXXXXXXXX"
```

## 性能优化

1. 图片优化
2. 延迟加载
3. 缓存配置

## 下一步

在下一篇文章中，我们将介绍：
1. SEO 优化
2. 自动部署
3. 高级功能配置

敬请期待！ 