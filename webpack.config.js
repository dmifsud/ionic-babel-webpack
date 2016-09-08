var path            = require('path'),
  webpack           = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CordovaPlugin     = require('webpack-cordova-plugin');

const rootDirectory = `${__dirname}/src`;


module.exports = {
  context: rootDirectory,
  entry: {
    app: ['./js/app.js'],
    css: ['./lib/ionic/css/ionic.css', './css/style.css']
  },
  output: {
    filename: '[name].js',
    sourceMapFileName: '[name].map',
    path: __dirname + '/www'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
    root: rootDirectory
  },
  devServer: {
    port: 5000
  },
  module: {
    loaders: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components|ionic.bundle.js)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.(css)$/,
          loader: 'style!css'
        },
        {
          test: /(.(png|jpg|woff|ttf|eot|svg)(\?(v=([0-9].)+([0-9]))))|(.(png|jpg|woff|ttf|eot|svg))$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.html$/,
          loader: "html"
        }
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      body: 'Understanding webpack :)',
      entry: 'app/index.ejs', // Load a custom template (ejs by default but can be changed)
      fileName: 'index.html',
      template: 'index.ejs',
      hash: true
    }),
    new CordovaPlugin({
      config: 'config.xml',                     // Location of Cordova' config.xml (will be created if not found)
      // src: 'boilerplate/index.html',            // Set entry-point of cordova in config.xml
      version: true,                            // Set config.xml' version. (true = use version from package.json)
    })
  ]
}
