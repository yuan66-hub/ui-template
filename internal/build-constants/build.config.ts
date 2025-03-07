/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-07 16:04:43
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-07 16:11:38
 * @FilePath: \ui-template\internal\build-constants\build.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
