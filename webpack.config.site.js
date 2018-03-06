const webpack = require('webpack')
const path = require('path')
const fs = require('fs-extra');
const rimraf = require('rimraf')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const beautify = require('code-beautify')
const version = fs.readJsonSync('package.json').version;
const sourcePath = path.resolve(__dirname, './site')
const outputPath = path.resolve(__dirname, `./site/versions/${version}`)

const isProduction = process.argv.slice(2)[0] === '-p'

rimraf.sync(outputPath)

const config = {
  entry: {
    site: `${sourcePath}/index.js`
  },
  output: {
    path: outputPath,
    filename: '[name]' + (isProduction ? '.[hash]' : '') + '.js',
    chunkFilename: '[id]' + (isProduction ? '.[hash]' : '') + '.js',
    publicPath: `/versions/${version}/`
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader?name=files/[hash].[ext]'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader!postcss-loader'
    }, {
      test: /\.md$/,
      loader: 'html-loader!markdown-loader'
    }, {
      test: /\.doc$/,
      loader: 'babel-loader!doc-loader'
    }]
  },
  resolveLoader: {
    alias: {
      'doc-loader': path.join(__dirname, './site/loaders/doc')
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ],
    alias: {
      'earth-ui': path.resolve(__dirname, './src/components'),
      'public': path.resolve(__dirname, './site/public'),
      'scaffolding': path.resolve(__dirname, '../create-earth-app'),
      'doc': path.join(__dirname, './site/loaders/doc'),
      'variable.less': path.resolve(__dirname, './src/styles/variable.less'),
      'mixin.less': path.resolve(__dirname, './src/styles/mixin.less'),
      'core.less': path.resolve(__dirname, './src/styles/core.less')
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.md$/,
      options: {
        markdownLoader: { highlight: (code, lang) => beautify(code, lang) }
      }
    })
  ]
}

if (isProduction) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
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

// Generate index.html in 'site' dir
config.plugins.push(function() {
  this.plugin('done', function(statsData) {
    const stats = statsData.toJson()
    let html = fs.readFileSync(`${sourcePath}/index.html`, 'utf8')
    const distPath = config.output.publicPath + 'site.' + (isProduction ? stats.hash + '.' : '') + 'js'
    html = html.replace(/(<script src=").*?(")/, '$1' + distPath + '$2')
    fs.writeFileSync(path.join(`${sourcePath}/index.html`), html)
  })
})

module.exports = config
