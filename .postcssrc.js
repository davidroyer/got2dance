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
    // https://tailwindcss.com/docs/configuration
    require('tailwindcss')(tailwindConfig),
    // https://github.com/seaneking/postcss-responsive-type
    require('postcss-responsive-type')(),
    require('postcss-typography')(typographyConfig),
    // https://github.com/larsenwork/postcss-easing-gradients
    require('postcss-easing-gradients')(),
    // https://github.com/zhouwenbin/postcss-animation
    require('postcss-animation')(),
    // https://github.com/postcss/postcss-nested
    require('postcss-nested')(),
    // https://github.com/csstools/postcss-preset-env
    require('postcss-preset-env')(),
    // https://github.com/postcss/autoprefixer
    require('autoprefixer')({ grid: true }),

    require('postcss-flexbugs-fixes'),
    // https://github.com/hail2u/node-css-mqpacker
    require('css-mqpacker')({ sort: true })
  ]
}
