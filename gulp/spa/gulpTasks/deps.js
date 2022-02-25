const uglifycss = require('gulp-uglifycss')
const gulp = require('gulp')
const concat = require('gulp-concat')

function depsCss(callback) {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({
            'uglyComments': false
        }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts(callback) {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCss,
    depsFonts
}