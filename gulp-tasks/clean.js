const project = require('../project.js');
const gulp    = require('gulp');
const del     = require('del');

// cleanup the build output

gulp.task('clean', () => {
  return del([
    project.outDir + '/**/*',
    project.outCssDir + '/**/*',
    project.outJsDir + '/**/*',
  ]);
});
