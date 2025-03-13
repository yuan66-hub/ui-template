# 快速开始

## 安装

使用 npm 或 pnpm 进行安装：

```bash
npm install ui-template
# 或
pnpm add ui-template
```

## 基础使用

### 完整引入

在 main.ts 中全局注册组件：

```ts
import { createApp } from "vue";
import UiTemplate from "ui-template";

const app = createApp(App);
app.use(UiTemplate);
```

### 按需引入

推荐使用 unplugin-vue-components 自动导入：

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
  <UiButton type="primary" @click="handleClick"> 点击按钮 </UiButton>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

## 注意事项

1. 按需引入需要安装 unplugin-vue-components
2. 主题样式需要单独引入：

```ts
import "ui-template/theme/ui-button.css";
// 或
import "ui-template/theme/src/button.scss";
```

3. 完整组件列表请参考[组件文档](./introduction.md)
