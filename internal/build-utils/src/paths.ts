/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 16:26:49
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-07 16:38:00
 * @FilePath: \ui-template\internal\build-utils\src\paths.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme')
// export const hookRoot = resolve(pkgRoot, 'hooks')
// export const localeRoot = resolve(pkgRoot, 'locale')
// export const directiveRoot = resolve(pkgRoot, 'directives')
export const epRoot = resolve(pkgRoot, 'ui-template')
export const utilRoot = resolve(pkgRoot, 'utils')
export const buildRoot = resolve(projRoot, 'internal', 'build')

// Docs
export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)
export const vpRoot = resolve(docRoot, '.vitepress')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/ui-template` */
export const epOutput = resolve(buildOutput, 'ui-template')

export const projPackage = resolve(projRoot, 'package.json')
export const compPackage = resolve(compRoot, 'package.json')
export const themePackage = resolve(themeRoot, 'package.json')
// export const hookPackage = resolve(hookRoot, 'package.json')
// export const localePackage = resolve(localeRoot, 'package.json')
// export const directivePackage = resolve(directiveRoot, 'package.json')
export const epPackage = resolve(epRoot, 'package.json')
export const utilPackage = resolve(utilRoot, 'package.json')
export const docPackage = resolve(docRoot, 'package.json')
