const path = require('path')

module.exports = async function wp (moduleOptions) {
  const options = Object.assign({}, moduleOptions)
  this.addPlugin({
    options,
    src: path.resolve(__dirname, 'wp.plugin.js'),
    fileName: 'wp.plugin.js'
  })
}
// module.exports.meta = require('../package.json')
