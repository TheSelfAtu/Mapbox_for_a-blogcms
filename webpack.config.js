module.exports = {
    mode: 'development',
    entry:{
        mapboxunit: './js/mapboxunitbeforewebpack.js',
        mapboxcluster:'./js/mapboxclusterbeforewebpack.js',
        mapboxfield:'./js/mapboxfieldbeforewebpack.js',
    }, 
    output: {
     path: `${__dirname}/js`,
    },
    module: {
     rules: [
      {
       test: /.js$/,
       use: {
        loader: 'babel-loader',
        options: {
         presets: [ '@babel/preset-env' ]
        }
       }
      }
     ]
    },
    devtool: 'inline-source-map',
    devServer: {
     contentBase: `${__dirname}/dist`,
     port: 8080,
     open: true
    }
   }