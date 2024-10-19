import gulp from "gulp";

import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";
import gulpIf from "gulp-if";
import pugs from "gulp-pug";


import path from "../config/path.js";
import app from "../config/app.js";



export default () => {
  return gulp
    .src(path.pug.src)
    .pipe(pugs({
      pretty: true
    }))
    
    .pipe(gulp.dest(path.pug.dest));
};

// export default pug;
