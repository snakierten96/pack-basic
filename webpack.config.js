'use strict';

const path = require('path');
const webpack = require('webpack');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    //filename: 'bundle.js',
    filename: "[name]-[hash].js",
    chunkFilename: "[id]-[hash]-chunk.js",
    publicPath: '/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  module: {
    loaders: [
      loaders.ts,
      loaders.html
    ]
  },
  noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
};
