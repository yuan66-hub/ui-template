/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-10 14:54:51
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-13 11:24:24
 * @FilePath: \ui-template\play\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import { UiTemplateResolver,importWebComponent } from '@ui-template/plugins'
import path from 'path'
import { pkgRoot, epRoot } from '@ui-template/build-utils'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith('ui-') }
      }
    }),
    Inspect(),
    importWebComponent(),
    Components({
      include:`${__dirname}/**`,
      resolvers: [UiTemplateResolver({
        importStyle: 'css',
        noStylesComponents:['UiConfigProvider']
      })],
      dts:false
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^ui-template$/,
        replacement: path.resolve(__dirname, '../dist/ui-template/dist/index.full.mjs'), // 指向打包后的 ESM 格式文件
      },
      {
        find: /^ui-template\/es$/,
        replacement: path.resolve(__dirname, '../dist/ui-template/es'), // 指向 ES 模块目录
      },
      {
        find: /^ui-template\/lib$/,
        replacement: path.resolve(__dirname, '../dist/ui-template/lib'), // 指向 CommonJS 模块目录
      },
      {
        find: /^ui-template\/(es|lib)\/(.*)$/,
        replacement: path.resolve(__dirname, '../dist/ui-template/$1/$2'), // 指向具体组件的构建产物
      },
      {
        find: /^ui-template\/theme\/(.+)\.css$/,
        replacement: path.resolve(__dirname, `../dist/ui-template/theme/$1.css`), // 动态匹配组件样式文件
      },
      // 添加样式路径别名
      {
        find: /^ui-template\/theme\/(.+)\.css(\?.*)?$/,
        replacement: path.resolve(__dirname, `../dist/ui-template/theme/$1.css$2`), // 动态匹配组件样式文件
      },
      {
        find: /^ui-template\/dist\/index\.css$/,
        replacement: path.resolve(__dirname, '../dist/ui-template/dist/index.css'), // 指向完整CSS文件
      },
      // {
      //   find: /^ui-template(\/(es|lib))?$/,
      //   replacement: path.resolve(epRoot, 'index.ts'),
      // },
      // {
      //   find: /^ui-template\/(es|lib)\/(.*)$/,
      //   replacement: `${pkgRoot}/$2`,
      // },
    ],
  }
})
