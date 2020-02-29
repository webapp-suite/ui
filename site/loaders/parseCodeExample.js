const visit = require('unist-util-visit')
const constant = require('../constant')

module.exports = () => (tree, file) => {
  visit(tree, 'code', node => {
    if (
      /jsx?/.test(node.lang) &&
      Object.values(constant.EXAMPLE_MODE).includes(node.meta)
    ) {
      node.type = node.lang
      /** get example component name */
      const code = node.value
      const componentName = code.match(constant.COMPONENT_NAME_REGEX)[1]
      if (node.meta === 'run') {
        node.value = `<Example renderModel="${node.meta ||
          'left'}" code={\`${code}\`} onRunClick={() => ${componentName}()} />`
      } else {
        node.value = `
      <Example renderModel="${node.meta || 'left'}" code={\`${code}\`}>
        <${componentName} />
      </Example>
    `
      }
    }
  })
}
