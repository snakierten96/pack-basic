'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourceMap = process.env.TEST
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ })]
  : [ ];
  
const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__ : process.env.NODE_ENV !== 'production',
    __PRODUCTION__ : process.env.NODE_ENV === 'production',
    __TEST__ : JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'vendor']
  }),
  /*
  new SplitByPathPlugin([
    { name: 'vendor', path: path.join(__dirname, 'node_modules') },  
  ]),
  */
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: false
  }),
  new webpack.NoErrorsPlugin(),
].concat(sourceMap);

module.exports = basePlugins;
