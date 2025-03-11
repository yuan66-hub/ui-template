/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-10 18:35:19
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-11 18:41:26
 * @FilePath: \ui-template\packages\plugins\UiTemplateResolver\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 修改导入语句
import type {  ComponentResolver } from 'unplugin-vue-components'
// 而不是
// import type { ComponentInfo, ComponentResolver } from 'unplugin-vue-components/types'

export interface UiTemplateResolverOptions {
    exclude?: Array<string | RegExp>;
    /**
   * import style css or sass with components
   *
   * @default 'css'
   */
    importStyle?: boolean | 'css' | 'sass';

    /**
     * a list of component names that have no styles, so resolving their styles file should be prevented
     */
    noStylesComponents?: string[];
}

export function UiTemplateResolver(options: UiTemplateResolverOptions = {}): ComponentResolver {


    return {
        type: 'component',
        resolve: (name: string) => {
            const {
                exclude = [],
                importStyle = 'css',
                noStylesComponents = []
            } = options
            if (exclude.some(item => {
                if (item instanceof RegExp)
                    return item.test(name)
                return item === name
            }))
                return

            const isUiComponent = /^Ui[A-Z]/.test(name)
            if (!isUiComponent)
                return

            const partialName = name.slice(2)
            const componentName = partialName.charAt(0).toLowerCase() + partialName.slice(1)

            const resolveResult = {
                name,
                from: `@ui-template/components/${componentName}`
            }
            if (importStyle && !noStylesComponents.includes(name)) {
                if (importStyle === 'sass') {
                    //sass
                    (resolveResult as { name: string; from: string; sideEffects:string }).sideEffects = `ui-template/theme/src/${componentName}.scss`;
                } else {
                    // css 
                    (resolveResult as { name: string; from: string; sideEffects:string }).sideEffects = `ui-template/theme/ui-${componentName}.css`;
                }
            }

            return resolveResult
        }
    }
}