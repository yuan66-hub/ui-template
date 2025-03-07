
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
}