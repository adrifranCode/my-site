var gulp         = require('gulp'),
	imagemin     = require('gulp-imagemin'),
	del          = require('del'),
	usemin       = require('gulp-usemin'),
	rev          = require('gulp-rev'),
	uglify       = require('gulp-uglify'),
	cleanCss     = require('gulp-clean-css'),
	browserSync  = require("browser-sync").create();

gulp.task('previewDist',function(){
	browserSync.init({
		server: {
			baseDir:"docs"
		}
	});
});

gulp.task('deleteDistFolder', function(){
	return del("./docs");
});

gulp.task('optimizeImages', ['deleteDistFolder'], function (){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/legacy','!./app/assets/images/legacy/**/*', '!./app/assets/images/icons/**/*' ])
		.pipe(imagemin({
			progressive:true,
			interlaced:true,
			multipass:true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder','styles','scripts'], function(){
	return gulp.src("./app/index.html")
		.pipe(usemin({
			css:[function(){return rev()},function(){return cleanCss()}],
			js:[function(){return rev()}, function(){return uglify()}]
		}))
		.pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
