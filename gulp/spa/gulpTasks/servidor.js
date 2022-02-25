const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, // Abrir o browser
            livereload: true
        }))
}

function monitorarArquivos(callback) {
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.scss', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appImg')())

    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}