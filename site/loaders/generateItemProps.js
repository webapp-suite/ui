/**
 * This source code is to handle the `prop` in gray matter mdx file.
 * Based on react-docgen: http://reactcommunity.org/react-docgen/
 *
 */
const fs = require('fs')
const path = require('path')
const reactDocs = require('react-docgen')
const marked = require('marked')
const constant = require('../constant')

const getSourceCode = componentName => {
  let dir = path.join(__dirname, '../../src/components/' + componentName)
  try {
    if (fs.statSync(dir).isDirectory()) {
      dir += '/index.js'
    } else {
      dir += '.js'
    }
  } catch (e) {
    dir += '.js'
  }
  return fs.readFileSync(dir, 'utf8')
}

const generateShapeType = value => {
  const str = Object.keys(value)
    .map(key => `"${key}": ${value[key].name}`)
    .join(', ')
  return `{${str}}`
}

const generateItemProps = componentName => {
  const componentProps = reactDocs.parse(getSourceCode(componentName))

  const props = Object.keys(componentProps.props)
    .map(key => {
      let { type, required, description, defaultValue } = componentProps.props[
        key
      ]
      if (Array.isArray(type.value)) {
        type = type.value.map(v => v.name || v.value).join(' | ') // \s for break-word
      } else if (type.name === 'arrayOf') {
        if (type.value.name === 'shape') {
          type = `Array<${generateShapeType(type.value.value)}>`
        } else {
          type = type.value.name + '[]'
        }
      } else if (type.name === 'shape') {
        type = generateShapeType(type.value)
      } else {
        type = type.name
      }
      return {
        name: key,
        type,
        required,
        description: marked(
          description.replace(constant.DESCRIPTION_REGEX, '\r\n').trim()
        ),
        default: defaultValue && defaultValue.value
      }
    })
    .filter(v => !/^(customProp|className|children)/.test(v.name))
  return {
    name: componentProps.displayName,
    props
  }
}

module.exports = generateItemProps
