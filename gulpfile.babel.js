import path from "path";
import gulp from "gulp";
import babel from "gulp-babel";
import mocha from "gulp-mocha";
import eslint from "gulp-eslint";
import plumber from "gulp-plumber";


gulp.task("lint", () =>
    gulp.src("src/**/*.js")
        .pipe(eslint({useEslintrc: true}))
        .pipe(eslint.format("stylish"))
        .pipe(eslint.failAfterError()));

gulp.task("test", () =>
    gulp.src(["src/**/*.js"])
        .pipe(mocha({require: ["espower-babel/guess"]})));

gulp.task("babel", () =>
    gulp.src("src/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("build")));

gulp.task("default", ["babel"]);
