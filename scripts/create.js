const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const _template = require('lodash.template')

let option = process.argv.slice(2)
let name = option[0]

if (name) {
  let componentDir = path.join(__dirname, '../src/components')
  let template = path.join(__dirname, 'template')

  // after node-10.12.0: https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_options
  fs.mkdirSync(`${componentDir}/${name}/docs`, { recursive: true })

  let files = [
    {
      source: `${template}/index.js`,
      target: `${componentDir}/${name}/index.js`
    },
    {
      source: `${template}/index.less`,
      target: `${componentDir}/${name}/index.less`
    },
    {
      source: `${template}/dox.js`,
      target: `${componentDir}/${name}/docs/${name}.dox`
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

  try {
    fs.appendFileSync(`${componentDir}/index.js`, `export { default as ${name} } from './${name}'\n`)
    console.log('Updated component/index.js')
  } catch (err) {
    console.log(chalk.red(
      'Errors occur when update component/index.js'
    ))
  }

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
