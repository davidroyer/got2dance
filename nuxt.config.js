import WpApi from './services/wpapi'
const wpUrl = 'https://got2dance.wpapi.app'

const wp = new WpApi({
  wpSiteUrl: wpUrl
})

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Got 2 Dance',
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
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'},
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
      },
      // { rel: 'preload', as: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Vollkorn:400,700' }
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Vollkorn:400,700'
      }
    ]
  },

  plugins: ['~/plugins/wp'],

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
  css: [{ src: '~/assets/css/main.scss', lang: 'scss' }],
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
  modules: [
    '@nuxtjs/pwa'
    // ['@nuxtjs/google-analytics', { ua: 'UA-56060335-5' }],
  ]
}
