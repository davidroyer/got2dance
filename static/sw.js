importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06d683f4d4f361adcf5d.js",
    "revision": "ac805ad1f36f663dba6eef159b19ee59"
  },
  {
    "url": "/_nuxt/07a77777ab4c75566af5.js",
    "revision": "487ec33732cd4de087d13a1e64d33285"
  },
  {
    "url": "/_nuxt/07d30fa7e5a980d5185a.js",
    "revision": "fb9aabdf72530b8733fc71bd3e12504e"
  },
  {
    "url": "/_nuxt/10db8c82b763a698e07d.js",
    "revision": "b62783729a7dd0c18a5719c10dbea936"
  },
  {
    "url": "/_nuxt/2e261ff0ca6f9fdfb55e.js",
    "revision": "c94d05eb9205d67e8442e6564c080e1f"
  },
  {
    "url": "/_nuxt/42074a075b47e6434be0.js",
    "revision": "6a0647e1f364a703d1efc16266904159"
  },
  {
    "url": "/_nuxt/48666f78cf9cefee8f11.js",
    "revision": "4a91060473db286d5039b0500ec78e94"
  },
  {
    "url": "/_nuxt/6eb44f3b466b313157cb.js",
    "revision": "056b0d962f4ddf3de7eaea98263528a0"
  },
  {
    "url": "/_nuxt/7dacb300214efd508b65.js",
    "revision": "a7370e3d6b8cdaf5d1d498f5bae8e8ea"
  },
  {
    "url": "/_nuxt/828e495239dc6c5b6fc6.js",
    "revision": "e0f652f688fb5cc3d4172161ade3b4ed"
  },
  {
    "url": "/_nuxt/82c79b489e037e35cdec.js",
    "revision": "3633c8478f85f4a579abf7f2f7085ad3"
  },
  {
    "url": "/_nuxt/8a0adf99278db105d724.js",
    "revision": "2de7594549e6f2edf13f6309e1ad98be"
  },
  {
    "url": "/_nuxt/9f8af1fe1bf61c8b9456.js",
    "revision": "517b7a21ccc3fcc1ba6f73fd4c498c0c"
  },
  {
    "url": "/_nuxt/c898923099626da029d7.js",
    "revision": "3d69ca7936ba94db42dbb9534ce6d963"
  },
  {
    "url": "/_nuxt/d38dcf41f78bd7e1a665.js",
    "revision": "a69a966f8f572d3dab8465654e73636e"
  },
  {
    "url": "/_nuxt/df0d501022c6f7530025.js",
    "revision": "632f9b4e01663039c4cdc5ce1ce76149"
  },
  {
    "url": "/_nuxt/e2c7500b2693a7622f0c.js",
    "revision": "138b464779e128afd4160207518c5921"
  },
  {
    "url": "/_nuxt/f212ed444928078acb21.js",
    "revision": "101d01e0a3b927552e7e7266f98a9fc5"
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





