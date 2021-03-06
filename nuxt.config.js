import config from './config/site'
import purgecssConfig from './config/purgecss'
import PurgecssPlugin from 'purgecss-webpack-plugin'
require('dotenv').config()

const wpUrl = 'https://got2dance.wpapi.app'
const SiteUrl = process.env.NODE_ENV === 'production' ? config.url : 'http://localhost:3000'

module.exports = {

  srcDir: './src',

  /**
   * The watch property lets you watch custom files for restarting the server.
   */
  watch: ['@@/config/*.js'],

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /**
   * Custom Nuxt plugins
   * @see https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/meta', '~/plugins/fa-icon'],

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
  ** Global CSS
  */
  css: [{ src: '~/assets/styles/main.scss', lang: 'scss' }],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      /**
       * PurgeCSS
       */
      if (!ctx.isDev) {
        config.plugins.push(

          /**
           * PurgeCSS
           * @see https://github.com/FullHuman/purgecss
           */
          new PurgecssPlugin(purgecssConfig)
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
    // ['wpapi-js', { url: wpUrl }],
    '@/modules/global-components',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],

  'google-analytics': {
    id: config.analyticsID
  }
}
