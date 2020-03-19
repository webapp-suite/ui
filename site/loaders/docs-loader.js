const matter = require('gray-matter')
const imports = require('./imports')
const constant = require('../constant')
const generateItemProps = require('./generateItemProps')

const getExampleCodes = content => {
  const exampleCodes = []
  content.replace(constant.EXAMPLE_CODE_REGEX, (match, $1) => {
    exampleCodes.push($1)
  })
  return exampleCodes
}

const getImportsFromExample = exampleCode => {
  return exampleCode.match(constant.IMPORT_REGEX)
}

const getComponentsFromExample = exampleCode => {
  return exampleCode.replace(constant.IMPORT_REGEX, '').trim()
}

module.exports = function (source) {
  this.cacheable()

  const { content, data } = matter(source)
  let propsTables = []
  if (data.props) {
    if (Array.isArray(data.props)) {
      propsTables = data.props.map(componentName => {
        return generateItemProps(componentName)
      })
    } else {
      propsTables.push(generateItemProps(data.props))
    }
  }

  const col = data.col || 16

  imports.reset()

  imports.add("import { Row, Col } from '@webapps-ui/core-react';")
  imports.add("import Example from 'widgets/Example';")
  imports.add("import PropsTable from 'widgets/PropsTable';")
  imports.add("import Markdown from 'widgets/Markdown';")

  const exampleCodes = getExampleCodes(content)
  const componentsFromExample = []

  exampleCodes.length > 0 &&
    exampleCodes.forEach(ec => {
      const importsFromExample = getImportsFromExample(ec)
      if (importsFromExample) {
        importsFromExample.forEach(item => imports.add(item.trim()))
      }
      componentsFromExample.push(getComponentsFromExample(ec))
    })

  const exportComponentsFromExample = componentsFromExample.length
    ? `export ${componentsFromExample.join('\n\nexport ')}`
    : ''

  const res = `
${imports.getAll().join('\n\n')}

${exportComponentsFromExample}

export const propsTables = ${JSON.stringify(propsTables)};

export const col = ${col};

export default ({...props}) => {
  return (
    <div>
      <Row>
        <Col col="md-${col}"><div className="markdown">{props.children}</div></Col>
      </Row>
      {propsTables.length > 0 && (
        <Row>
          <Col col="md-${col}">{propsTables.map(pt => <PropsTable key={pt.name} {...pt} />)}</Col>
        </Row>
      )}
    </div>
  )
}

${content}
`

  return res
}
