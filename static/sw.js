importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08a6b6ae38adab190fb7.js",
    "revision": "9c703032e2cd804858904edfd03272d2"
  },
  {
    "url": "/_nuxt/2244cbca3a38767ce698.js",
    "revision": "3069bfe00a8470b88a276578ea338c13"
  },
  {
    "url": "/_nuxt/3825e7a20e3dbc5ef036.js",
    "revision": "2f0f8694a43f18d1aa785692f4aefec2"
  },
  {
    "url": "/_nuxt/42ca179741884009bd32.js",
    "revision": "158a7d79413c7cd2c447586881ab1590"
  },
  {
    "url": "/_nuxt/50527e5bcca1e857210b.js",
    "revision": "2a1f2cc840857aa1caa57f26310840a8"
  },
  {
    "url": "/_nuxt/6d6754d2f1126886b5f5.js",
    "revision": "8a5f761e318ab2fbfab1b42ef7f29e7a"
  },
  {
    "url": "/_nuxt/770e7ee0670b4ce413fb.js",
    "revision": "f0dc820ee6b1385561b27bbfd501a419"
  },
  {
    "url": "/_nuxt/7bc471e5c9f4ca7f8020.js",
    "revision": "62d64558e4ba26604f8d69a24244edb8"
  },
  {
    "url": "/_nuxt/a7232366f2daf9794173.js",
    "revision": "99c5429a1797e2238bed86712fe71519"
  },
  {
    "url": "/_nuxt/be9c4f01dd26b22baf30.js",
    "revision": "9df46164c96401c108e1a5285cd562c5"
  },
  {
    "url": "/_nuxt/c0197f92863e970d9e05.js",
    "revision": "3d52be17ac5fee3e4c60ccadcbe3dae2"
  },
  {
    "url": "/_nuxt/cc3b29268ba744b695ef.js",
    "revision": "efe1c0d5ecde636d0f51c5f4bf0f3ab3"
  },
  {
    "url": "/_nuxt/d0a085e9fea306d19411.js",
    "revision": "d20ee364cc73fe8cb84f000173210d9f"
  },
  {
    "url": "/_nuxt/de171336bb91f04a0d32.js",
    "revision": "56043a8809f9eac392b0e562ce1b1bc8"
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





