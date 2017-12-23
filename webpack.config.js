const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom', 'jquery'];

module.exports = {
  entry: {
    bundle: ['react-hot-loader/patch', './src/js/app.jsx'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(svg|png|jpe?g|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
              limit: 30000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src/js'), path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
