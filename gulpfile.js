'use strict';

var gulp = require('gulp');
var gulp_typescript = require('gulp-typescript');
var merge2 = require('merge2');
var gulp_jasmine = require('gulp-jasmine');
var gulp_sourcemaps = require('gulp-sourcemaps');
var gulp_tslint = require('gulp-tslint');
//var tslint = require('tslint');
var del = require('del');

//let tsProject = gulp_typescript.createProject('tsconfig.json');
 
let sourcemapsInline = true;



var sourcemapsConfig = null;
if(!sourcemapsInline) //if not inline, then write in file
{
    sourcemapsConfig = '.';
}
 
gulp.task('scripts', ['clean', 'tslint'], function() {
	let tsResult = gulp.src('app/**/*.ts')
					.pipe(gulp_typescript({module: "commonjs", target: "es5", declaration: true}));
  
	return merge2([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
		tsResult.dts
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_sourcemaps.write(sourcemapsConfig))
        .pipe(gulp.dest('dist/definitions')),
		tsResult.js
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_sourcemaps.write(sourcemapsConfig))
        .pipe(gulp.dest('dist/js'))
	]);
});
gulp.task('watch', ['scripts'], function() {
    gulp.watch('app/**/*.ts', ['scripts']);
});

gulp.task("tslint", () =>
    gulp.src("app/**/*.ts")
        .pipe(gulp_tslint())
        .pipe(gulp_tslint.report("verbose", {
          emitError: true
        }))
);

gulp.task('clean', function () {
  return del(['dist/']);
});


gulp.task('build', [ 'scripts' ]);

gulp.task('default', [ 'build' ]);


gulp.task('test', ['build'], function() {
    return gulp
        .src('dist/js/spec/**/*.js')
        .pipe(gulp_jasmine());
});