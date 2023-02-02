// webpack.dev.js
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  // devtool: 'eval-cheap-module-source-map', // 源码调试模式,后面会讲
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 9001, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新 （页面样式热更新）
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, '../public'), //托管静态资源public文件夹
    },
    open: true,
  },

  plugins: [
    new ReactRefreshWebpackPlugin(), // jsx/tsx 热更新插件
    new EslintWebpackPlugin({
      // extensions: ['js', 'jsx', 'ts', 'tsx'],
      // emitError: true,
      // emitWarning: true,
      // context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      // failOnError: true, // 默认 false 如果设置为true的话，那么当触发任何错误的时候，将导致构建失败。
      // failOnWarning: true, // 如果设置为true的话，那么有任何警告的时候，将导致构建失败。
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
    }),
  ],
});
