const imports = {
  list: [],
  variables: [],

  add (item) {
    const match = item.match(/import (.*?) from(.*)/)
    if (match) {
      const variables = match[1].split(/,|\{|\}/).map(v => v.trim())
      let hasNewVariate = false
      variables.forEach(v => {
        if (!v) return
        if (imports.variables.indexOf(v) === -1) {
          hasNewVariate = true
          imports.variables.push(v)
        } else {
          match[1] = match[1].replace(new RegExp(`\\b${v}\\b`), '')
        }
      })
      if (hasNewVariate) {
        match[1] = match[1].replace(/^{[\s*,]*/g, '{ ')
        imports.list.push(`import ${match[1]} from${match[2]}`)
      }
    }
  },

  getAll () {
    return imports.list
  },

  reset () {
    imports.list = []
    imports.variables = []
  }
}

module.exports = imports
