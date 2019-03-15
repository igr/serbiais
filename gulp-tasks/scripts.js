const project      = require('../project.js');
const gulp         = require('gulp');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const sourcemaps   = require('gulp-sourcemaps');
const plumber      = require('gulp-plumber');
const webpack      = require('webpack-stream');
const babel        = require('gulp-babel');
const browserSync  = require('browser-sync').create();

gulp.task('js', () => {
  return gulp.src([ project.srcDir + '/js/**/*.js' ])
    .pipe(plumber())
    .pipe(webpack({
      mode: 'production'
    }))
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: [ '@babel/env' ]
      }))
      .pipe(concat('all.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(project.outJsDir))
    .pipe(browserSync.stream());
});
