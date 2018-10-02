const path = require('path')

module.exports = async function wp (moduleOptions) {
  const options = Object.assign({}, this.options.wp, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'wp.plugin.js'),
    fileName: 'wp.plugin.js',
    options
  })
}
// module.exports.meta = require('../package.json')

const { resolve } = require('path')
//
// module.exports = async function module (moduleOptions) {
//   // const options = Object.assign({}, moduleOptions)
//   const options = Object.assign({}, this.options.wp, moduleOptions)
//   this.addPlugin({
//     src: resolve(__dirname, 'templates/plugin.js'),
//     fileName: 'wpapi.js',
//     options
//   })
// }
// module.exports.meta = require('../package.json')
