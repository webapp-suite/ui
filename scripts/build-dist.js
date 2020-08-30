const execSync = require('child_process').execSync

const exec = (command, extraEnv) =>
    execSync(command, {
        stdio: 'inherit',
        env: Object.assign({}, process.env, extraEnv)
    })

console.log('\nBuilding UMD min files ...')
exec('rimraf dist && webpack --progress', {
    BABEL_MODULES: 'commonjs',
    NODE_ENV: 'production'
})
