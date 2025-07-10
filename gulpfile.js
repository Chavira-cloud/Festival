import {src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)


export  function css(done){ // con export se hace detectable la funcion en el gulp
    src('src/scss/app.scss')
    .pipe( sass().on('error',sass.logError))// pipe() SIRVE PARA COMPILAR 
    .pipe( dest('dist/css'))
    done() // Finaliza la tarea cuando llamamos el script (npm run nombre_del script)
}

export function dev(){
    watch('src/scss/**/*.scss', css)
}