import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../src/Button.vue'

describe('Button 组件测试', () => {
  // 基础渲染测试
  it('基础渲染', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '按钮'
      }
    })
    expect(wrapper.text()).toBe('按钮')
    expect(wrapper.classes()).toContain('ui-button')
  })

  // 按钮类型测试
  it('不同类型按钮', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info']
    types.forEach(type => {
      const wrapper = mount(Button, { props: { type } })
      expect(wrapper.classes()).toContain(`ui-button--${type}`)
    })
  })

  // 尺寸测试
  it('不同尺寸', () => {
    const sizes = ['large', 'default', 'small']
    sizes.forEach(size => {
      const wrapper = mount(Button, { props: { size } })
      expect(wrapper.classes()).toContain(`ui-button--${size}`)
    })
  })

  // 朴素按钮测试
  it('朴素按钮', () => {
    const wrapper = mount(Button, {
      props: { plain: true }
    })
    expect(wrapper.classes()).toContain('is-plain')
  })

  // 圆角按钮测试
  it('圆角按钮', () => {
    const wrapper = mount(Button, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('is-round')
  })

  // 圆形按钮测试
  it('圆形按钮', () => {
    const wrapper = mount(Button, {
      props: { circle: true }
    })
    expect(wrapper.classes()).toContain('is-circle')
  })

  // 禁用状态测试
  it('禁用状态', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  // 加载状态测试
  it('加载状态', async () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    })
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.ui-button__loading-icon').exists()).toBe(true)
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  // 图标按钮测试
  it('图标按钮', () => {
    const wrapper = mount(Button, {
      props: { icon: true },
      slots: {
        icon: '<span class="custom-icon">图标</span>'
      }
    })
    expect(wrapper.find('.ui-button__icon').exists()).toBe(true)
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
  })

  // 点击事件测试
  it('点击事件', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})