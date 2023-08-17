const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // set mode to production
  entry: './src/init.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output to a "dist" directory
    publicPath: '/'
  },
  resolve: {
    alias: {
      gsap: path.resolve(__dirname, 'gsap/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin's loader
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin's loader
          'css-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // Minimize the extracted CSS
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // Output extracted CSS to files
      chunkFilename: '[id].css',
    })
  ]
};
