import gulp from "gulp";


import browserSync from "browser-sync";



import path from "./config/path.js";
import html from "./task/html.js";
import img from "./task/img.js";
import cleaner from "./task/clean.js";
import fonts from "./task/fonts.js";
import scss from "./task/scss.js";
import js from "./task/js.js";


const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};







const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch (path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch(path.img.watch,img).on("all", browserSync.reload);
  gulp.watch (path.fonts.watch, fonts).on("all", browserSync.reload);
  gulp.watch (path.js.watch, js).on("all", browserSync.reload);
};


export { html };
export { img };
export {fonts};
export {scss};
export {js};


// export {scss}
// export {img}



const build =  gulp.series(
  cleaner,
  gulp.parallel( html,img, fonts,scss, js),
  gulp.parallel(watcher, server),
  );

  const dev =  gulp.series(
  cleaner,
  gulp.parallel( html,img, fonts,scss, js),
  gulp.parallel(watcher, server),
  );

  export {build};
  export {dev};

 export default dev;
