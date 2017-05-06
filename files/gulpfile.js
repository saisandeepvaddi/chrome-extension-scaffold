const gulp = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const gutil = require("gulp-util");

gulp.task(
  "default",
  ["babel", "copy-html", "copy-css", "copy-icons", "copy-manifest", "watch"],
  () => {
    return gutil.log("++++ Gulp Started ++++!");
  }
);

gulp.task("babel", () => {
  gutil.log("Gulp babel task executing");
  return gulp
    .src("src/js/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(
      babel({
        presets: ["es2015", "stage-2"]
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("copy-html", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/html/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest("build"));
});

gulp.task("copy-css", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/css/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest("build"));
});

gulp.task("copy-icons", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/icons/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest("build"));
});

gulp.task("copy-manifest", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/manifest.json")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest("build"));
});

gulp.task("watch", () => {
  gutil.log("Gulp is watching your files :- )");
  gulp.watch("src/css/*", ["copy-css"]);
  gulp.watch("src/html/*", ["copy-html"]);
  gulp.watch("src/icons/*", ["copy-icons"]);
  gulp.watch("src/manifest.json", ["copy-manifest"]);
  gulp.watch("src/js/*.js", ["babel"]);
});

function onError(err) {
  gutil.log(gutil.colors.red(err));
}
