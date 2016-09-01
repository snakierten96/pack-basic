'use strict';

exports.ts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
  exclude: /node_modules/
}

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/
};