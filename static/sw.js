importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d5e1d787e6847823c10.js",
    "revision": "4456a4b0e1f35b390f684bd11d419308"
  },
  {
    "url": "/_nuxt/0efcdd07582be2bad8d3.js",
    "revision": "29c2f0d32a4f93598c5922dd0ace6b97"
  },
  {
    "url": "/_nuxt/16dcbfd2c4e150c0eaba.js",
    "revision": "3deb0bc8547a33ef186dd5894101ebf6"
  },
  {
    "url": "/_nuxt/255de343de3b81b590dc.js",
    "revision": "88af71429b1a0086f5f9020a117f6105"
  },
  {
    "url": "/_nuxt/28e18fc845f132aa0bde.js",
    "revision": "f8ebd7a994374163febf21604a5ecc5e"
  },
  {
    "url": "/_nuxt/2935b129f5332cba685a.js",
    "revision": "baef9f6294d4215e850435de0147dcad"
  },
  {
    "url": "/_nuxt/2eddaef34651742fa8cd.js",
    "revision": "f5d19a424bdf8e2e19909947690eab3d"
  },
  {
    "url": "/_nuxt/3483ed0b981dc947c1b1.js",
    "revision": "80243b4e704529d9e9352170574c1498"
  },
  {
    "url": "/_nuxt/47a8a4358613e92db1de.js",
    "revision": "e29ba43afbe1b8d73b2d62abc666a11c"
  },
  {
    "url": "/_nuxt/601794744fa7858b0b7e.js",
    "revision": "89e0e6abac36d2f2098458a547a71337"
  },
  {
    "url": "/_nuxt/800f87472b0e1184d7d8.js",
    "revision": "9dfb17c4b64511eaf6519e2b6e2b1e32"
  },
  {
    "url": "/_nuxt/b99ee0d44c4cee4f0350.js",
    "revision": "a12dfec23ead4e8c3902fb5c834ee6ff"
  },
  {
    "url": "/_nuxt/bd8427a389263bb73a42.js",
    "revision": "f4cebf5f158d2fe86f1789cc43b3c908"
  },
  {
    "url": "/_nuxt/c25c7f327afae1776b12.js",
    "revision": "c32ad526c8c595ffabc1238726e53c06"
  },
  {
    "url": "/_nuxt/c3dce52c8f8c436540d6.js",
    "revision": "2adb75d0217050a150a111f5d5869615"
  },
  {
    "url": "/_nuxt/cb0175af83554672044f.js",
    "revision": "1751ab9ebb5b3839033c82f90abdf19e"
  },
  {
    "url": "/_nuxt/f4e29d817dad2d48cdd5.js",
    "revision": "a14b5d8ab2762332bf980f97af630237"
  },
  {
    "url": "/_nuxt/fb6758d7df3750a18585.js",
    "revision": "1f060902b7ed2c9b8dd59fe799e636af"
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





