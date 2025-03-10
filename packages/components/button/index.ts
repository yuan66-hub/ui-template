/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-03 12:19:24
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-10 15:53:14
 * @FilePath: \ui-template\packages\components\button\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Button 按钮组件
 */
import Button from './src/Button.vue';
import { withInstall } from '@ui-template/utils'
import type { SFCWithInstall } from '@ui-template/utils'

// 注册组件
export const UiButton: SFCWithInstall<typeof Button> = withInstall(Button);

export * from './src/instance';
export default UiButton;