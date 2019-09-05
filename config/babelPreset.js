const BABEL_ENV = process.env.BABEL_ENV
const modules = BABEL_ENV === undefined ? 'auto' : BABEL_ENV

module.exports = () => ({
  presets: [
    ['@babel/preset-env', { modules }],
    '@babel/preset-react'
  ]
})
