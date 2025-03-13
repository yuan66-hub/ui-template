# importWebComponent 插件

## 介绍

importWebComponent 是一个 Vite 插件，用于将 Vue 组件转换为 Web Components。它能够帮助你轻松地将 UI Template 组件库中的组件转换为标准的 Web Components，使其可以在任何支持 Web Components 的环境中使用。

## 特性

- 自动转换 Vue 组件为 Web Components
- 支持 Shadow DOM 配置
- 自定义组件名称前缀
- 自动导入组件样式

## 安装

```bash
pnpm add ui-template -D
```

## 配置

在 Vite 配置文件中添加插件：

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { importWebComponent } from "ui-template/plugins";

export default defineConfig({
  plugins: [
    // web component 编译时处理
    vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith("ui-") },
      },
    }),
    //...其他插件
    importWebComponent({
      // 配置选项
      shadow: true, // 是否启用 Shadow DOM
      prefix: "ui", // 自定义组件名称前缀
    }),
  ],
});
```

### 配置选项

| 参数   | 类型    | 默认值 | 说明                |
| ------ | ------- | ------ | ------------------- |
| shadow | boolean | true   | 是否启用 Shadow DOM |
| prefix | string  | 'ui'   | 自定义组件名称前缀  |

## 使用方法

1. 在组件中导入并使用：

```vue
<template>
  <div>
    <!-- 使用转换后的 Web Components -->
    <ui-button>按钮</ui-button>
  </div>
</template>

<script setup lang="ts">
// 导入并转换组件
importWebComponent("button");
</script>
```

2. 组件会被自动转换为 Web Components，可以在任何地方使用：

```html
<!-- 在普通 HTML 中使用 -->
<ui-button>按钮</ui-button>
```

## 注意事项

1. 确保浏览器支持 Web Components
2. 组件名称会自动转换为小写，并添加配置的前缀
3. 样式会自动从 ui-template 的主题包中导入
4. 如果使用 Shadow DOM，组件的样式将被隔离
