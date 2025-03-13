# useLocale 国际化语言钩子

## 组件功能

提供组件级别的国际化语言支持，可以获取当前语言环境，并提供语言切换能力。通常配合 ConfigProvider 组件使用来实现全局的国际化管理。

## 基本用法

```vue
<script setup lang="ts">
import { useLocale } from "@ui-template/hooks";

// 获取国际化相关的方法
const { t, lang } = useLocale();

// 使用 t 方法进行文本翻译
const message = t("message.hello");

// 获取当前语言
console.log(lang.value); // 'zh-CN'
</script>
```

## 类型定义

```ts
type TranslatorOption = Record<string, string | number>;
type Translator = (path: string, option?: TranslatorOption) => string;

interface LocaleContext {
  // 当前语言环境配置
  locale: Ref<Language>;
  // 当前语言标识
  lang: Ref<string>;
  // 翻译函数
  t: Translator;
}

// 钩子函数签名
function useLocale(localeOverrides?: Ref<Language>): LocaleContext;
```

## 进阶用法

### 配合 ConfigProvider 使用

```vue
<template>
  <UiConfigProvider locale="en-US">
    <YourComponent />
  </UiConfigProvider>
</template>

<script setup lang="ts">
import { useLocale } from "@ui-template/hooks";

// 自动继承 ConfigProvider 的语言配置
const { t } = useLocale();
</script>
```

### 带参数的翻译

```vue
<script setup lang="ts">
import { useLocale } from "@ui-template/hooks";

const { t } = useLocale();

// 使用参数进行翻译
const welcome = t("message.welcome", { name: "John" });
// 假设 message.welcome 的值为 "Welcome, {name}!"
// 输出: "Welcome, John!"
</script>
```

### 手动切换语言

```vue
<template>
  <div>
    <span>{{ t("message.currentLang") }}: {{ lang }}</span>
    <button @click="switchLanguage('en-US')">English</button>
    <button @click="switchLanguage('zh-CN')">中文</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLocale } from "@ui-template/hooks";
import type { Language } from "@ui-template/locale";

// 创建响应式的语言配置
const currentLocale = ref<Language>();
const { t, lang } = useLocale(currentLocale);

// 切换语言的方法
const switchLanguage = (newLang: string) => {
  currentLocale.value = newLang === "en-US" ? English : Chinese;
};
</script>
```

## API

### 返回值

| 参数   | 说明         | 类型                                                |
| ------ | ------------ | --------------------------------------------------- |
| locale | 当前语言配置 | Ref\<Language\>                                     |
| lang   | 当前语言标识 | Ref\<string\>                                       |
| t      | 文本翻译方法 | (path: string, option?: TranslatorOption) => string |

### 参数

| 参数            | 说明                 | 类型            | 默认值 |
| --------------- | -------------------- | --------------- | ------ |
| localeOverrides | 可选的语言配置覆盖值 | Ref\<Language\> | -      |
