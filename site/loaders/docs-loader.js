const fs = require('fs')
const path = require('path')
const reactDocs = require('react-docgen')
const matter = require('gray-matter')
const imports = require('./imports')

const getSourceCode = compnentName => {
  let dir = path.join(__dirname, '../../src/components/' + compnentName)
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

const generateItemProps = componentName => {
  const componentProps = reactDocs.parse(getSourceCode(componentName))

  const props = Object.keys(componentProps.props).map(key => {
    let {
      type,
      required,
      description: desc,
      defaultValue
    } = componentProps.props[key]
    if (Array.isArray(type.value)) {
      type = type.value.map(v => v.name || v.value).join('|')
    } else {
      type = type.name
    }
    return {
      name: key,
      type,
      required,
      desc,
      default: defaultValue && defaultValue.value
    }
  })
  return {
    name: componentProps.displayName,
    props
  }
}

const getExampleCodes = content => {
  const exampleCodes = []
  content.replace(/```jsx?.*(?:\n|\r)(([^```]|\n|\r)+)```/g, (match, $1) => {
    exampleCodes.push($1)
  })
  return exampleCodes
}

const getImportsFromExample = exampleCode => {
  return exampleCode.match(/import .*/g)
}

const getComponentsFromExample = exampleCode => {
  return exampleCode.replace(/import .*/g, '').trim()
}

module.exports = async function (source) {
  this.cacheable()
  // const callback = this.async()

  const { content, data } = matter(source)
  let docs = []
  if (Array.isArray(data.props)) {
    docs = data.props.map(componentName => {
      return generateItemProps(componentName)
    })
  } else {
    docs.push(generateItemProps(data.props))
  }

  imports.reset()

  imports.add("import { Row, Col } from 'earth-ui';")
  imports.add("import Example from 'widgets/Example';")
  imports.add("import Doc from 'widgets/Doc';")
  imports.add("import Markdown from 'widgets/Markdown';")

  const exampleCodes = getExampleCodes(content)
  const componentsFromExample = []

  exampleCodes.forEach(ec => {
    const importsFromExample = getImportsFromExample(ec)
    if (importsFromExample) {
      importsFromExample.forEach(item => imports.add(item.trim()))
    }
    componentsFromExample.push(getComponentsFromExample(ec))
  })

  const res = `
${imports.getAll().join('\r\n')}
const docs = ${JSON.stringify(docs)}
export ${componentsFromExample[2]}
export default ({...props}) => {
  return (
    <div>
      {props.children}
      {docs.length > 0 && (
        <Row>
          <Col col="md-16">{docs.map(doc => <Doc key={doc.name} {...doc} />)}</Col>
        </Row>
      )}
    </div>
  )
}
${content}
  `

  return res
}
