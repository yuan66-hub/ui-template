/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 12:27:44
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-07 15:35:29
 * @FilePath: \ui-template\packages\main\make-install.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App, Plugin } from 'vue'

const INSTALLED_KEY  = Symbol('__INSTALLED_KEY__')
const version = '1.0.0'
// 全局配置依赖注入
export const makeInstaller = (components: Plugin[] = []) => {
    const install = (app: App & { [INSTALLED_KEY]:boolean }) => {
      if (app[INSTALLED_KEY]) return
  
      app[INSTALLED_KEY] = true
      components.forEach((c) => app.use(c))
    }
  
    return {
      version,
      install,
    }
  }
  