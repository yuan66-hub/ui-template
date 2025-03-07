/**
 * 类型定义
 */

// 尺寸类型
export type Size = 'small' | 'default' | 'large';

// 主题类型
export type Theme = 'primary' | 'success' | 'warning' | 'danger' | 'info';

// 组件通用属性
export interface ComponentCommonProps {
  // 自定义类名
  class?: string | Record<string, boolean>;
  // 自定义样式
  style?: string | Record<string, string>;
  // 组件尺寸
  size?: Size;
  // 是否禁用
  disabled?: boolean;
}