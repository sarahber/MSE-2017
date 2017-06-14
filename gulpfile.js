var pug = require('gulp-pug');
var watch = require('gulp-watch');

gulp.task('pug',function() {
 return gulp.src('index.pug')
 .pipe(pug({
    doctype: 'html',
    pretty: false
 }))
 .pipe(gulp.dest('test/'));
});

gulp.task('watch', function () {
 return watch('/', { ignoreInitial: false })
    .pipe(gulp.dest('pug'));
 });