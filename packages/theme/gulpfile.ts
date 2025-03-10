import path from 'path'
import { Transform } from 'stream'
import chalk from 'chalk'
// @ts-ignore
import { type TaskFunction, dest, parallel, series, src } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import consola from 'consola'
import postcss from 'postcss'
import cssnano from 'cssnano'
import type Vinly from 'vinyl'
import { epOutput } from '@ui-template/build-utils'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(epOutput, 'theme')

/**
 * using `postcss` and `cssnano` to compress CSS
 * @returns
 */
// 压缩css文件
function compressWithCssnano() {
  const processor = postcss([
    cssnano({
      preset: [
        'default',
        {
          // avoid color transform
          colormin: false,
          // avoid font transform
          minifyFontValues: false,
        },
      ],
    }),
  ])
  return new Transform({
    objectMode: true,
    transform(chunk, _encoding, callback) {
      const file = chunk as Vinly
      if (file.isNull()) {
        callback(null, file)
        return
      }
      if (file.isStream()) {
        callback(new Error('Streaming not supported'))
        return
      }
      const cssString = file.contents!.toString()
      processor.process(cssString, { from: file.path }).then((result) => {
        const name = path.basename(file.path)
        file.contents = Buffer.from(result.css)
        consola.success(
          `${chalk.cyan(name)}: ${chalk.yellow(
            cssString.length / 1000
          )} KB -> ${chalk.green(result.css.length / 1000)} KB`
        )
        callback(null, file)
      })
    },
  })
}

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
// 编辑scss文件
function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  const noElPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(compressWithCssnano())
    .pipe(
      rename((path) => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `ui-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}


/**
 * 复制文件到指定位置
 */
export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

/**
 * copy source file to packages
 */
// 复制源码到打包目录
export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

// 创建gulp任务
export const build: TaskFunction = parallel(
  copyThemeChalkSource,
  series(buildThemeChalk, copyThemeChalkBundle)
)

export default build
