const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   module: {
    rules: [
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      { 
        test: /\.svg$/, 
        use: 'svg-inline-loader',
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'To-Do List',
       favicon: './src/favicon.png',
     }),
     new MomentLocalesPlugin(),
   ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
  optimization: {
    runtimeChunk: 'single',
  },
 };
