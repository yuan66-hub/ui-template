# ConfigProvider 全局配置

## 组件功能

提供全局配置能力，可统一管理组件命名空间、尺寸、国际化语言、基础间距等全局样式配置。

## 基本用法

```vue
<template>
  <UiConfigProvider
    namespace="ui"
    size="default"
    locale="zh-CN"
    :space="8"
    :z-index="2000"
  >
    <slot />
  </UiConfigProvider>
</template>
```

## 配置示例

### 命名空间配置

```vue
<UiConfigProvider namespace="custom">
  <UiButton>按钮类名前缀变为 custom-button</UiButton>
</UiConfigProvider>
```

### 全局尺寸

```vue
<UiConfigProvider size="large">
  <UiButton>大号按钮</UiButton>
  <UiInput placeholder="大号输入框" />
</UiConfigProvider>
```

### 国际化支持

```vue
<UiConfigProvider locale="en-US">
  <UiDatePicker />
</UiConfigProvider>
```

## API

| 参数      | 说明                | 类型                            | 默认值    |
| --------- | ------------------- | ------------------------------- | --------- |
| namespace | 组件类名前缀        | string                          | 'ui'      |
| size      | 组件尺寸            | 'large' \| 'default' \| 'small' | 'default' |
| locale    | 国际化语言          | string                          | 'zh-CN'   |
| z-index   | 全局 z-index 基础值 | number                          | 2000      |
| space     | 组件间距基础值      | number                          | 8         |
