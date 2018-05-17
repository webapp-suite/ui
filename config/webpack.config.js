const path = require('path')
// const fs = require('fs')
const rimraf = require('rimraf')
// const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const version = JSON.parse(fs.readFileSync('package.json')).version
const sourcePath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../dist')
// const entryName = `earth-ui-${version}.min`
const entryName = `earth-ui`

rimraf.sync(outputPath)

const config = {
  entry: {},
  output: {
    path: outputPath,
    publicPath: '../',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loaders: 'babel-loader',
      include: sourcePath
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader?config.path=config/postcss.config.js', 'less-loader']
      }),
      include: sourcePath
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader?config.path=config/postcss.config.js']
      }),
      include: sourcePath
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: ['url-loader']
    }]
  },
  resolve: {
    alias: {
      'variable.less': `${sourcePath}/styles/variable.less`,
      'mixin.less': `${sourcePath}/styles/mixin.less`,
      'core.less': `${sourcePath}/styles/core.less`
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     properties: false
    //   }
    // })
  ]
}

config.entry[entryName] = [`${sourcePath}/components/index.js`]

module.exports = config
