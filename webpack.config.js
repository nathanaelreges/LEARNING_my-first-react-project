webpack = require('webpack')

module.exports = {
   entry: './src/index.jsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
   },
   mode: 'production',
   module: {
      rules: [{
         test: /.jsx?$/,
         exclude: /node_modules/,
         use: [{
            loader: 'babel-loader',
            options: {
               presets: ['react']
            }
         }]
      }] 
   },
   plugins: [
      new webpack.DefinePlugin({ 'process.NODE_ENV' : JSON.stringify("production" )})
   ]
}