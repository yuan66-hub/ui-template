import { PKG_NAME, PKG_PREFIX } from '@ui-template/build-constants'

import type { Plugin } from 'rollup'

export function ElementPlusAlias(): Plugin {
  const themeChalk = 'theme'
  // @element-plus/theme -> element-plus/theme
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}` as const
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const

  return {
    name: 'element-plus-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
