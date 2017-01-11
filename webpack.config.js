module.exports = {
  //By default the starting context is __dirname so use relative paths.
  entry: './js/ClientApp.jsx',
  
  output: {
    //path: './public',
    filename: './public/bundle.js'
  },

  module: {
    // do it before conversion to es5 and jsx
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        //seems exclude and include only work on absolute paths
        //exclude: /node_modules/,
        include: [__dirname + '/js'],
      }
    ],

    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        //seems exclude and include only work on absolute paths
        //exclude: /node_modules/,
        include: [__dirname + '/js'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      //json loader as seems !json doesnt work with enzyme shallow rendering.
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  // first use the filename as it is without adding an extension then if can't
  // find then use with .js extension(reqd for things in react library), if 
  // still cant find then use jsx extension
  // if we dont use resolve then by default it does ['', '.js']
  resolve: {
   extensions: ['', '.js', '.jsx']
  }

};