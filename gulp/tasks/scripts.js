import browserSync from 'browser-sync'
import webpackStream from 'webpack-stream'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

export const scripts = () => {
  return app.gulp
    .src(app.paths.srcMainJs)
    .pipe(
      plumber(
        notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(
      webpackStream({
        mode: app.isProd ? 'production' : 'development',
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        targets: 'defaults',
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
        devtool: !app.isProd ? 'source-map' : false,
      }),
    )
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err)
      this.emit('end')
    })
    .pipe(app.gulp.dest(app.paths.buildJsFolder))
    .pipe(browserSync.stream())
}
