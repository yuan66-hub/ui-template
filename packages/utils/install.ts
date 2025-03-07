/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-06 15:22:28
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-06 17:26:46
 * @FilePath: \ui-template\packages\utils\install.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Plugin , App } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T extends Record<string, any>>(
  main: T
) => {
  ;(main as SFCWithInstall<T>).install = (app:App): void => {
    for (const comp of [main]) {
      app.component(comp.name, comp)
    }
  }
  return main as SFCWithInstall<T>
}
