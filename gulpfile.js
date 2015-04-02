
// Gulp et ses dépendances
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var watch = require('gulp-watch');

// Watch Files For Changes
gulp.task('watch', function() {
  // Styles less
  gulp.watch(['css/src/*.css'], ['styles']);
  gulp.watch(['js/src/*.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'styles'], function() {
  // Rien d'autre pour le moment
});

gulp.task('styles', function() {
  return gulp.src('css/src/*.css')
  .pipe(concat('all.css'))
  .pipe(minify())
  .pipe(rename('all.min.css'))
  //.pipe(uglify())
  .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function(){
  return gulp.src('js/src/*.js') // read all of the files that are in script/lib with a .js extension
  // .pipe(jshint()) // run their contents through jshint
  //.pipe(jshint.reporter('default')) // report any findings from jshint
  .pipe(concat('all.js')) // concatenate all of the file contents into a file titled 'all.js'
  //.pipe(gulp.dest('dist/js')) // write that file to the dist/js directory
  .pipe(rename('all.min.js')) // now rename the file in memory to 'all.min.js'
  .pipe(uglify()) // run uglify (for minification) on 'all.min.js'
  .pipe(gulp.dest('js/')); // write all.min.js to the dist/js file
});
