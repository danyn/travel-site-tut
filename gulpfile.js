const gulp = require('gulp')
require('./gulp/modernizr.js')
require('./gulp/scripts.js')
require('./gulp/style.js')
require('./gulp/watch.js')
require('./gulp/sprites.js')


gulp.task('default', ['watch']);