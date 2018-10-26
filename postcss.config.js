const typographyConfig = require('./config/typography')
const tailwindConfig = require('./config/tailwind')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')(tailwindConfig),
    require('postcss-typography')(typographyConfig),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('autoprefixer')({ grid: true }),
    require('postcss-flexbugs-fixes'),
    require('css-mqpacker')({ sort: true })
  ]
}
