require('dotenv').config()
const wpUrl = 'https://got2dance.wpapi.app'

// const wp = new WpApi({
//   wpSiteUrl: wpUrl
// })

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Got 2 Dance',
    env: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY
    },
    // titleTemplate: '%s - David Royer - Front End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Louisville's newest Ballroom Dance Studio. Dance lessons, classes, and dance parties throughout the week so you can have fun and learn to dance every night!"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: wpUrl },
      {
        rel: 'preload',
        as: 'style',
        onload: 'this.rel = "stylesheet"',
        href:
          'https://fonts.googleapis.com/css?family=Vollkorn:400,700|Open+Sans:400,700|Material+Icons'
      }
      // {
      //   rel: 'preload',
      //   as: 'style',
      //   href: 'https://fonts.googleapis.com/css?family=Roboto'
      // }
    ]
  },

  plugins: [],

  env: {
    apiBaseUrl: wpUrl
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
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
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

  // generate: {
  //   async routes() {
  //     const pages = await wp.pages();
  //     const posts = await wp.posts();
  //
  //     const pagesRoutes = pages.map(page => {
  //       return {
  //         route: page.slug,
  //         payload: page
  //       };
  //     });
  //
  //     const postsRoutes = posts.map(post => {
  //       return {
  //         route: "/blog/" + post.slug,
  //         payload: post
  //       };
  //     });
  //
  //     return [...pagesRoutes, ...postsRoutes];
  //   }
  // },
  //
  modules: [['@nuxtjs/dotenv', { systemvars: true }], '@nuxtjs/pwa', ['wpapi-js', { url: wpUrl }]]

  // wpapi: {
  //   url: 'https://got2dance.wpapi.app'
  // }
}
