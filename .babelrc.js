// const BABEL_MODULES = process.env.BABEL_MODULES
// const modules = BABEL_MODULES === undefined ? 'auto' : BABEL_MODULES

// module.exports = {
//     presets: [
//         ['@babel/preset-env', { modules }],
//         '@babel/preset-react',
//         '@babel/preset-typescript'
//     ],
//     plugins: [
//         '@babel/plugin-syntax-dynamic-import',
//         '@babel/plugin-proposal-class-properties',
//         '@babel/plugin-proposal-optional-chaining'
//     ]
// }

module.exports = (api, options) => {
    const { NODE_ENV } = options || process.env
    const dev = NODE_ENV === 'development'
    const modules = NODE_ENV === 'esm' ? false : 'commonjs'

    if (api) {
        api.cache(() => NODE_ENV)
    }

    const plugins = [
        'lodash',
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-export-default-from',
        ['@babel/plugin-transform-runtime', { useESModules: !modules }]
    ]

    if (modules) {
        plugins.push('add-module-exports')
    }

    return {
        presets: [
            ['@babel/preset-env', { modules, loose: true }],
            ['@babel/preset-react', { development: dev }],
            '@babel/typescript'
        ],
        plugins
    }
}
