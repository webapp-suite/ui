const path = require('path')
const rimraf = require('rimraf')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const sourcePath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../dist')
const entryName = `earth-ui.min`

rimraf.sync(outputPath)

const config = {
  entry: {},
  output: {
    path: outputPath,
    publicPath: '../',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: sourcePath
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({})]
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ],
        include: sourcePath
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({})]
            }
          }
        ],
        include: sourcePath
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['url-loader']
      },
      {
        test: /\.snap$/,
        use: ['ignore-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'ui-variables': `${sourcePath}/styles/ui-variables.less`,
      'ui-mixins': `${sourcePath}/styles/ui-mixins.less`
    }
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      prefixCls: JSON.stringify('earthui')
    }),
    new MiniCssExtractPlugin('[name].css')
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: true,
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      })
    ]
  }
}

config.entry[entryName] = [`${sourcePath}/components/index.js`]

module.exports = config
