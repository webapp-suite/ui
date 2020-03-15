const gulp = require('gulp')
const replace = require('gulp-replace')

gulp.task('trim:lib', done => {
  gulp
    .src('../lib/**/*.js')
    .pipe(replace(/require\(['"](\.\/)*(\.\.\/)*(\w+\/)*\w+\.less['"]\);/g, ''))
    .pipe(replace(/prefixCls/g, JSON.stringify('waui')))
    .pipe(gulp.dest('../lib'))
  done()
})

gulp.task('trim:es', done => {
  gulp
    .src('../es/**/*.js')
    .pipe(replace(/import\s?['"](\.\/)*(\.\.\/)*(\w+\/)*\w+\.less['"];/g, ''))
    .pipe(replace(/prefixCls/g, JSON.stringify('waui')))
    .pipe(gulp.dest('../es'))
  done()
})
