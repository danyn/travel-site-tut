const gulp = require('gulp'),
			svgSprite = require('gulp-svg-sprite'),
			rename = require('gulp-rename'),
			del = require('del');

const src = './app/assets/images';
const svgSource = `${src}/sprite/`;
const svgToCompile = `${src}/icons/**/*.svg`;

const compiled = './app/compiled/sprite';
const compiledSrc = `${compiled}/css`


const config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css:{
					template: './gulp/templates/sprite.css'
					} 
				}
			}
		}
	};

gulp.task('clean', () => {
	return del([compiled, svgSource])
});

gulp.task('removeIntermediateFiles', ['moveSprite', 'moveSpriteCss'] ,() => {
	return del([compiled])
} )

gulp.task('createSprite', ['clean'], () => {
	return 	gulp.src(svgToCompile)
	.pipe(svgSprite(config))
	.pipe(gulp.dest(compiled))

});

gulp.task('moveSprite',['createSprite'], () => {
	return gulp.src(`${compiledSrc}/*.svg`)
	.pipe(gulp.dest(svgSource))
});

gulp.task('moveSpriteCss',['createSprite'] , () => {
	return gulp.src(`${compiledSrc}/sprite.css`)
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./app/styles/modules/'))
});

gulp.task('includeSprite', ['createSprite','moveSpriteCss', 'moveSprite' , 'removeIntermediateFiles'] );
