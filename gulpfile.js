const gulp = require('gulp');
const uglify = require('gulp-uglify');
const jsonminify = require('gulp-jsonminify');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const zip = require('gulp-zip');
const pump = require('pump');

// Remove space
gulp.task('html', function () {
  return gulp.src('./extension/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// Compress JS
gulp.task('compress', function (cb) {
  pump([
      gulp.src('./extension/js/background.js'),
      uglify(),
      gulp.dest('./dist/js')
    ],
    cb
  );
});

// Minify JSON
gulp.task('minify', function () {
  return gulp.src(['./extension/**/*.json'])
    .pipe(jsonminify())
    .pipe(gulp.dest('./dist'));
});

// Copy files
gulp.task('copy', function () {
  return gulp.src([
    './extension/lib/*'
  ]).pipe(gulp.dest('./dist/lib'));
});

// Minify PNG images
gulp.task('images', function () {
  return gulp.src('./extension/images/**/*')
    .pipe(imagemin([imagemin.optipng()]))
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('default', gulp.series(['html', 'compress', 'minify', 'copy', 'images'], function() {
  return gulp.src('./dist/**/*')
    .pipe(zip('miniradio.zip'))
    .pipe(gulp.dest('./'));
}));
