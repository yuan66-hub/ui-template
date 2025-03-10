/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 16:54:46
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-10 12:01:48
 * @FilePath: \ui-template\internal\build\src\tasks\types-definitions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import { readFile, writeFile } from 'fs/promises'
import glob from 'fast-glob'
import { copy, remove } from 'fs-extra'
import { buildOutput } from '@ui-template/build-utils'
import { pathRewriter, run } from '../utils'

export const generateTypesDefinitions = async () => {
  await run(
    'npx vue-tsc -p tsconfig.web.json --declaration --emitDeclarationOnly --declarationDir dist/types'
  )
  const typesDir = path.join(buildOutput, 'types', 'packages')
  const filePaths = await glob(`**/*.d.ts`, {
    cwd: typesDir,
    absolute: true,
  })
  const rewriteTasks = filePaths.map(async (filePath) => {
    const content = await readFile(filePath, 'utf8')
    await writeFile(filePath, pathRewriter('esm')(content), 'utf8')
  })
  await Promise.all(rewriteTasks)
  const sourceDir = path.join(typesDir, 'ui-template')
  await copy(sourceDir, typesDir)
  await remove(sourceDir)
}
