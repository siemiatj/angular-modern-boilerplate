'use strict';

var webpack = require('webpack');

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
  devtool: 'eval-source-map',
  cache: true,
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      { 
        test: /\.es6$/, 
        exclude: /node_modules/, 
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
