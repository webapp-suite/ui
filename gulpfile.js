const del = require('del')
const gulp = require('gulp')
const replace = require('gulp-replace')
const babel = require('gulp-babel')
const babelrc = require('./.babelrc.js')

const ESM_DIR = './es'
const LIB_DIR = './lib'
const DIST_DIR = './dist'
const TS_SOURCE = [
    './src/components/**/*.tsx',
    './src/components/**/*.ts',
    '!./src/components/**/*.d.ts'
]
const PREFIX_CLS = 'waui'

function clean (done) {
    del.sync([LIB_DIR, ESM_DIR, DIST_DIR], { force: true })
    done()
}

function trimLess () {
    return [ESM_DIR, LIB_DIR].map(DIR => {
        const taskName = `trimLess:${DIR}`
        gulp.task(taskName, () =>
            gulp
                .src(`${DIR}/**/*.js`)
                .pipe(
                    replace(
                        /(require|import)\(?\s?['"](\.\/)*(\.\.\/)*(\w+\/)*\w+\.less['"]\)?;/g,
                        ''
                    )
                )
                .pipe(replace(/prefixCls/g, JSON.stringify(PREFIX_CLS)))
                .pipe(gulp.dest(DIR))
        )
        return taskName
    })
}

function buildLib () {
    return gulp
        .src(TS_SOURCE)
        .pipe(babel(babelrc()))
        .pipe(gulp.dest(LIB_DIR))
}

function buildEsm () {
    return gulp
        .src(TS_SOURCE)
        .pipe(
            babel(
                babelrc(null, {
                    NODE_ENV: 'esm'
                })
            )
        )
        .pipe(gulp.dest(ESM_DIR))
}

exports.build = gulp.series(clean, gulp.parallel(buildLib, buildEsm), ...trimLess())
