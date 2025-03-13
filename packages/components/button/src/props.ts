/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-13 10:18:47
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-13 11:14:21
 * @FilePath: \ui-template\packages\components\button\src\props.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export const buttonEmits  = ['click']

export const buttonProps = {
  type: {
    type: String,
    default: 'primary',
    validator: (val: string) => {
      return ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
    }
  },
  size: {
    type: String,
    default: 'default',
    validator: (val: string) => {
      return ['large', 'default', 'small'].includes(val)
    }
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  }
} as const