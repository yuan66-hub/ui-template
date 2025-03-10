/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-02-20 16:36:55
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-10 16:44:45
 * @FilePath: \element-plus\internal\build\gulpfile.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
// @ts-ignore
import { parallel, series } from 'gulp'
import {
  buildOutput,
  epOutput,
  epPackage,
  projRoot,
} from '@ui-template/build-utils'
import { buildConfig, run, runTask, withTaskName } from './src'
import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'typings', 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
  ])
// 复制类型定义文件
export const copyTypesDefinitions: TaskFunction = (done:any) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { overwrite: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}
// 复制完整的样式文件
export const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'theme/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
}

export default series(
  // 清理打包文件 rimraf dist
  withTaskName('clean', () => run('pnpm run clean')),
  // 创建输出目录 ui-template
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),

  parallel(
    // 构建模块 => gulp --require @esbuild-kit/cjs-loader -f gulpfile.ts "buildModules"
    runTask('buildModules'),
    // 构建完整的包 =>  gulp --require @esbuild-kit/cjs-loader -f gulpfile.ts "buildFullBundle"
    runTask('buildFullBundle'),
    // 生成类型定义文件 => gulp --require @esbuild-kit/cjs-loader -f gulpfile.ts "generateTypesDefinitions"
    runTask('generateTypesDefinitions'),
    // 构建辅助工具 => `gulp --require @esbuild-kit/cjs-loader -f gulpfile.ts "buildHelper"`
    runTask('buildHelper'),
    series(
      // 构建主题样式包括一些组件样式 => gulp --require @esbuild-kit/cjs-loader
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme build')
      ),
      // 复制完整样式
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions,copyFiles)
)
// 导入所有的gulp任务
export * from './src'
