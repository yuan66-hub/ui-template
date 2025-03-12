<!--
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-03 12:19:58
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-12 18:51:43
 * @FilePath: \ui-template\packages\components\button\src\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <button
    :class="[
      'ui-button',
      `ui-button--${type}`,
      `ui-button--${_size}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="ui-button__loading-icon">
      <!-- 加载图标 -->
      <svg viewBox="0 0 1024 1024" class="loading-icon" width="1em" height="1em">
        <path d="M512 64c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.6-448-448-448zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" fill="currentColor" fill-opacity="0.3"></path>
        <path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372V140z" fill="currentColor"></path>
      </svg>
    </span>
    <span v-if="icon && !loading" class="ui-button__icon">
      <!-- 图标插槽 -->
      <slot name="icon"></slot>
    </span>
    <span class="ui-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup name="UiButton">
// @ts-ignore
import {  defineEmits, defineProps,computed,toRefs } from 'vue' 
// 定义按钮属性
import { buttonProps,buttonEmits } from './props'
import { useGlobalConfig } from '@ui-template/components/config-provider/index'
const size =  useGlobalConfig('size')

const props = defineProps(buttonProps) 
const {
  type,
  plain,
  round,
  circle,
  disabled,
  loading,
  icon
} = toRefs(props)
const emits = defineEmits(buttonEmits)


const _size = computed(() => {
  return size || props.size
})
 // 处理点击事件
 const handleClick = (event: MouseEvent) => {
      if (props.disabled || props.loading) return;
      emits('click', event);
};
</script>

