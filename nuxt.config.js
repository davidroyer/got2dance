import path from 'path'
import glob from 'glob-all'
import config from './site.config'
import aliases from './aliases.config'
import PurgecssPlugin from 'purgecss-webpack-plugin'
require('dotenv').config()

const wpUrl = 'https://got2dance.wpapi.app'
const SiteUrl = process.env.NODE_ENV === 'production' ? config.url : 'http://localhost:3000'
const purgecssWhitelistPatterns = [
  /^__/,
  /^fa-/,
  /^v-/,
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

module.exports = {

  /**
   * Head of the page
   * @see https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: `%s - ${config.title}`,
    htmlAttrs: { lang: config.lang },
    bodyAttrs: { itemscope: true, itemtype: 'http://schema.org/WebPage' },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { hid: 'description', name: 'description', content: config.description },
      { hid: 'robots', name: 'robots', content: config.index === false ? 'noindex,nofollow' : 'index,follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: config.title },
      { hid: 'og:title', property: 'og:title', content: config.title },
      { hid: 'og:description', property: 'og:description', content: config.description },
      { hid: 'og:image', property: 'og:image', content: `${SiteUrl}/${config.ogImage}` },
      { hid: 'twitter:title', name: 'twitter:title', content: config.title },
      { hid: 'twitter:description', name: 'twitter:description', content: config.description },
      { hid: 'twitter:image', name: 'twitter:image', content: `${SiteUrl}/${config.ogImage}` }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: wpUrl },
      { rel: 'preconnect', href: wpUrl },
      { rel: 'preload', href: '/fonts/vollkorn-v8-latin-regular.woff2', as: 'font', type: 'font/woff2' },
      { rel: 'preload', href: '/fonts/vollkorn-v8-latin-700.woff2', as: 'font', type: 'font/woff2' },
      { rel: 'preload', href: '/fonts/open-sans-v15-latin-regular.woff2', as: 'font', type: 'font/woff2' }
    ]
  },

  /**
   * Custom Nuxt plugins
   * @see https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/meta'],

  /*
  ** Environmental variables
  */
  env: {
    apiBaseUrl: wpUrl,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    MAPS_API_KEY: process.env.MAPS_API_KEY
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [{ src: '~/assets/styles/main.scss', lang: 'scss' }],

  build: {
    // extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      /**
       * Resolve custom aliases
       */
      for (const key in aliases) {
        config.resolve.alias[key] = aliases[key]
      }

      /**
       * PurgeCSS
       */
      if (!ctx.isDev) {
        config.plugins.push(
          /**
           * PurgeCSS
           * @see https://github.com/FullHuman/purgecss
           */
          new PurgecssPlugin({
            keyframes: false,
            paths: glob.sync([
              path.join(__dirname, './src/pages/**/*.vue'),
              path.join(__dirname, './src/layouts/**/*.vue'),
              path.join(__dirname, './src/components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['html', 'js', 'vue', 'css', 'scss']
              }
            ],
            whitelist: ['html', 'body', 'nuxt-progress', 'svg', 'svg-inline--fa'],
            whitelistPatterns: purgecssWhitelistPatterns
          })
        )
      }

      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'menu'
  },

  modules: [
    '~/modules/global-components',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-fontawesome',
    '@nuxtjs/google-analytics',
    ['wpapi-js', { url: wpUrl }],
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],

  'google-analytics': {
    id: config.analyticsID
  },

  /**
   * Nuxt fontawesome module
   * @type {Object}
   */
  fontawesome: {
    component: 'fa-icon',
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: config.fontAwesomeIcons.brands
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: config.fontAwesomeIcons.regular
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: config.fontAwesomeIcons.solid
      }
    ]
  }

}
