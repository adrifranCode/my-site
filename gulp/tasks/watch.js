var gulp         = require("gulp"),
	watch        = require("gulp-watch"),
	browserSync  = require("browser-sync").create();

var reload       = browserSync.reload;

gulp.task('watch', function(){
	
	browserSync.init({
		server: {
			baseDir:"app"
		}
	});
		
	gulp.watch("./app/index.html").on('change', reload);
	
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function () {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});
