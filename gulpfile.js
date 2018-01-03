var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');
var jshint = require('gulp-jshint');


gulp.task('copyHtml', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('concatInterface', function(){
  return gulp.src('./src/js/*-interface.js')
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function(){
  return browserify({entries:['./tmp/allConcat.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minifyJS', ['jsBrowserify'], function(){
  return gulp.src('./dist/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('clean', function() {
  return del(['dist/js', 'tmp']);
});

gulp.task('build', ['clean'], function() {
  if (buildProduction){
    gulp.start('minifyJS');
  } else {
    gulp.start('jsBrowserify');
  }
});
