var webpack = require('webpack')
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = [{
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'progressivehn',
        filename: 'sw.js',
        maximumFileSizeToCacheInBytes: 4194304,
        staticFileGlobs: [
          '/index.html',
          '/bundle.js',
          '/1.bundle.js'
        ],
      }
    ),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
    ]
  }
}
]
