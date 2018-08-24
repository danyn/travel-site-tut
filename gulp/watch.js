const gulp = require('gulp');
const watch = require('gulp-watch') 
const browserSync = require('browser-sync')



gulp.task('html', () => {
	browserSync.reload()
})

gulp.task('cssInject', ['css'], () => { 
	return gulp.src('./app/assets/styles/style.css').pipe(browserSync.stream());
})


gulp.task('watch', () => {

	browserSync.init({
		notify: false,
		server:{
			baseDir: "app"
		}
	})

	watch('./app/index.html', () => {
		gulp.start('html')
	})

	watch('./app/styles/**/*.css', () => {
		gulp.start('cssInject')
	})

})


// gulp.src() gulp.dest() pipe()