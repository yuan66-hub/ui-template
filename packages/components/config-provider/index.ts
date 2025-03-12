/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-12 17:21:52
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-12 18:43:25
 * @FilePath: \ui-template\packages\components\config-provider\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { withInstall } from '@ui-template/utils'
import ConfigProvider from './src/config-provider.vue'

export const UiConfigProvider = withInstall(ConfigProvider)
export default UiConfigProvider

export * from './src/config-provider'
export * from './src/hooks/useGlobalConfig'

export type { ConfigProviderInstance } from './src/instance'