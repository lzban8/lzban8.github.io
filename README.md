# 非神的博客

这是我的个人博客，基于 Hugo 构建，使用 PaperMod 主题，部署在 Cloudflare Pages 上。

## 🌟 特性

- 🚀 基于 Hugo 的超快静态站点
- 🎨 使用 PaperMod 主题的现代化设计
- 🌙 自动深色模式支持
- 🔍 全站搜索功能
- 📱 移动端友好的响应式设计
- 💬 基于 Giscus 的评论系统
- 📊 Google Analytics 访问统计
- 🗂️ 文章分类与标签系统
- 📖 自动生成目录
- 📈 阅读进度指示
- 🔄 RSS 订阅支持
- 🔒 安全性优化

## 🛠️ 技术栈

- [Hugo](https://gohugo.io/) - 静态站点生成器
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod) - 主题
- [Cloudflare Pages](https://pages.cloudflare.com/) - 托管服务
- [Giscus](https://giscus.app/) - 评论系统
- [Google Analytics](https://analytics.google.com/) - 访问统计

## 📚 内容板块

- 技术博客
- 学习笔记
- 生活随笔
- 系列教程

## 🚀 本地运行

1. 克隆仓库：
```bash
git clone https://github.com/lzban8/lzban8.github.io.git
cd lzban8.github.io
```

2. 安装 Hugo：
```bash
# macOS
brew install hugo

# Windows
choco install hugo-extended

# Linux
snap install hugo
```

3. 初始化子模块：
```bash
git submodule update --init --recursive
```

4. 本地预览：
```bash
hugo server -D
```

5. 访问：
```
http://localhost:1313
```

## 📝 创建新文章

```bash
hugo new posts/my-new-post.md
```

## 🔧 自定义配置

主要配置文件：
- `hugo.toml` - 站点配置
- `assets/css/extended/custom.css` - 自定义样式
- `assets/js/custom.js` - 自定义脚本
- `static/_headers` - 安全头设置
- `static/_redirects` - URL 重定向规则

## 🔒 安全特性

- HTTPS 强制
- 安全响应头
- CSP 策略
- 缓存控制
- 子资源完整性

## 📈 性能优化

- 图片延迟加载
- 资源预加载
- 自动压缩
- CDN 加速
- 浏览器缓存

## 📱 社交链接

- GitHub: [@lzban8](https://github.com/lzban8)

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提出建议和改进意见！

1. Fork 本仓库
2. 创建您的特性分支
3. 提交您的改动
4. 推送到分支
5. 创建一个 Pull Request

## 📮 联系方式

如果您有任何问题或建议，欢迎通过以下方式联系我：

- GitHub Issues
- 博客评论区
