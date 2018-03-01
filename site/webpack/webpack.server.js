const express = require('express')
const webpack = require('webpack')
const webpackDevConfig = require('./webpack.config.dev')

const compiler = webpack(webpackDevConfig)
const host = process.env.HOST || 'localhost'
const port = +process.env.PORT || 3001
const serverOptions = {
  contentBase: `http://${host}:${port}`,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackDevConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true
  }
}

const app = express()

// --------------------------------------------------------------------------
// Apply Webpack HMR Middleware
// --------------------------------------------------------------------------
console.log('Enable webpack dev and HMR middleware')
app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))

app.listen(port, function onAppListening (err) {
  if (err) {
    console.error(err)
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port)
  }
})
