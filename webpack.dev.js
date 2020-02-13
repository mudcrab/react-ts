const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PORT = process.env.PORT || 7021;
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: PORT,
    host: '0.0.0.0',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:7011'
    }
  }
});
