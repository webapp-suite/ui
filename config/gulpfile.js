const gulp = require('gulp')
const replace = require('gulp-replace')

gulp.task('default', function () {
  gulp.src('../lib/**/*.js')
    .pipe(replace(/require\('(\.\/)*(\.\.\/)*(\w+\/)*\w+\.less'\);/, ''))
    .pipe(gulp.dest('../lib'))
})
