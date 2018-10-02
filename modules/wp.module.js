const path = require('path')

module.exports = async function wp (moduleOptions) {
  const options = Object.assign({}, moduleOptions, this.options.wp)
  this.addPlugin({
    src: path.resolve(__dirname, 'wp.plugin.js'),
    fileName: 'wp.plugin.js',
    options
  })
}
// module.exports.meta = require('../package.json')
