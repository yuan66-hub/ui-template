# UI Template

English | [简体中文](./README.md)

## Introduction

UI Template is an enterprise-level UI component library template based on Vue 3, focusing on providing business and common components needed for enterprise application customization development. It is developed with TypeScript, provides complete type definitions, and supports on-demand import and theme customization, helping developers quickly build beautiful and efficient user interfaces.

## ✨ Features

- 🔥 **Vue 3 Ecosystem** - Based on Vue 3 and Composition API, fully leveraging its performance advantages and reactive features
- 🔧 **TypeScript** - Written in TypeScript with complete type definitions and intelligent hints
- 🌐 **Web Components** - Support for Web Components, seamlessly integrating with native HTML elements
- 📦 **On-demand Import** - Support for both full import and on-demand import, optimizing bundle size with build tools
- 🎨 **Theme Customization** - Flexible theme configuration system, supporting dark mode and custom style variables
- ⚡️ **Development Experience** - Complete development documentation and examples, intuitive API design

## 📦 Installation

```bash
npm install ui-template
# or
pnpm add ui-template
```

## 🚀 Quick Start

### Full Import

```ts
import { createApp } from "vue";
import UiTemplate from "ui-template";

const app = createApp(App);
app.use(UiTemplate);
```

### On-demand Import

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
  <UiButton type="primary" @click="handleClick">Click Button</UiButton>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

## 📚 Documentation

Visit [Component Documentation](./docs/guide/introduction.md) for more information.

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

[MIT](LICENSE)
