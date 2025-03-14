# UI Template

[English](./README.en.md) | 简体中文

## 介绍

UI Template 是一个基于 Vue 3 的企业级 UI 组件库模板工程，专注于提供企业级应用定制化开发所需的业务/公共组件。它采用 TypeScript 开发，提供完整的类型定义，并支持按需引入和主题定制，帮助开发者快速构建美观、高效的用户界面。

## ✨ 特性

- 🔥 **Vue 3 生态** - 基于 Vue 3 和 Composition API，充分利用其性能优势和响应式特性
- 🔧 **TypeScript** - 使用 TypeScript 编写，提供完整的类型定义和智能提示
- 🌐 **Web Components** - 支持 Web Components，可与原生 HTML 元素无缝集成
- 📦 **按需引入** - 支持完整引入和按需引入，配合打包工具优化体积
- 🎨 **主题定制** - 灵活的主题配置系统，支持深色模式和样式变量自定义
- ⚡️ **开发体验** - 完整的开发文档和示例，符合直觉的 API 设计

## 📦 安装

```bash
npm install ui-template
# 或
pnpm add ui-template
```

## 🚀 快速开始

### 完整引入

```ts
import { createApp } from "vue";
import UiTemplate from "ui-template";

const app = createApp(App);
app.use(UiTemplate);
```

### 按需引入

```ts
// vite.config.ts
import Components from "unplugin-vue-components/vite";
import { UiTemplateResolver } from "@ui-template/plugins";

export default defineConfig({
  plugins: [
    Components({
      resolvers: [UiTemplateResolver()],
    }),
  ],
});
```

```vue
<template>
  <UiButton type="primary" @click="handleClick">点击按钮</UiButton>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

## 📚 文档

访问 [组件文档](./docs/guide/introduction.md) 了解更多信息。

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

## 参考

[element-plus](https://github.com/element-plus/element-plus)
[semi-design](https://github.com/DouyinFE/semi-design)

## 📄 开源协议

[MIT](LICENSE)
