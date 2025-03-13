/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-03-13 17:05:32
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-03-13 17:08:22
 * @FilePath: \ui-template\vitest.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom',
        globals: true,
        coverage: {
            reporter: ['text', 'json-summary', 'json'],
            exclude: [
                'play/**',
                'packages/locale/lang/**',
                'packages/components/*/style/**',
            ],
        },
    }
})