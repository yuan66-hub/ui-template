# UiTemplateResolver 插件

## 介绍

UiTemplateResolver 是一个用于自动解析和导入 UI Template 组件的插件。它能够帮助你在项目中实现组件的按需导入和样式的自动引入，提高开发效率和项目性能。

## 特性

- 自动解析组件名称
- 按需导入组件
- 自动引入组件样式（支持 CSS 和 SASS）
- 可配置排除特定组件
- 支持无样式组件配置

## 安装

```bash
pnpm add @ui-template/plugins -D
```

## 配置

在项目的构建配置文件中添加插件：

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { UiTemplateResolver } from "@ui-template/plugins";
import Components from "unplugin-vue-components/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    // 其他插件...
    Components({
      //...
      resolvers: [
        UiTemplateResolver({
          importStyle: "css",
          noStylesComponents: ["UiConfigProvider"],
        }),
      ],
    }),
  ],
});
```

### 配置选项

| 参数               | 类型                         | 默认值  | 说明                                                  |
| ------------------ | ---------------------------- | ------- | ----------------------------------------------------- |
| exclude            | `Array<string \| RegExp>`    | `[]`    | 排除的组件列表，支持字符串和正则表达式                |
| importStyle        | `boolean \| 'css' \| 'sass'` | `'css'` | 组件样式导入方式，设置为 `false` 可以禁用样式自动导入 |
| noStylesComponents | `string[]`                   | `[]`    | 无样式组件列表，这些组件不会自动导入样式文件          |

## 使用方法

1. 在组件中直接使用 UI Template 组件，插件会自动导入所需的组件和样式：

```vue
<template>
  <div>
    <UiButton type="primary">按钮</UiButton>
    <UiInput v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("");
</script>
```

2. 组件名称规则：
   - 组件名称必须以 `Ui` 开头
   - 使用大驼峰命名法（PascalCase）
   - 例如：`UiButton`、`UiInput`、`UiDatePicker` 等

## 工作原理

1. 组件解析：

   - 插件会自动识别以 `Ui` 开头的组件名称
   - 将组件名称转换为对应的包路径（例如：`UiButton` → `@ui-template/components/button`）

2. 样式导入：
   - CSS 模式：自动导入 `ui-template/theme/ui-{component}.css` 文件
   - SASS 模式：自动导入 `ui-template/theme/src/{component}.scss` 文件
   - 可以通过 `noStylesComponents` 配置某些组件不自动导入样式

## 注意事项

1. 确保已正确安装 `@ui-template/plugins` 包
2. 组件名称必须符合规范（以 `Ui` 开头，使用大驼峰命名）
3. 如果使用 TypeScript，确保 `tsconfig.json` 中已配置正确的模块解析选项
4. 样式文件的路径必须与组件库的目录结构保持一致
