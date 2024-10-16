import gulp from "gulp";

import fonter from "gulp-fonter";
import changed from "gulp-changed";
import ttf2woff2 from "gulp-ttf2woff2";
import ttf2woff from 'gulp-ttf2woff';

import path from "../config/path.js";

export default () => {
  return (
    gulp
      // .src('src/fonts/**/*.{ttf,otf}', { read: false })
      .src(['src/fonts/*.ttf'], {
        encoding: false, // Important!
        removeBOM: false,
      })

      .pipe(changed(path.fonts.dest))

      .pipe(ttf2woff())

      .pipe(gulp.src(['src/fonts/*.ttf'], {
        encoding: false, // Important!
        removeBOM: false,
      }))
      .pipe(ttf2woff2())
      .pipe(gulp.dest(path.fonts.dest))
  );
};
