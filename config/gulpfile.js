const gulp = require('gulp')
const replace = require('gulp-replace')

gulp.task('trim:lib', done => {
  gulp
    .src('../lib/components/**/*.js')
    .pipe(replace(/require\(['"](\.\/)*(\.\.\/)*(\w+\/)*\w+\.less['"]\);/, ''))
    .pipe(replace(/prefixCls/g, JSON.stringify('earthui')))
    .pipe(gulp.dest('../lib'))
  done()
})

gulp.task('trim:es', done => {
  gulp
    .src('../es/components/**/*.js')
    .pipe(replace(/import\s?['"](\.\/)*(\.\.\/)*(\w+\/)*\w+\.less['"];/, ''))
    .pipe(replace(/prefixCls/g, JSON.stringify('earthui')))
    .pipe(gulp.dest('../es'))
  done()
})
