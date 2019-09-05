const execSync = require('child_process').execSync

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

console.log('\nBuilding ES modules ...')
exec(
  'rimraf es && babel src -d es --ignore __tests__ && gulp trim:es --gulpfile config/gulpfile.js',
  {
    BABEL_ENV: 'es',
    NODE_ENV: 'production'
  }
)

console.log('\nBuilding CommonJS modules ...')
exec(
  'rimraf lib && babel src -d lib --ignore __tests__ && gulp trim:lib --gulpfile config/gulpfile.js',
  {
    BABEL_ENV: 'cjs',
    NODE_ENV: 'production'
  }
)

console.log('\nBuilding UMD min files ...')
exec('rimraf dist && webpack --progress --config config/webpack.config.js', {
  NODE_ENV: 'production'
})
