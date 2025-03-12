/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-12 18:20:27
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-12 18:36:50
 * @FilePath: \ui-template\packages\components\config-provider\src\hooks\useGlobalConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// @ts-ignore
import { computed,inject,ref,getCurrentInstance } from 'vue'
import { configProviderContextKey } from '../config-provider'
const globalConfig = ref<any>()

export const useGlobalConfig = (key:string) => {
  const config = getCurrentInstance()? inject(configProviderContextKey, globalConfig):globalConfig
  if (key) {
    return computed(() => config.value?.[key] ?? undefined)
  } else {
    return config
  }
}