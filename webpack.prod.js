const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?sourceMap', 'sass-loader']
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].scss'
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
  ]
});
