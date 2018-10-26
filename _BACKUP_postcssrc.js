const aliases = require('./aliases.config')
const typographyConfig = require('./config/typography')
const tailwindConfig = require('./config/tailwind')

module.exports = {
  plugins: [
    // https://github.com/postcss/postcss-import
    require('postcss-import')({
      resolve: id => {
        for (const key in aliases) {
          return id.includes(key) ? id.replace(key, aliases[key]) : id
        }
      }
    }),
    require('tailwindcss')(tailwindConfig),
    require('postcss-typography')(typographyConfig),
    require('postcss-nested')(),
    require('postcss-preset-env')(),
    require('autoprefixer')({ grid: true }),

    require('postcss-flexbugs-fixes'),
    require('css-mqpacker')({ sort: true })
  ]
}
