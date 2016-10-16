'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const zip = require('gulp-zip');
const del = require('del');

// SASS
gulp.task('sass', () => {
 return gulp.src('./src/sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./src'));
});

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

// Remove dist folder and zip
gulp.task('del', () => {
  del(['./dist', './mini-radio.zip']);
});

// Copy files
gulp.task('copy', () => {
  gulp.src([
    './src/*_locales/**/*',
    './src/*vendor/**/*',
    './src/manifest.json',
    './src/popup.css',
    './src/popup.html'
  ]).pipe(gulp.dest('./dist'));
});

// Minify JS
gulp.task('compress', () => {
  gulp.src('./src/js/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('./dist/js'));
});

// Minify PNG images
gulp.task('images', () => {
  gulp.src('./src/images/**/*')
    .pipe(imagemin(imagemin.optipng()))
    .pipe(gulp.dest('./dist/images'));
});

// Create dist folder
gulp.task('dist', ['compress', 'copy', 'images']);

// Zip application
gulp.task('zip', () => {
  return gulp.src('./dist/**/*')
    .pipe(zip('mini-radio.zip'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass']);
