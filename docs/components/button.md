# Button 按钮

常用的操作按钮。

## 基础用法

::: 示例

```vue
<template>
  <UiButton type="primary">主要按钮</UiButton>
  <UiButton type="success">成功按钮</UiButton>
  <UiButton type="warning">警告按钮</UiButton>
  <UiButton type="danger">危险按钮</UiButton>
</template>
```

:::

## 禁用状态

::: 示例

```vue
<template>
  <UiButton disabled>默认禁用</UiButton>
  <UiButton type="primary" disabled>主要禁用</UiButton>
</template>
```

:::

## 加载状态

::: 示例

```vue
<template>
  <UiButton loading>加载中</UiButton>
  <UiButton type="primary" :loading="isLoading" @click="startLoading">
    点击加载
  </UiButton>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(false);

const startLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```

:::

## 尺寸配置

通过 ConfigProvider 可配置全局尺寸：

::: 示例

```vue
<template>
  <UiConfig-provider size="large">
    <UiButton type="primary">大尺寸</UiButton>
  </UiConfig-provider>

  <UiButton type="primary">默认尺寸</UiButton>

  <UiConfig-provider size="small">
    <UiButton type="primary">小尺寸</UiButton>
  </UiConfig-provider>
</template>
```

:::

## API

### Props

| 参数     | 说明           | 类型                                            | 默认值 |
| -------- | -------------- | ----------------------------------------------- | ------ |
| type     | 按钮类型       | 'primary' \| 'success' \| 'warning' \| 'danger' | —      |
| disabled | 是否禁用状态   | boolean                                         | false  |
| loading  | 是否加载中状态 | boolean                                         | false  |

### Events

| 事件名 | 说明       | 参数                        |
| ------ | ---------- | --------------------------- |
| click  | 点击时触发 | (event: MouseEvent) => void |
