import browserSync from 'browser-sync'
import fileInclude from 'gulp-file-include'

export const htmlInclude = () => {
  return app.gulp
    .src([`${app.paths.base.src}/pages/*.html`])
    .pipe(
      fileInclude({
        prefix: '@',
        basepath: '@file',
        maxRecursion: 100,
      }),
    )
    .pipe(app.gulp.dest(app.paths.base.build))
    .pipe(browserSync.stream())
}
