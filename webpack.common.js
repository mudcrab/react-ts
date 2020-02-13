const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    bundle: ['./src/index.tsx', './src/scss/main.scss']
  },

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    modules: ['src', 'node_modules']
  },

  plugins: [
    new CopyPlugin([{ from: 'assets', to: '' }]),
    new HtmlWebpackPlugin({
      base: '/',
      template: './assets/index.html'
    }),
    new ManifestPlugin()
  ],

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: false
  }
};
