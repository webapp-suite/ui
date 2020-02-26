const visit = require('unist-util-visit')

module.exports = () => (tree, file) => {
  visit(tree, 'code', node => {
    if (/jsx?/.test(node.lang)) {
      node.type = node.lang
      /** get example component name */
      const code = node.value
      const componentName = node.value.match(
        /(?:var|let|const|class|function)\s(\w+)/
      )[1]
      node.value = `
      <Example renderModel="${node.meta || 'left'}" code={\`${code}\`}>
        <${componentName} />
      </Example>
    `
    }
  })
}
