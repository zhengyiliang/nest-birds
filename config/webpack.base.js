const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'; // 是否是开发模式

const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
  entry: './src/index',
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/', // 打包后文件的公共前缀路径
  },
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@': path.join(__dirname, '../src'),
      '@utils': path.join(__dirname, '../src/utils'),
    },
    modules: [path.resolve(__dirname, '../node_modules')], // 查找第三方模块只在本项目的node_modules中查找
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts,tsx进行loader解析
        use: 'babel-loader',
      },
      // {
      //   test: /.(c|le)ss$/,
      //   use: [styleLoader, 'css-loader', 'postcss-loader', 'less-loader']
      // },
      {
        test: /\.css$/,
        use: [styleLoader, 'css-loader', 'postcss-loader'],
        // include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts,tsx进行loader解析
      },
      {
        test: /\.less$/, // 精准使用less-loader，避免用less-loader去解析css （ts和tsx也是如此，ts里面是不能写jsx语法的，所以可以尽可能避免使用 @babel/preset-react对 .ts 文件语法做处理。）
        use: [styleLoader, 'css-loader', 'postcss-loader', 'less-loader'],
        include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts,tsx进行loader解析
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: 'asset', // type选择asset
        include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts,tsx进行loader解析
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: 'static/images/[name].[contenthash:8][ext]', // 加上[contenthash:8]
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: 'static/fonts/[name].[contenthash:8][ext]', // 加上[contenthash:8]
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: 'static/media/[name].[contenthash:8][ext]', // 加上[contenthash:8]
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // 进度条
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
  ],
};
