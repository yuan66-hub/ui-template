/**
 * Vue相关工具函数
 */
// @ts-ignore
import { onUnmounted,ref, watch, onMounted  } from 'vue';
import type { Ref } from '@vue/runtime-core';
import { on, off } from './dom';

/**
 * 创建可控制的布尔值状态
 * @param initialValue 初始值
 * @returns 布尔值状态及其控制方法
 */
export function useToggle(initialValue: boolean = false) {
  const state = ref(initialValue);

  function toggle() {
    state.value = !state.value;
  }

  function setTrue() {
    state.value = true;
  }

  function setFalse() {
    state.value = false;
  }

  return {
    state,
    toggle,
    setTrue,
    setFalse
  };
}

/**
 * 创建可控制的计数器
 * @param initialValue 初始值
 * @param options 配置选项
 * @returns 计数器状态及其控制方法
 */
export function useCounter(initialValue: number = 0, options: { min?: number; max?: number } = {}) {
  const count = ref(initialValue);
  const { min, max } = options;

  function inc(delta: number = 1) {
    if (max !== undefined && count.value + delta > max) {
      count.value = max;
    } else {
      count.value += delta;
    }
  }

  function dec(delta: number = 1) {
    if (min !== undefined && count.value - delta < min) {
      count.value = min;
    } else {
      count.value -= delta;
    }
  }

  function set(value: number) {
    if (min !== undefined && value < min) {
      count.value = min;
    } else if (max !== undefined && value > max) {
      count.value = max;
    } else {
      count.value = value;
    }
  }

  function reset() {
    count.value = initialValue;
  }

  return {
    count,
    inc,
    dec,
    set,
    reset
  };
}

/**
 * 监听点击元素外部
 * @param elementRef 元素引用
 * @param callback 回调函数
 */
export function useClickOutside(elementRef: Ref<HTMLElement | null>, callback: (e: MouseEvent) => void) {
  const handleClick = (e: MouseEvent) => {
    if (elementRef.value && !elementRef.value.contains(e.target as Node)) {
      callback(e);
    }
  };

  onMounted(() => {
    on(document, 'click', handleClick);
  });

  onUnmounted(() => {
    off(document, 'click', handleClick);
  });
}

/**
 * 创建本地存储状态
 * @param key 存储键名
 * @param initialValue 初始值
 * @returns 响应式状态及其控制方法
 */
export function useLocalStorage<T>(key: string, initialValue: T): readonly [Ref<T>, (value: T) => void] {
  // 修复类型错误：不再将函数传递给 ref，而是先获取初始值
  const getInitialValue = (): T => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  };
  
  const state = ref<T>(getInitialValue());

  const setState = (value: T) => {
    state.value = value;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  watch(state, (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, { deep: true });

  return [state as Ref<T>, setState] as const;
}