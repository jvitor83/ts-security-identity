'use strict';

var gulp = require('gulp');
var gulp_typescript = require('gulp-typescript');
var merge2 = require('merge2');
var gulp_jasmine = require('gulp-jasmine');
var gulp_sourcemaps = require('gulp-sourcemaps');
var gulp_tslint = require('gulp-tslint');
var gulp_concat = require('gulp-concat');
var dts_generator = require('dts-generator');

//var tslint = require('tslint');
var del = require('del');

//let tsProject = gulp_typescript.createProject('tsconfig.json');
let moduleGeneration = 'system';
let targetGeneration = 'es5';
let sourcemapsInline = true;



var sourcemapsConfig = null;
if(!sourcemapsInline) //if not inline, then write in file
{
    sourcemapsConfig = '.';
}
 
gulp.task('scripts', ['tslint'], function() {
	let tsResult = gulp.src('app/**/*.ts')
                    .pipe(gulp_sourcemaps.init())
					.pipe(gulp_typescript({module: moduleGeneration, target: targetGeneration, declaration: true, sortOutput: true}));
  
	return merge2([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
		tsResult.dts
        .pipe(gulp_sourcemaps.write(sourcemapsConfig))
        .pipe(gulp.dest('dist/dev/definitions')),
		tsResult.js
        .pipe(gulp_sourcemaps.write(sourcemapsConfig))
        .pipe(gulp.dest('dist/dev/js'))
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


gulp.task('dts-gen', function(cb) 
{
    return dts_generator.default({
        name: 'ts-security-identity',
        project: '.',
        out: 'dist/prod/definitions/src/ts-security-identity.d.ts',
        exclude: ['node_modules/**/*.d.ts', 'typings/**/*.d.ts']
    })
});



gulp.task('build', ['build:dev'], function() {
    
    
  let tsConfig = gulp_typescript({module: moduleGeneration, target: targetGeneration, declaration: true, removeComments: true, out: 'ts-security-identity.js'});
  
	return merge2([
        
        gulp.src('app/src/**/*.ts')
                .pipe(gulp_sourcemaps.init())
                .pipe(tsConfig)
                .dts
        //.pipe(gulp_concat('security-identity.d.ts'))
        .pipe(gulp_sourcemaps.write())
        .pipe(gulp.dest('dist/prod/definitions/src'))

        
        ,

		gulp.src('app/src/**/*.ts')
                .pipe(gulp_sourcemaps.init())
                .pipe(tsConfig)
                .js
        //.pipe(gulp_concat('security-identity.js'))
        .pipe(gulp_sourcemaps.write())
        .pipe(gulp.dest('dist/prod/js/src'))
	]);
    
});

gulp.task('build:dev', [ 'scripts' ]);

gulp.task('default', [ 'build' ]);


gulp.task('test', ['build'], function() {
    return gulp
        .src('dist/dev/js/spec/**/*.js')
        .pipe(gulp_jasmine());
});