/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 16:26:49
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-07 18:35:37
 * @FilePath: \ui-template\internal\build-utils\src\pkg.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import findWorkspacePackages from '@pnpm/find-workspace-packages'
import { projRoot } from './paths'

import type { ProjectManifest } from '@pnpm/types'

export const getWorkspacePackages = () => findWorkspacePackages(projRoot)
export const getWorkspaceNames = async (dir = projRoot) => {
  const pkgs = await findWorkspacePackages(projRoot)
  return pkgs
    .filter((pkg:any) => pkg?.dir.startsWith(dir))
    .map((pkg) => pkg.manifest.name)
    .filter((name): name is string => !!name)
}

export const getPackageManifest = (pkgPath: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(pkgPath) as ProjectManifest
}
// 
export const getPackageDependencies = (
  pkgPath: string
): Record<'dependencies' | 'peerDependencies', string[]> => {
  const manifest = getPackageManifest(pkgPath)
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  }
}

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter((path) => {
    const position = path.startsWith(projRoot) ? projRoot.length : 0
    return !excludes.some((exclude) => path.includes(exclude, position))
  })
}
