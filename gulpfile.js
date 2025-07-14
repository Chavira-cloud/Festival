import {src, dest, watch, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)


export function js (done){
    src('src/js/app.js')
    .pipe(dest('dist/js'))
    done()
}

export  function css(done){ // con export se hace detectable la funcion en el gulp
    src('src/scss/app.scss',{sourcemaps: true})
    .pipe( sass().on('error', sass.logError))// pipe() SIRVE PARA COMPILAR 
    .pipe( dest('dist/css', {sourcemaps: true}))
    done() // Finaliza la tarea cuando llamamos el script (npm run nombre_del script)
}

export function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev)