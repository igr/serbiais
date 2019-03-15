const gulp    = require('gulp');
const project = require('./project.js');

// gulp tasks live in their own files, for the sake of clarity.

require('require-dir')('./gulp-tasks');


// watch folders for changes

gulp.task("watch", function() {
  gulp.watch(project.srcDir + '/images/**/*', gulp.parallel('images'));
  gulp.watch(project.srcDir + '/css/**/*.scss', gulp.parallel('sass'));
  gulp.watch(project.srcDir + '/js/**/*.js', gulp.parallel('js'));
  gulp.watch(project.srcDir + '/static/**/*', gulp.parallel('static'));
});


// build

gulp.task('build', gulp.parallel(
  'static',
  'sass',
  'js',
  'images'
));

// build and watch

gulp.task('dev', gulp.series(
  'build',
  'watch'
));
