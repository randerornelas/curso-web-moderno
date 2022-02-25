const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify') // converte o código para um arquivo minificado
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // Os comentários não serão enviados na versão final
            presets: ["env"] // O env vai pegar a versão mais moderna do javascript
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    // return callback()
}

exports.default = series(transformacaoJS)