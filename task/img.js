import gulp from "gulp";


import imagemin from "gulp-imagemin";
import changed from 'gulp-changed';
import gulpIf from "gulp-if";
import webp  from "gulp-webp";



import path from "../config/path.js";
import app from "../config/app.js";


export default() => {
  return gulp.src(path.img.src, {encoding: false})
  .pipe(changed(path.img.dest))
  .pipe(gulpIf(app.isProd, webp()))
  .pipe(gulp.dest(path.img.dest))
  .pipe(gulp.src(path.img.src, {encoding: false}))
  .pipe(changed(path.img.dest))
  .pipe(gulpIf(app.isProd, imagemin({ verbose: true })))
  .pipe(gulp.dest(path.img.dest))
};

