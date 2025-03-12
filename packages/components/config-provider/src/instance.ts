/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-12 17:22:21
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-12 17:27:13
 * @FilePath: \ui-template\packages\components\config-provider\src\instance.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ComponentPublicInstance, Ref } from '@vue/runtime-core'
// import type { ConfigProviderProps } from './config-provider'

export interface ConfigProviderContext {
  ns: string
  locale?: string
  size?: string
//   button?: Partial<ButtonProps>
  zIndex?: number
  space?: number
//   message?: Partial<MessageProps>
//   notification?: Partial<NotificationProps>
}

export interface ConfigProviderInstance extends ComponentPublicInstance {
  config: Ref<ConfigProviderContext>
}

// interface ButtonProps {
//   autoInsertSpace?: boolean
// }

// interface MessageProps {
//   max?: number
//   duration?: number
//   zIndex?: number
// }

// interface NotificationProps {
//   duration?: number
//   zIndex?: number
//   position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
// }