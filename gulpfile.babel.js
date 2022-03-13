import gulp from "gulp";
import del from "del";
import minify from "gulp-csso";

const sass = require("gulp-sass")(require("node-sass"));

const routes = {
  css: {
    watch: "src/scss/*",
    src: "src/scss/styles.scss",
    dist: "dist/css",
  },
};

const clean = () => del(["dist/"]);

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dist));

const watch = () => {
  gulp.watch(routes.css.watch, styles);
};

export const dev = gulp.series([clean, styles, watch]);
