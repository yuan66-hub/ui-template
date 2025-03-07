/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-02-20 16:36:55
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-02-27 17:35:15
 * @FilePath: \element-plus\internal\build\src\utils\rollup.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { epPackage, getPackageDependencies } from '@ui-template/build-utils'

import type { OutputOptions, RollupBuild } from 'rollup'
// 获取共享依赖
export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage)

  return (id: string) => {
    const packages: string[] = [...peerDependencies]
    if (!options.full) {
      packages.push('@vue', ...dependencies)
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    )
  }
}

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)))
}

export function formatBundleFilename(
  name: string,
  minify: boolean,
  ext: string
) {
  return `${name}${minify ? '.min' : ''}.${ext}`
}
