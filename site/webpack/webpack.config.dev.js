const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const DashbordPlugin = require('webpack-dashboard/plugin')
const baseWebpackConfig = require('./webpack.config.base')
const host = process.env.HOST || 'localhost'
const port = +process.env.PORT || 3001
const timeout = +process.env.TIMEOUT || 2000
const outputPath = '/dist/'

const reactHMR = [
  'react-hot-loader/patch', // 开启 React 代码的模块热替换(HMR)
  `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr&timeout=${timeout}&reload=true`,
  // 为热替换(HMR)打包好代码 only- 意味着只有成功更新运行代码才会执行热替换(HMR)
  'webpack/hot/only-dev-server'
]

baseWebpackConfig.entry.app.push(...reactHMR)

module.exports = merge(baseWebpackConfig, {
  output: {
    path: outputPath,
    publicPath: outputPath
  },
  devtool: 'source-map',
  plugins: [
    // This plugin is for defining global variables for different environment
    // You should config the corresponding `.eslintrc`.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashbordPlugin()
  ]
})
