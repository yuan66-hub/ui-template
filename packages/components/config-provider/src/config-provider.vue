<!--
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-12 17:22:47
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-12 18:49:30
 * @FilePath: \ui-template\packages\components\config-provider\src\config-provider.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <slot></slot>
</template>

<script lang="ts" setup name="UiConfigProvider">
// @ts-ignore
import { provide, toRefs, watch,ref } from 'vue'
import { configProviderProps, configProviderContextKey } from './config-provider'

const props = defineProps(configProviderProps)

// 创建响应式配置对象
const config = ref({
  ns: props.namespace,
  locale: props.locale,
  size: props.size,
  zIndex: props.zIndex,
  space: props.space,
//   button: props.button,
//   message: props.message,
//   notification: props.notification
})

// 监听props变化，更新配置
const propsRefs = toRefs(props)
Object.entries(propsRefs).forEach(([key, ref]) => {
  watch(ref, (newVal:any) => {
    config.value[key] = newVal
  })
})

// 提供配置上下文
provide(configProviderContextKey, config)
</script>