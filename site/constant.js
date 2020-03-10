exports.EXAMPLE_MODE = {
  TABS: 'tabs',
  VERTICAL: 'vertical',
  RENDER_ONLY: 'renderOnly',
  RUN: 'run'
}

exports.COMPONENT_NAME_REGEX = /(?:var|let|const|class|function)\s(\w+)/
exports.DESCRIPTION_REGEX = /\r?\n?\s*\*\s?/g
exports.IMPORT_REGEX = /import\s[\w{](?:\w|\s|,|\n|\r|{)*}?\sfrom\s.*/g
exports.EXAMPLE_CODE_REGEX = /```jsx?\s(?:tabs|vertical|renderOnly|run).*[\n\r]((.(?!``)|\n|\r)+)/g
exports.TRANSFER_STRING_TEMPLATE_SYMBOL_REGEX = /`([^`]*)\${([^`]*)`/g
exports.TRANSFER_STRING_TEMPLATE_BACKQUOTE_REGEX = /`([^`]*)`/g
exports.TRANSFER_STRING_TEMPLATE_DOLLAR_SYMBOL_REGEX = /\$(?={)/g
