const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src')+'/index.ts',
  watch: true,
  watchOptions: {
    poll: 1000
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
