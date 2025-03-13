/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 12:15:41
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-13 10:55:03
 * @FilePath: \ui-template\packages\main\component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UiButton } from '@ui-template/components/button'
import { UiConfigProvider } from '@ui-template/components/config-provider'
import type { Plugin } from '@vue/runtime-core'

export default [UiButton,UiConfigProvider] as Plugin[]