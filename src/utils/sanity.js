const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: '5rep0ijd',
  dataset: 'production',
})
