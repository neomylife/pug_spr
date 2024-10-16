import gulp from "gulp";

import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";
import gulpIf from "gulp-if";


import path from "../config/path.js";
import app from "../config/app.js";



export default () => {
  return gulp
    .src(path.html.src)
    .pipe(fileInclude())
    .pipe(gulpIf(app.isProd, webpHtml()))
    .pipe(size({ title: "Before" }))
    .pipe(gulpIf(app.isProd,htmlmin({ collapseWhitespace: app.isProd })))
    .pipe(size({ title: "After" }))
    .pipe(gulp.dest(path.html.dest));
};

// export default html;
