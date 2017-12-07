const gulp = require("gulp");
const plumber = require("gulp-plumber");
const gutil = require("gulp-util");
const uglify = require("gulp-uglify-es").default;
const sourcemaps = require("gulp-sourcemaps");
const uglifycss = require("gulp-uglifycss");
const sass = require("gulp-sass");

// To run the default task. It will compile all the project and create default structure when ran '$> gulp'
gulp.task(
  "default",
  [
    "js",
    "copy-html",
    "copy-css",
    "copy-sass",
    "copy-icons",
    "copy-manifest",
    "watch"
  ],
  () => {
    return gutil.log("++++ Gulp Started ++++!");
  }
);

// For compiling from ES6 and other JS latest code
gulp.task("js", () => {
  gutil.log("Gulp js task executing");
  return gulp
    .src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build"));
});

// Copy html files into build for every update
gulp.task("copy-html", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/html/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest("build"));
});

// Uglify CSS and copy to build
gulp.task("copy-css", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/styles/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglifyComments: true
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build"));
});

// Compile and uglify SASS/SCSS files to build
gulp.task("copy-sass", () => {
  gutil.log("Gulp copy-sass task executing");
  var scss = gulp
    .src(["src/styles/**/*.scss", "src/styles/**/*.sass"])
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglifyComments: true
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build"));
});

// Copy Icon files
gulp.task("copy-icons", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/icons/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest("build"));
});

// Copy new manifest for every update in manifest
gulp.task("copy-manifest", () => {
  gutil.log("Gulp copy-res task executing");
  return gulp
    .src("src/manifest.json")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest("build"));
});

// A gulp watcher for executing above tasks
gulp.task("watch", () => {
  gutil.log("Gulp is watching your files :- )");
  gulp.watch("src/styles/**/*.css", ["copy-css"]);
  gulp.watch(["src/styles/**/*.scss", "src/styles/**/*.sass"], ["copy-sass"]);
  gulp.watch("src/html/*", ["copy-html"]);
  gulp.watch("src/icons/*", ["copy-icons"]);
  gulp.watch("src/manifest.json", ["copy-manifest"]);
  gulp.watch("src/js/*.js", ["js"]);
});

// An error function. Using this function will plumber will prevent gulp to crash when error occurs
function onError(err) {
  gutil.log(gutil.colors.red(err));
}
