/**
 * DOM相关工具函数
 */

/**
 * 判断元素是否为可见状态
 * @param element DOM元素
 * @returns 是否可见
 */
export function isVisible(element: HTMLElement): boolean {
  if (!element) return false;
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && element.offsetWidth > 0 && element.offsetHeight > 0;
}

/**
 * 获取元素相对于视口的位置
 * @param element DOM元素
 * @returns 元素位置信息
 */
export function getElementPosition(element: HTMLElement): { top: number; left: number; width: number; height: number } {
  if (!element) return { top: 0, left: 0, width: 0, height: 0 };
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height
  };
}

/**
 * 添加事件监听器
 * @param element DOM元素
 * @param event 事件名称
 * @param handler 事件处理函数
 * @param options 事件选项
 */
export function on<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window | Document,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void {
  element.addEventListener(event, handler as EventListener, options);
}

/**
 * 移除事件监听器
 * @param element DOM元素
 * @param event 事件名称
 * @param handler 事件处理函数
 * @param options 事件选项
 */
export function off<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window | Document,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options?: boolean | EventListenerOptions
): void {
  element.removeEventListener(event, handler as EventListener, options);
}

/**
 * 判断元素是否包含指定类名
 * @param element DOM元素
 * @param className 类名
 * @returns 是否包含类名
 */
export function hasClass(element: HTMLElement, className: string): boolean {
  if (!element || !className) return false;
  return element.classList.contains(className);
}

/**
 * 为元素添加类名
 * @param element DOM元素
 * @param className 类名
 */
export function addClass(element: HTMLElement, className: string): void {
  if (!element || !className) return;
  element.classList.add(className);
}

/**
 * 移除元素的类名
 * @param element DOM元素
 * @param className 类名
 */
export function removeClass(element: HTMLElement, className: string): void {
  if (!element || !className) return;
  element.classList.remove(className);
}