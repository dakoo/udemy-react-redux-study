var gulp = require('gulp');
var gutil = require('gulp-util'); //debug
var source = require('vinyl-source-stream'); //build 
var browserify = require('browserify'); //dependency 
var watchify = require('watchify'); //for auto rerun
var reactify = require('reactify');	//jsx --> js 

gulp.task("default", function(){
	var bundler = watchify(browserify({	//make a bundler
	entries : ['./src/app.jsx'], //entry point
	transform : [reactify],	//transform jsx to js
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
	}));

	function build(file){	
		if(file) gutil.log('Recompiling ' + file);
		return bundler
		.bundle()	//actual execution
		.on('error', gutil.log.bind(gutil, 'Browserify Error')) //during bundling process, expose the log
		.pipe(source('main.js'))	//concated single file 
		.pipe(gulp.dest('./'));		//destination of the single file
	};
	build();	//run the build function
	bundler.on('update', build); //whenever the file is changed, just run the build
});

