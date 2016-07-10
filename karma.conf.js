'use strict';

const webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
delete webpackConfig.entry;
delete webpackConfig.output;

module.exports = function karmaConfig(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    files: [
      'src/**/*-test.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/__tests__/**/*': ['webpack']
    },
    frameworks: ['phantomjs-shim', 'jasmine'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
