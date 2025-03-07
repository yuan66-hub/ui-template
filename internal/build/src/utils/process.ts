/*
 * @Author: 'yuanjianming' '1743394015@qq.com'
 * @Date: 2025-02-20 16:36:55
 * @LastEditors: 'yuanjianming' '1743394015@qq.com'
 * @LastEditTime: 2025-02-20 18:17:00
 * @FilePath: \element-plus\internal\build\src\utils\process.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE-tem
 */
import { spawn } from 'child_process'
import chalk from 'chalk'
import consola from 'consola'
import { projRoot } from '@ui-template/build-utils'
// 执行命令
export const run = async (command: string, cwd: string = projRoot) =>
  new Promise<void>((resolve, reject) => {
    const [cmd, ...args] = command.split(' ')
    consola.info(`run: ${chalk.green(`${cmd} ${args.join(' ')}`)}`)
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })

    const onProcessExit = () => app.kill('SIGHUP')

    app.on('close', (code) => {
      process.removeListener('exit', onProcessExit)

      if (code === 0) resolve()
      else
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        )
    })
    process.on('exit', onProcessExit)
  })
