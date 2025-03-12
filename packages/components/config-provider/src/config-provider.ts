import type { ExtractPropTypes } from '@vue/runtime-core'
// import type { ConfigProviderContext } from './instance'

export const configProviderProps = {
  // 命名空间前缀
  namespace: {
    type: String,
    default: 'ui'
  },
  // 全局组件大小
  size: {
    type: String,
    values: ['large', 'default', 'small'],
    default: 'default'
  },
  // 语言
  locale: {
    type: String,
    default: 'zh-CN'
  },
  // 全局初始化 zIndex
  zIndex: {
    type: Number,
    default: 2000
  },
  // 全局组件间距
  space: {
    type: Number,
    default: 8
  },
} as const

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

export const configProviderContextKey = Symbol('configProviderContextKey')