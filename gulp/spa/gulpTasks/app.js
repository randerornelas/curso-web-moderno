const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const { pipe } = require('stdout-stream')

function appHtml() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('build'))
}

function appCss() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().once('error', sass.logError))
        .pipe(uglifycss({
            'uglyComments': true
        }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJs() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appImg() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHtml', appHtml)
gulp.task('appImg', appImg)
gulp.task('appCss', appCss)
gulp.task('appJs', appJs)

module.exports = {
    appHtml,
    appCss,
    appJs,
    appImg
}