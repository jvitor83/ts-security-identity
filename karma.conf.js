module.exports = function(config) {
  config.set({
    basePath: './',
    browsers: ['PhantomJS_custom'],
    customLaunchers: {
        'PhantomJS_custom': {
            base: 'PhantomJS',
            options: {
                windowName: 'my-window',
                settings: {
                    webSecurityEnabled: false
                }
            },
            flags: ['--load-images=true'],
            //debug: true
        }
    },
    preprocessors: {
      '**/*.ts': ['typescript']
    },
    files: [
      //"node_modules/requirejs/require.js",
      //'node_modules/karma-requirejs/lib/adapter.js',
      //'./src/**/*.ts',
      './test/**/*.ts'
    ],
    
    reporters: ['progress'],
    frameworks: ['jasmine'],
    colors: true,
    //logLevel: config.LOG_DEBUG,
    autoWatch: false,
    singleRun: true,
    plugins: [
        'karma-jasmine',
        // 'karma-requirejs',
        //'karma-tsc-preprocessor',
        'karma-typescript-preprocessor',
        'karma-phantomjs-launcher'
        //'karma-chrome-launcher'
    ],
    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: true, // (optional) Generates corresponding .map file.
        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: true, // (optional) Skip resolution and preprocessing.
        removeComments: false, // (optional) Do not emit comments to output.
        concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.,
      },
      typings: [
        'typings/main.d.ts'
      ],
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      },
      phantomjsLauncher: {
        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        exitOnResourceError: true
      }
    }
  });
};