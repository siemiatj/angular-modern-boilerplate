'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  output: {
    path: 'dist/',
    filename: '[name].js'
  },
  entry: {
    'js/app': './app/js/app.bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  cache: true,

  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      { test: /\.es6$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
    ]
  }
};
