'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('atool-build/lib/webpack');

module.exports = function (webpackConfig, env) {
    webpackConfig.babel.babelrc = false;
    webpackConfig.babel.plugins.push('transform-runtime');

    //babel-plugin-import用来自动引入antd的脚本和样式
    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd',
        style: 'css'  // if true, use less
    }]);

    // Support hmr
    if (env === 'development') {
        webpackConfig.devtool = '#eval';
        webpackConfig.babel.plugins.push(['dva-hmr', {
            //container: '#root',
            //quiet: false,
            entries: [
                './src/index.js',
            ],
        }]);
    } else {
        webpackConfig.babel.plugins.push('dev-expression');
    }

    // Support CSS Modules
    // Parse all less files as css module.
    webpackConfig.module.loaders.forEach(function (loader, index) {
        if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
            loader.include = /node_modules/;
            loader.test = /\.less$/;
        }
        if (loader.test.toString() === '/\\.module\\.less$/') {
            loader.exclude = /node_modules/;
            loader.test = /\.less$/;
        }
        if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
            loader.include = /node_modules/;
            loader.test = /\.css$/;
        }
        if (loader.test.toString() === '/\\.module\\.css$/') {
            loader.exclude = /node_modules/;
            loader.test = /\.css$/;
        }
    });

    return webpackConfig;
};
