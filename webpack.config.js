const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        test: /\.css$/,
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
        test: /\.(jpe?g|png|git|svg)$/,
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
};

module.exports = config;
