const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const sourcePath = path.resolve(__dirname, '../src')
const viewPath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../dist/')

module.exports = {
  entry: {
    app: [path.resolve(viewPath, 'app.js')]
  },
  output: {
    path: outputPath,
    publicPath: outputPath,
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: sourcePath
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        }),
        include: path.resolve(viewPath, 'common/ui')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: ['url-loader?limit=100000']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ],
    alias: {
      'variable.less': path.resolve(viewPath, 'common/style/variable.less'),
      'mixin.less': path.resolve(viewPath, 'common/style/mixin.less'),
      'core.less': path.resolve(viewPath, 'common/style/core.less')
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
      filename: 'js/[name].js'
    })
  ]
}
