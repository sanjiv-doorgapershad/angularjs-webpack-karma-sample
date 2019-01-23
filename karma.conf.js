const path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
process.env.CHROME_BIN = require('puppeteer').executablePath()

// Karma configuration
// Generated on Wed Jan 23 2019 09:27:19 GMT+0200 (South Africa Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app/**/*.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './app/**/*.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80
      }
    },

    webpack: {
      mode: "development",
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
      ],
      module: {
        rules: [
          { 
            test: /.html$/,
            exclude: /index.html$/,
            use: 'html-loader'
          },
          { 
            test: /.js$/,
            exclude: /(node_modules|index\.style\.js|\.spec\.js$)/,
            use: 'istanbul-instrumenter-loader'
          },
          {
            test: /.scss$/,
            exclude: /index.html$/,
            use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
          }
        ]
      }
    },
  })
}
