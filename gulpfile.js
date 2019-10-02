const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

function styles(){
    return(
        gulp.src("css/*.scss", "css/*.css")
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer(),cssnano()]))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("css"))
    );
}

function js() {
    return(
        gulp.src(["js/*.js","!js/*min.js"])
            .pipe(terser())
            .pipe(rename({
                suffix:".min"
            }))
            .pipe(gulp.dest("js"))
    );
}

function modalsstyles() {

    return(
        gulp.src("modals/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer(),cssnano()]))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("modals"))
    );

}

function modalsjs() {

    return(
        gulp.src(["modals/*.js","!js/*min.js"])
            .pipe(terser())
            .pipe(rename({
                suffix:".min"
            }))
            .pipe(gulp.dest("modals"))
    );

}

function watch(){
    gulp.watch("css/*.scss", styles);
    gulp.watch(["js/*.js","!js/*min.js"], js);
    gulp.watch("modals/*.scss", modalsstyles);
    gulp.watch(["modals/*.js","!modals/*min.js"], modalsjs);
}

const build = gulp.parallel(styles, js, modalsstyles, modalsjs);
//const build = gulp.series(styles,js); runs styles->js - gulp.parallel can be called in .series!

exports.styles = styles;
exports.js = js;
exports.modalsstyles = modalsstyles;
exports.modalsjs = modalsjs;
exports.watch = watch;
exports.build = build;