
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { UiConfigProvider } from '../index'

describe('ConfigProvider', () => {
  it('should render slot correctly', () => {
    const wrapper = mount(UiConfigProvider, {
      slots: {
        default: '<div class="custom-content">Test Content</div>'
      }
    })
    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Test Content')
  })



  it('should provide locale config correctly', () => {
    const locale = {
      name: 'en',
      button: {
        submit: 'Submit',
        cancel: 'Cancel'
      }
    }
    const wrapper = mount(UiConfigProvider, {
      props: {
        locale
      },
      slots: {
        default: '<div>Test Content</div>'
      }
    })
    expect(wrapper.props('locale')).toEqual(locale)
  })
})