const BABEL_ENV = process.env.BABEL_ENV
const building = BABEL_ENV !== undefined && BABEL_ENV !== 'cjs'

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: building ? false : 'commonjs'
      }
    ],
    '@babel/preset-react'
  ]
})
