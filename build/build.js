const execSync = require('child_process').execSync

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

console.log('\nBuilding ES modules ...')
exec(
  'rimraf es && NODE_ENV=production babel src -d es --ignore __tests__ && gulp --gulpfile config/gulpfile.js',
  {
    BABEL_ENV: 'es'
  }
)

console.log('\nBuilding CommonJS modules ...')
exec(
  'rimraf lib && NODE_ENV=production  babel src -d lib --ignore __tests__ && gulp --gulpfile config/gulpfile.js',
  {
    BABEL_ENV: 'cjs'
  }
)

console.log('\nBuilding UMD modules ...')
exec(
  'rimraf dist && webpack --progress --mode=production --config config/webpack.config.js',
  {
    BABEL_ENV: 'cjs'
  }
)
