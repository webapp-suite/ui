const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
// const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
    // new WebpackIsomorphicToolsPlugin(require('./isomorphic.config.js'))
  ]
})
