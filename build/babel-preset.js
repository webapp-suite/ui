const BABEL_ENV = process.env.BABEL_ENV
const building = BABEL_ENV !== undefined && BABEL_ENV !== 'cjs'

module.exports = () => ({
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: building ? false : 'commonjs'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-optional-chaining', { loose: false }]
  ]
})
