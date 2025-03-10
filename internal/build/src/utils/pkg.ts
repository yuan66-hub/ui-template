/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 16:54:46
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-10 11:10:14
 * @FilePath: \ui-template\internal\build\src\utils\pkg.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PKG_NAME, PKG_PREFIX } from '@ui-template/build-constants'
import { buildConfig } from '../build-info'

import type { Module } from '../build-info'

/** used for type generator */
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replaceAll(`${PKG_PREFIX}/theme`, `${PKG_NAME}/theme`)
    id = id.replaceAll(`${PKG_PREFIX}/`, `${config.bundle.path}/`)
    return id
  }
}
