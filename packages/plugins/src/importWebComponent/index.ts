/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-12 16:39:30
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-12 17:00:42
 * @FilePath: \ui-template\packages\plugins\src\importWebComponent\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Plugin } from 'vite';
// import { compileTemplate } from '@vue/compiler-sfc';

export interface ImportWebComponentOptions {
  /**
   * 是否启用Shadow DOM
   * @default true
   */
  shadow?: boolean;
  /**
   * 自定义组件名称前缀
   * @default 'ui'
   */
  prefix?: string;
}

export function importWebComponent(options: ImportWebComponentOptions = {}): Plugin<any> & { name: string } {
  const {
    shadow = true,
    prefix = 'ui'
  } = options;

  return {
    name: 'vite-plugin-ui-template-import-web-components',
    enforce: 'pre',
    async transform(code: string, id: string) {
      // 只处理.vue文件
      if (!id.endsWith('.vue')) return;

      // 匹配importWebComponent()语法
      const importRegex = /importWebComponent\(['"](.*?)['"]\)/g;
      let match;
      let hasMatches = false;

      // 收集所有需要转换的组件
      const components: { name: string; stylePath: string }[] = [];
      while ((match = importRegex.exec(code)) !== null) {
        hasMatches = true;
        const componentName = match[1];
        if (!componentName) continue;

        components.push({
          name: componentName,
          stylePath: `ui-template/theme/ui-${componentName}.css`
        });
      }

      if (!hasMatches) return;

      // 生成转换后的代码
      let transformedCode = code;
      for (const component of components) {
        const { name, stylePath } = component;
        const webComponentCode = `
          import { defineCustomElement } from 'vue';
          import ${name} from 'ui-template/es/components/${name}/index';
          import styles from '${stylePath}?inline';

          const ${name}Element = defineCustomElement({
            ...${name},
            styles: [styles],
            shadow: ${shadow},
          });

          customElements.define('${prefix}-${name.toLowerCase()}', ${name}Element);
        `;

        // 替换原始的importWebComponent调用
        transformedCode = transformedCode.replace(
          `importWebComponent('${name}')`,
          webComponentCode
        );
      }

      return {
        code: transformedCode,
        map: null
      };
    }
  };
}