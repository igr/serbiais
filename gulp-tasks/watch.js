const project = require('../project.js');
const gulp    = require('gulp');

gulp.task("watch", function () {
  gulp.watch(project.srcDir + "/js/**/*", gulp.parallel('scripts'));
  gulp.watch(project.srcDir + "/css/**/*", gulp.parallel('styles'));
  gulp.watch(project.srcDir + "/static/**/*",  gulp.parallel('static'));
  gulp.watch(project.srcDir + "/site/**/*",  gulp.parallel('generate'));
});
