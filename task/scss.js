import gulp from "gulp";

import concat from "gulp-concat";
import sourcemaps from "gulp-sourcemaps";
import sassGlob from "gulp-sass-glob";
import csso from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import group from "gulp-group-css-media-queries";
import gulpIf from "gulp-if";

import * as dartSass  from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);


import path from "../config/path.js";
import app from "../config/app.js";

export default () => {
  return gulp
    .src(path.scss.src, { sourcemaps: true })
    .pipe(concat("style.css"))
    .pipe(gulpIf(app.isProd, autoprefixer()))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulpIf(app.isProd, shorthand()))
    .pipe(group())
    .pipe(gulp.dest(path.scss.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulpIf(app.isProd, csso()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.scss.dest));
};
