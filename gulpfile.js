const gulp = require('gulp')
require('./gulp/style.js')
require('./gulp/watch.js')
require('./gulp/sprites.js')

gulp.task('default', ['includeSprite', 'watch']);