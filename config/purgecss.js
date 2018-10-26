import glob from 'glob-all'
import path from 'path'

const purgecssWhitelistPatterns = [
  /^__/,
  // /^fa/,
  /^v-/,
  /^fc/,
  /^page-/,
  /^nuxt/,
  /^scale/,
  /^slide/,
  /^enter/,
  /^leave/
]

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

export default {
  keyframes: false,
  paths: glob.sync([
    path.join(__dirname, '../src/pages/**/*.vue'),
    path.join(__dirname, '../src/layouts/**/*.vue'),
    path.join(__dirname, '../src/components/**/*.vue'),
    path.join(__dirname, '../src/plugins/**/*.js')
  ]),
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['html', 'js', 'vue', 'css', 'scss']
    }
  ],
  whitelist: ['html', 'body', 'nuxt-progress'],
  // whitelist: ['html', 'body', 'nuxt-progress', 'svg', 'table', 'thead', 'td', 'tr', 'svg-inline--fa'],
  whitelistPatterns: purgecssWhitelistPatterns
}
