/**
 * Config File to Run Demo
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
  },
  entry: './demo/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@unfocused/Spawn': path.resolve(__dirname, './src/index.js')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Warp Gate',
    })
  ]
};