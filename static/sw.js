importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00c0ae877e2b2ec767bc.js",
    "revision": "92fb4f631d89f59a832648833b2274de"
  },
  {
    "url": "/_nuxt/128d0fb074965d32682f.js",
    "revision": "c870505acbd133b3fa3df28d1a78dfb8"
  },
  {
    "url": "/_nuxt/442e91201164fb0a5f56.js",
    "revision": "80e68243eadc69bd2792a13449fa7174"
  },
  {
    "url": "/_nuxt/455cbca1be3499be106c.js",
    "revision": "cd79ce3c7ff5402714b081cb3c5c1250"
  },
  {
    "url": "/_nuxt/550ef82ddc689194f27e.js",
    "revision": "932b00f28e0c734d53053555f93d03a6"
  },
  {
    "url": "/_nuxt/58d23ae1244281f54ea1.js",
    "revision": "5166be45cc93babd1ecadac7586d658d"
  },
  {
    "url": "/_nuxt/5cd24ca726cb8de23d75.js",
    "revision": "71d6bd21d7789fc1d2934f8e504b246a"
  },
  {
    "url": "/_nuxt/63b74287a30d56c6f7f5.js",
    "revision": "1dc649e2a66059464a249cbbb62ad63a"
  },
  {
    "url": "/_nuxt/64b6815eec398c3be59e.js",
    "revision": "5e9205efa9ac9d5254d31ca2bb72e5ba"
  },
  {
    "url": "/_nuxt/751ea26b6977628fc072.js",
    "revision": "bf65dea8ab60bf5e9231157ae07200aa"
  },
  {
    "url": "/_nuxt/92d5de2f85f501d9dc54.js",
    "revision": "c026eaade08e2b991b9f07ca98e9d9f1"
  },
  {
    "url": "/_nuxt/a43cbcf526f8f30c001d.js",
    "revision": "05c06d0137fde381b7298ac16c3ea507"
  },
  {
    "url": "/_nuxt/d302e0f747305f38f420.js",
    "revision": "71873a99ed202a0da0b48ddc566d551b"
  },
  {
    "url": "/_nuxt/f67d0133804065f93219.js",
    "revision": "da2e4df2d276f7277e88cf56242dc96e"
  }
], {
  "cacheId": "got2dance",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





