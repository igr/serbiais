const project    = require('../project.js');
const gulp       = require('gulp');
const plumber    = require('gulp-plumber');

gulp.task('static', () => {
  return gulp.src([ project.srcDir + '/static/**/*' ], { base: project.srcDir + '/static/' })
    .pipe(plumber())
    .pipe(gulp.dest(project.outDir));
});
