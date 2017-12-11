// var webpack = require("webpack")
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tariff_chunk.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['latest', 'react', 'stage-0']
          }
        }
      ]
    }]
  }
}
