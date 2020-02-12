const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/main.js',
 
    output: {
       path:__dirname+'/dist',
       filename: 'index.js',
    },
 
    devServer: {
       inline: true,
       port: 8080
    },
 
    module: {
        rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
          },
 
             {
              test: /\.css$/,
              loader: 'style-loader!css-loader' 
           },
           {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
         test: /\.(png|jpe?g|gif)$/i,
         use: [
            {
               loader: 'file-loader',
            },
         ]
      }
       ]
    },
    plugins: [
        new CopyPlugin([
            {from:'./index.html',to:'./'}
        ]),
        new CopyPlugin([
         {from:'./src/images',to:'./images'}
     ])
    ]
 }
 
 module.exports = config;