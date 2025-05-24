import svgSprite from 'gulp-svg-sprite'
import svgmin from 'gulp-svgmin'
import cheerio from 'gulp-cheerio'
import replace from 'gulp-replace'
import fs from 'fs'
import path from 'path'

export const svgSprites = () => {
  const svgDir = path.dirname(app.paths.srcSvg)
  if (!fs.existsSync(svgDir)) {
    console.log(`Directory ${svgDir} not found. Skipping svgSprites task.`)
    return Promise.resolve()
  }

  return app.gulp
    .src(app.paths.srcSvg, { encoding: false, allowEmpty: true })
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      }),
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill')
          $('[stroke]').removeAttr('stroke')
          $('[style]').removeAttr('style')
        },
        parserOptions: {
          xmlMode: true,
        },
      }),
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      }),
    )
    .pipe(app.gulp.dest(app.paths.buildImgFolder))
}
