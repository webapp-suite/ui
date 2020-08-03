const BABEL_MODULES = process.env.BABEL_MODULES
const modules = BABEL_MODULES === undefined ? 'auto' : BABEL_MODULES

module.exports = {
    presets: [
        ['@babel/preset-env', { modules }],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining'
    ]
}
