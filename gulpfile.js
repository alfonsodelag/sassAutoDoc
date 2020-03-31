var gulp = require('gulp');
var sassdoc = require('sassdoc');
var sassGlob = require('gulp-sass-glob');
var sass = require('gulp-sass');


gulp.task('styles', function () {
    return gulp.src('./css/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('sassdoc', function () {
  return gulp.src('./css/*.scss')
    .pipe(sassdoc());
});

