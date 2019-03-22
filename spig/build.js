"use strict";

const gulp     = require('gulp');
require('require-dir')('.');

gulp.task('build', gulp.parallel(
  'static',
  'sass',
  'js',
  'images'
));

gulp.task('dev', gulp.series(
  'build',
  'watch',
));
