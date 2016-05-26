const path              = require('path');
const webpack           = require('webpack');
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.resolve(__dirname, 'dist'),
  assets: path.join(__dirname, 'app/assets')
};

const config = {
  entry: {
    app: './app/js/app.bundle.es6'
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  devtool: 'eval-source-map',
  noInfo: true,
  cache: true,
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      {
        test: /\.es6?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.svg$/,
        loader: 'file',
        include: PATHS.assets
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }, 
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + PATHS.app + '/!html'
      },
      {
        test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
        loader: 'file?name=fonts/[name].[ext]',
        include: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

module.exports = config;

