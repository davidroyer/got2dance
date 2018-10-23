importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2624dfd49d68765dda8a.js",
    "revision": "b07b728b5ef57416318e3bdbeaebac0f"
  },
  {
    "url": "/_nuxt/2a05e195becbf00a2a64.js",
    "revision": "93fa2249443c86a3a904b44054e2f894"
  },
  {
    "url": "/_nuxt/3489512db7f66969550d.js",
    "revision": "5bb87679eda73cce8e1ddbb070769647"
  },
  {
    "url": "/_nuxt/37ba5e5beecb5fe3f2f1.js",
    "revision": "375281e7c655be75aaea06154a3007fd"
  },
  {
    "url": "/_nuxt/42e074d89348bd6852b3.js",
    "revision": "1144d9caca6a7a8fd8c105c08560538c"
  },
  {
    "url": "/_nuxt/4e5eef50e043eee09dd5.js",
    "revision": "a55d721c545682fef32d7d1bdff7a16e"
  },
  {
    "url": "/_nuxt/4fe5c32bed6c19568702.js",
    "revision": "3a5189394e9904167bbcb14bf07511ce"
  },
  {
    "url": "/_nuxt/5233be3b82e8bac8225e.js",
    "revision": "9182105fe8e7e7faa7837094d7c76ad3"
  },
  {
    "url": "/_nuxt/5f0136fc4fd3bd827173.js",
    "revision": "cd145be561a5e92d045a24b4713bf7a8"
  },
  {
    "url": "/_nuxt/70b1bbe3006cb2ec5d78.js",
    "revision": "4176872f21e280fb5a6a7acb3c85d377"
  },
  {
    "url": "/_nuxt/8aefc407b7271cf2ed00.js",
    "revision": "43790839b57a862a73e9a87e60fbc611"
  },
  {
    "url": "/_nuxt/b5ea3af30e0975b16f4a.js",
    "revision": "d763f26acdb98f485e83e66390110d71"
  },
  {
    "url": "/_nuxt/c6adc3e6b3f3c69c0652.js",
    "revision": "21ed55218faf1cf016b95d1584b48975"
  },
  {
    "url": "/_nuxt/eda1b2de2479839cba99.js",
    "revision": "974e0fefe34585026c92c6afd3721acc"
  },
  {
    "url": "/_nuxt/edd209c168908f33343c.js",
    "revision": "8ffc073574ef7b90e100381bd443a42e"
  },
  {
    "url": "/_nuxt/f72944ca5281678e4a0c.js",
    "revision": "ecc04b3b26a18ac3f557e4923099e36b"
  },
  {
    "url": "/_nuxt/fe51e675a90f0a889b88.js",
    "revision": "2d577ebe66094c008768ad71be34a3b9"
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





