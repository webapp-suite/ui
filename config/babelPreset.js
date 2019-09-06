const BABEL_MODULES = process.env.BABEL_MODULES
const modules = BABEL_MODULES === undefined ? 'auto' : BABEL_MODULES

module.exports = () => ({
  presets: [
    ['@babel/preset-env', { modules }],
    '@babel/preset-react'
  ]
})
