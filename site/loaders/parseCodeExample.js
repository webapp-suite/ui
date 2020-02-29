const visit = require('unist-util-visit')
const mode = require('../constant').EXAMPLE_MODE

module.exports = () => (tree, file) => {
  visit(tree, 'code', node => {
    if (/jsx?/.test(node.lang) && Object.values(mode).includes(node.meta)) {
      node.type = node.lang
      /** get example component name */
      const code = node.value
      const componentName = node.value.match(
        /(?:var|let|const|class|function)\s(\w+)/
      )[1]
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
