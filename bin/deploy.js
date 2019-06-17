const ghpages = require('gh-pages')

ghpages.publish('site', {
  message: 'auto-deployed by gh-pages'
})
