/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 16:54:46
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-07 18:27:52
 * @FilePath: \ui-template\internal\build\src\utils\gulp.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { buildRoot } from '@ui-template/build-utils'
import { run } from './process'

import type { TaskFunction } from 'gulp'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

export const runTask = (name: string) =>
  withTaskName(`shellTask:${name}`, () =>
    run(`pnpm run start ${name}`, buildRoot)
  )
