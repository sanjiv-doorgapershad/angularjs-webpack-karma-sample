const path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
      ignored: /node-modules/
  },
  entry: {
    main: './app/index.js',
    dependencies: './app/dependencies.js',
    style: './app/index.style.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /.html$/,
        exclude: /index.html$/,
        use: 'html-loader'
      },
      {
        test: /.scss$/,
        exclude: /index.html$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      }
    ]
  }
};