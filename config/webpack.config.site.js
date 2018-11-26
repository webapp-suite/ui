const webpack = require('webpack')
const path = require('path')
const rimraf = require('rimraf')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const fs = require('fs')
const Prism = require('../site/3rdParty/prism/prism.js')
const sitePath = path.resolve(__dirname, '../site')
const sourcePath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../site/dist')

const isProduction = process.env.SITE_ENV === 'production'

rimraf.sync(outputPath)

const config = {
  entry: {
    site: `${sitePath}/router.js`
  },
  output: {
    path: outputPath,
    filename: '[name]' + (isProduction ? '.[hash]' : '') + '.js',
    chunkFilename: '[id]' + (isProduction ? '.[hash]' : '') + '.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
        // babelrc: false,
        // extends: 'config/.babelrc'
      },
      exclude: /node_modules/
    }, {
      test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader?name=files/[hash].[ext]'
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: {
          config: {
            path: 'config/postcss.config.js'
          }
        }
      }, {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      }]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader?config.path=config/postcss.config.js'
    }, {
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader',
          options: {highlight: (code, lang) => Prism.highlight(code, Prism.languages[lang])}
        }
      ]
    }, {
      test: /\.dox$/,
      loader: 'babel-loader!dox-loader'
    }]
  },
  resolveLoader: {
    alias: {
      'dox-loader': path.join(__dirname, '../site/loaders/dox')
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sitePath,
      'node_modules'
    ],
    alias: {
      'earth-ui/lib': `${sourcePath}/components`,
      'widgets': `${sitePath}/widgets`,
      'ui-variables': `${sourcePath}/styles/ui-variables.less`,
      'ui-mixins': `${sourcePath}/styles/ui-mixins.less`,
      'ui': `${sourcePath}/styles/index.less`,
      'dox': `${sitePath}/styles/index.less`
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes'
  },
  plugins: []
}

if (isProduction) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'SITE_ENV': JSON.stringify('production')
    }
  }))
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }))
} else {
  config.plugins.push(new LiveReloadPlugin({
    appendScriptTag: true
  }))
}

config.plugins.push(new webpack.DefinePlugin({
  'prefixCls': JSON.stringify('earthui')
}))

// Generate index.html in 'site' dir
config.plugins.push(function () {
  this.plugin('done', function (statsData) {
    const stats = statsData.toJson()
    let html = fs.readFileSync(`${sitePath}/index.html`, 'utf8')
    const distPath = config.output.publicPath + 'site.' + (isProduction ? stats.hash + '.' : '') + 'js'
    html = html.replace(/(<script src=").*?dist.*?(")/, '$1' + distPath + '$2')
    fs.writeFileSync(path.join(`${sitePath}/index.html`), html)
  })
})

module.exports = config
