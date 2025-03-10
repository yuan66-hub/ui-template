/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 12:00:57
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-10 10:43:24
 * @FilePath: \ui-template\packages\main\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE'
 */
import installer from './defaults'
export * from '@ui-template/components'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
