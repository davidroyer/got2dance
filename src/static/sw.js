importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1378dc5ec6b396ae2a21.js",
    "revision": "b13f2ca6c458983d950b0490c753e320"
  },
  {
    "url": "/_nuxt/14732067fb50717c18ef.js",
    "revision": "7e3577b73c611a5bd37267b186f6a82b"
  },
  {
    "url": "/_nuxt/20601b21e6820e6ffe34.js",
    "revision": "f187355b7da022c1f7c717f6566c354a"
  },
  {
    "url": "/_nuxt/20dda033b6548d38b648.js",
    "revision": "889e68a34a9a70ccaf78356f717d010a"
  },
  {
    "url": "/_nuxt/284db211b34db2afbfb8.js",
    "revision": "2fec9fe55eca48b417ef38a8374fd5cb"
  },
  {
    "url": "/_nuxt/3068fa480a8c66bbfb64.js",
    "revision": "4b88746172982f4ae74431e2ccea3683"
  },
  {
    "url": "/_nuxt/3bb1196027c4a07e8109.js",
    "revision": "5cf5b4a7644377806d68e09a49ea8e6c"
  },
  {
    "url": "/_nuxt/43b4bc9207eaf447167c.js",
    "revision": "2dbe5ea2bfdc29815b3be5ef823e913d"
  },
  {
    "url": "/_nuxt/53f2164b05e948460aba.js",
    "revision": "b26b440cf0e790dbafeb7453163e9e94"
  },
  {
    "url": "/_nuxt/69603d3ee567489ab041.js",
    "revision": "13d63c49d9ebdc7a0c4acb733334299d"
  },
  {
    "url": "/_nuxt/6f9dd75262be7669ad5a.js",
    "revision": "dd1e9b2a0fab971de6f8e61b4f372942"
  },
  {
    "url": "/_nuxt/7a567d0c768174533b4d.js",
    "revision": "8abd26fb30e7f205b87ff0e398fa0f38"
  },
  {
    "url": "/_nuxt/9e418a6beda97910a561.js",
    "revision": "82d7d17afdbb0313e5944c85650d8170"
  },
  {
    "url": "/_nuxt/9fe8bf2e2eeb99fb05a5.js",
    "revision": "e962e87ffc0bc57325eadccc29c5a744"
  },
  {
    "url": "/_nuxt/c8f296dd2303c637e378.js",
    "revision": "93e1e159ff01aaca893a8f33054ace73"
  },
  {
    "url": "/_nuxt/da4dc188e6581cd4c92d.js",
    "revision": "b8d6ec807a9ded372ea5e46f759d1afb"
  },
  {
    "url": "/_nuxt/dc9e011f906bb3f1516b.js",
    "revision": "f07fa10cae1c198726c4869d9713a522"
  },
  {
    "url": "/_nuxt/e79e9f128bc7f2e1e617.js",
    "revision": "158e919003461c7730e25fcb93fafa99"
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





