/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-10 14:54:51
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-10 18:18:55
 * @FilePath: \ui-template\play\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect' 
import path from 'path'
import { pkgRoot, epRoot } from '@ui-template/build-utils'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
    Components({
      include:`${__dirname}/**`,
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
        version: '2.0.0-dev.1',
      })],
      dts:false
    }),
  ],
  resolve:{
    alias: [
      {
        find: /^ui-template(\/(es|lib))?$/,
        replacement: path.resolve(epRoot, 'index.ts'),
      },
      {
        find: /^ui-template\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
    ],
  }
})
