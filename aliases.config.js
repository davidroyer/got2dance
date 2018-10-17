/**
 * Get absolute path of a file
 * @param {string} path Relative file path
 * @return {string} Absolute file path
 */
function resolve (path) {
  return require('path').join(__dirname, path)
}

module.exports = {
  '@src': resolve('./'),
  '@components': resolve('./components'),
  '@layouts': resolve('./layouts'),
  '@middleware': resolve('./middleware'),
  '@pages': resolve('./pages'),
  '@plugins': resolve('./plugins'),
  '@store': resolve('./store'),
  '@styles': resolve('./assets/styles'),
  '@images': resolve('./assets/images')
}
