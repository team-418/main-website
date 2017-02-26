module.exports = {
  devtool: 'eval',
  context: __dirname + "/app/js",

  entry: "./styleguide.js",

  output: {
    filename: "styleguide.js",
    path:__dirname + '/app/assets/javascripts'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    // Load the react-hot-loader
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015&presets[]=react'] 
      }
    ]
  }
};
