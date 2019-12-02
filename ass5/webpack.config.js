import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
   entry: './js/src/main.js',
   output : {
       path: path.resolve(__dirname, 'build'),
       filename: 'main.js'
   },
   module: {
       rules: [
           {test: /\.(m?js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        
        }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: './index.html',
           inject: true,
           favicon: './favicon.ico',
           filename: './index.html'
       }),
       new webpack.HotModuleReplacementPlugin()
   ],
   devServer : {
       contentBase: './build/',
       hot: true
   }
}