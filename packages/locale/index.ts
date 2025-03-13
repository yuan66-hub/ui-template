/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-13 11:56:07
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-13 12:03:54
 * @FilePath: \ui-template\packages\locale\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


export { default as zhCn } from './lang/zh-cn'
export { default as en } from './lang/en'


export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  ui: TranslatePair
}
