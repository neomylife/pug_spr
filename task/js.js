import gulp from "gulp";

import webpack         from  "webpack-stream";
import babel           from  "gulp-babel";
import uglify           from  "gulp-uglify";



import path from "../config/path.js";
import app from "../config/app.js";




export default () => {
  return gulp.src(path.js.src)
 
    .pipe(webpack({
        config : {
            mode: app.isProd ? "production" : "development",
        
            entry: {
                index: './src/js/main.js',
                //contacts: './src/js/contacts.js',
                //about: './src/js/about.js',
            },
            output:{
                filename:'[name].bundle.js',
            }}
      }))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.js.dest))
};
