const project      = require('../project.js');
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const plumber      = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano');
const browserSync  = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src([project.srcDir + '/css/**/*.s?ss' ])
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(autoprefixer({
        browsers: [ 'last 3 versions', '> 0.5%' ]
      }))
      .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(project.outCssDir))
    .pipe(browserSync.stream());
});
