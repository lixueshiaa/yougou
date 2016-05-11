var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var paths={
	scripts : ['js/index.js','js/move.js']
}
gulp.task('default',function()
{
	console.log('ko');
	//gulp.src(paths)
	gulp.src('js/*.js').pipe(uglify()).pipe(concat('alls.min.js')).pipe(gulp.dest('build'));
});