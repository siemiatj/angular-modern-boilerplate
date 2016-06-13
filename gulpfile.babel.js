import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import del from 'del';
import runSequence from 'run-sequence';

let Server = require('karma').Server;

// create a single instance of the compiler to allow caching
let devCompiler = webpack(webpackConfig);
let config = {
  paths: {
    js: {
      src: 'app/**/*.es6',
      dist: 'dist/'
    }
  }
};

gulp.task('build-dev', ['webpack'], function() {
  gulp.watch([config.paths.js.src], ['webpack']);
});

gulp.task('clean', () =>
  del(config.paths.js.dist)
);

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    autoWatch: true
  }, done).start();
});

gulp.task('webpack', function(callback) {
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('default', () =>
  runSequence('clean', ['build-dev'])
);