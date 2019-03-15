const project = require('../project.js');
const gulp    = require('gulp');
const serve   = require('gulp-serve');

gulp.task('serve', serve({
  root: [project.outDir],
  port: 9000,
}));
