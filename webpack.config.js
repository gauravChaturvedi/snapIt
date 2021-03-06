'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __PROD__ = process.env.NODE_ENV === 'production';
const __CORDOVA__ = process.env.BUILD_TARGET === 'cordova';
const __DEV__ = __PROD__ === false;

const packageFile = require('./package.json');

// Take cordova enviroment, if not prod, if not dev
const enviroment = packageFile.enviroments[
(__CORDOVA__ && '__CORDOVA__') ||
(__PROD__ && '__PROD__') ||
(__DEV__ && '__DEV__')
  ];

const __SSR__ = enviroment.__SSR__;
const __DEVTOOLS__ = enviroment.__DEVTOOLS__;

const define = {
  __DEV__: JSON.stringify(__DEV__),
  __PROD__: JSON.stringify(__PROD__),
  'process.env': {
    NODE_ENV: JSON.stringify(__PROD__ ? 'production' : 'development')
  },
  __CORDOVA__: JSON.stringify(__CORDOVA__),
  __SSR__: JSON.stringify(__SSR__),
  __DEVTOOLS__: JSON.stringify(__DEVTOOLS__)
};

let getServerString;
const webpackConfig = {
  devtool: __DEV__ ? 'source-map' : false,
  devServer: {
    host: '0.0.0.0'
  },
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin(Object.assign(define, {
      __CLIENT__: JSON.stringify(true),
      __SERVER__: JSON.stringify(false)
    })),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: false,
      filename: 'index.html',
      inject: false,
      minify: {
        collapseWhitespace: true
      }
    })
  ].concat(__PROD__ ? [
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false
        },
        sourceMap: false
      })
    ] : []),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          env: {
            development: {
              presets: ['react-hmre']
            }
          }
        }
      }, {
        test: /\.scss/,
        loader: 'style!css!autoprefixer!sass?outputStyle=expanded'
      }, {
        test: /\.css$/,
        exclude: [/\.raw\.css$/, /\.useable\.css$/, /node_module/],
        loader: 'style!css!autoprefixer'
      }, {
        test: /\.useable\.css$/,
        loader: 'style/useable!raw!autoprefixer'
      }, {
        test: /\.raw\.css$/,
        loader: 'style!raw!autoprefixer'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      }
    ]
  }
};

module.exports = webpackConfig;
