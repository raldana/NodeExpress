var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsFiles = ['*.js', 'src/**/*.js'];
var jscs = require('gulp-jscs');


gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    
    return gulp.src('./src/views/*.html')
        .pipe(wiredep);
});