'use strict';

var webpackConfig = require('../webpack.config.js');
var webpack = require('webpack');

module.exports = {
  options: webpackConfig,
  prod: {
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
      new webpack.optimize.DedupePlugin()
    ]
  },
  dev: {
    devtool: '#inline-source-map',
    debug: true,
    watch: true,
    keepalive: true,
    failOnError: false
  }
};
