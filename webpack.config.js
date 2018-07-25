module.exports = {
   entry: './src/index.jsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
   },
   mode: 'development',
   module: {
      rules: [{
         test: /.jsx?$/,
         use: [{
            loader: 'babel-loader',
            options: {
               presets: ['react']
            }
         }]
      }] 
   }
}