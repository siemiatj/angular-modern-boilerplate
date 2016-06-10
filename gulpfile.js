import gulp from 'gulp';
import webpack from 'webpack';
import del from 'del';
import runSequence from 'run-sequence';

var config = {
  paths: {
    js: {
      src: 'app/**/*.es6',
      dist: 'dist/'
    },
    test: {
      src: 'app/**/*.spec.js',
      dist: 'test/'
    }
  }
};

gulp.task('clean', () =>
  del([config.paths.js.dist, config.paths.test.dist])
);

gulp.task('karma', () =>
);

gulp.task('webpack', function() {
  return gulp.src(config.paths.js.src)
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(config.paths.js.dist));
});

gulp.task('default', () =>
  runSequence('clean', ['webpack']) //, 'server') // we're not using happy so don't run this
);