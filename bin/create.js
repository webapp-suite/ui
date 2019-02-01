const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const _template = require('lodash.template')

let option = process.argv.slice(2)
let name = option[0]

if (name) {
  let dir = path.join(__dirname, `../src/components/${name}`)
  let template = path.join(__dirname, 'template')

  // TODO: replace with fs.mkdirSync(`${dir}/docs`, { recursive: true }) after node-10.12.0
  // https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_options
  fs.mkdirSync(dir)
  fs.mkdirSync(`${dir}/docs`)

  let files = [
    {
      source: `${template}/index.js`,
      target: `${dir}/index.js`
    },
    {
      source: `${template}/index.less`,
      target: `${dir}/index.less`
    },
    {
      source: `${template}/dox.js`,
      target: `${dir}/docs/${name}.dox`
    }
  ]

  let context = {
    name: name,
    className: name
      .replace(/([A-Z])/g, '-$1')
      .slice(1)
      .toLowerCase()
  }
  files.forEach(function (item) {
    fs.writeFileSync(
      item.target,
      _template(fs.readFileSync(item.source, 'utf8'))(context)
    )
  })

  console.log(
    chalk.green('Build success!'),
    `Open: http://localhost:3003/apps/components/${name}`
  )
} else {
  console.log(
    chalk.red(
      'No component name provided, try `npm run create MyComponent` instead.'
    )
  )
}
