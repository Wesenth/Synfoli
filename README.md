# Synfoli · Western Jewelry

波西米亚与美国西部风格的绿松石首饰展示站，以批发选款和询价为主，兼顾个人购买咨询。

## 当前版本

- 三种可切换风格：复古西部精品店、粗犷牛仔、自然波西米亚。
- 透明背景 SYNFOLI Logo。
- 图片悬停放大、点击/轻触大图查看。
- 图片圆角：桌面 32px，手机 28px。
- 选款加入询价，生成邮件内容并打开访客的邮件应用。

本仓库是纯 HTML、CSS、JavaScript 静态网站，无依赖安装和构建步骤。

## 运行预览

在仓库根目录运行：

```sh
python3 -m http.server 4173 --bind 0.0.0.0 --directory dist
```

本机访问 `http://localhost:4173`。云端开发环境使用其提供的端口预览/转发地址。

可选风格参数：

- `?style=boutique`（默认）
- `?style=ranch`
- `?style=boho`

## 文件结构

- `dist/index.html`：页面内容与结构。
- `dist/style.css`：三种主题、响应式布局与圆角样式。
- `dist/app.js`：主题切换、图片放大和邮件询价。
- `dist/assets/`：商品图与 Logo。
- `dist/fonts/`：字体及 SIL Open Font License 授权文本。

## 托管与限制

静态托管的发布目录设为 `dist`，入口文件为 `index.html`，无需构建命令。

当前没有支付、订单、商品库存或询价数据库。询价操作只准备邮件，并不会自动发送。站内联系邮箱沿用现有版本的 `service@synfoli.com`，正式对外使用前请确认该邮箱可收件。

字体授权保存在 `dist/fonts/`，分发时请一并保留。字体的开源授权不代表品牌 Logo、商品图片或其他内容也采用同一授权。

本仓库导入自已确认的 Sites 源码版本 `3b0acfae107cec314f31470931002b8087b4d7d5`。原 Sites 项目标识、凭证与本地临时文件未包含在本仓库内。
