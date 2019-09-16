const webpack = require('webpack')
const path = require('path')
const rimraf = require('rimraf')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const autoprefixer = require('autoprefixer')
const Prism = require('../site/3rdParty/prism/prism.js')
const sitePath = path.resolve(__dirname, '../site')
const sourcePath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../site/dist')

const isProduction = process.env.NODE_ENV === 'production'

rimraf.sync(outputPath)

const config = {
  entry: {
    site: `${sitePath}/router.js`
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'files/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
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
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({})]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              highlight: (code, lang) =>
                Prism.highlight(code, Prism.languages[lang])
            }
          }
        ]
      },
      {
        test: /\.dox$/,
        use: ['babel-loader', 'dox-loader']
      },
      {
        test: /\.snap$/,
        use: ['ignore-loader']
      }
    ]
  },
  resolveLoader: {
    alias: {
      'dox-loader': path.join(__dirname, '../site/loaders/dox')
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [sitePath, 'node_modules'],
    alias: {
      'earth-ui': `${sourcePath}/components`,
      widgets: `${sitePath}/widgets`,
      'ui-variables': `${sourcePath}/styles/ui-variables.less`,
      'ui-mixins': `${sourcePath}/styles/ui-mixins.less`,
      ui: `${sourcePath}/styles/index.less`,
      dox: `${sitePath}/styles/index.less`
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes'
  },
  plugins: [
    new webpack.DefinePlugin({
      prefixCls: JSON.stringify('earthui')
    })
  ],
  optimization: {
    minimize: false
  }
}

if (!isProduction) {
  config.plugins.push(
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new FriendlyErrorsWebpackPlugin()
  )
}

module.exports = config
