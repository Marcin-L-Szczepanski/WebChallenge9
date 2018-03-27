const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/scripts/main.js',
    './src/styles/main.scss'
  ],
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.bundle.css')
  ]
}