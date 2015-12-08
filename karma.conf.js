'use strict';

module.exports = function karmaConfig (config) {
  config.set({
    webpack: require('./webpack.config.js'),
    reporters: ['dots'],
    port: 9876,
    colors: true,
    autoWatch: true,

    browsers: ['PhantomJS'],
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
    browserDisconnectTimeout: 20000,
    browserDisconnectTolerance: 5,
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // list of files to exclude
    exclude: [],
    webpackServer: {
      quiet: true
    },
    webpackPort: 1234,
    // base path, that will be used to resolve files and exclude
    basePath: '',
    // frameworks to use
    frameworks: ['mocha', 'chai'],
    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.min.js',
      'app/js/app.bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/js/*.spec.js',
      {
        pattern: 'app/js/*.js',
        watched: true,
        served: true,
        included: false
      }
    ],

    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-webpack'),
      'karma-html2js-preprocessor',
      'karma-phantomjs-launcher'
    ],

    preprocessors: {
      'app/js/*.bundle.js': ['webpack'],
      '**/*.html': ['html2js'],
    }
  });
};

