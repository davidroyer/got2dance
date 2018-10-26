importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/065c5a77975386d67c83.js",
    "revision": "05537fc7a90a83386b5daeaf78892e5d"
  },
  {
    "url": "/_nuxt/08185006b4983dc66124.js",
    "revision": "05eeba36472a6054516f5ac9e7aff907"
  },
  {
    "url": "/_nuxt/1b52ef55f4cff0f13842.css",
    "revision": "855e6337109b5dbc309e54d164865eb8"
  },
  {
    "url": "/_nuxt/1e16c90fe8006beefbc1.js",
    "revision": "4bafcb6fb26a5b81fa01fcd129763e92"
  },
  {
    "url": "/_nuxt/3044999f01bf613eae28.js",
    "revision": "385b0954c3881e570b66c3cc57799072"
  },
  {
    "url": "/_nuxt/39f373905960f4a945ab.js",
    "revision": "6cdb6f88e308221f7f3e66f5ec514671"
  },
  {
    "url": "/_nuxt/3a5f6cd9e9251808083e.js",
    "revision": "afd691d1052fc02583bb191ebbc9f853"
  },
  {
    "url": "/_nuxt/3ee707ddfe28bbcf7bc5.js",
    "revision": "8a29ac1c5e38ec2776c4020aec9d711c"
  },
  {
    "url": "/_nuxt/4bf20fe138ce02d01deb.css",
    "revision": "1d66e8d927899a155c5af56d07fe49e4"
  },
  {
    "url": "/_nuxt/572feb0d2fa5126732ef.js",
    "revision": "e527223ecc0d3dfeaa38facd6056eb1d"
  },
  {
    "url": "/_nuxt/5745570ffb38d6ba5264.js",
    "revision": "ac6d3bb7768855612fd3b15a8258cf12"
  },
  {
    "url": "/_nuxt/64f60a26faa32ac0e835.js",
    "revision": "8ac7b3c9d73a7620e5eb16287069c520"
  },
  {
    "url": "/_nuxt/6b7922aad30cd861ca38.css",
    "revision": "94540678fe05bbb124052baf07a634f5"
  },
  {
    "url": "/_nuxt/6bf928b94e0324fe671c.css",
    "revision": "0f9182db4f13c4fa379bdbee2f2ece28"
  },
  {
    "url": "/_nuxt/722c08e2663636fa481d.css",
    "revision": "d56c7d57c83a35cd5483bc0bf7891e39"
  },
  {
    "url": "/_nuxt/773719f2bfa2b3618ec6.js",
    "revision": "5f68e4b832cb9f6c17ba7036ca3ac15b"
  },
  {
    "url": "/_nuxt/8a71caaeb35ef3210f16.css",
    "revision": "8838389f1e0e91802df5e5f5f5accbe1"
  },
  {
    "url": "/_nuxt/8b83bc8e1a1bf39bfe7f.js",
    "revision": "b7f2ef41d72e9901a57ac2ce53718b8d"
  },
  {
    "url": "/_nuxt/916e7c71d9dc0e3fbdb1.js",
    "revision": "bc3454029c943cf6f624de894f40e6ee"
  },
  {
    "url": "/_nuxt/92647ec0a7beb8b2898d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/a54305917ea3a0de37cc.js",
    "revision": "6970a20c6f856f5879d4d81959ee3a7b"
  },
  {
    "url": "/_nuxt/c4cd5ad5201a2803f647.css",
    "revision": "3ee97c206a86f83cc14b360c3d658326"
  },
  {
    "url": "/_nuxt/c7d8a0530c56765e8185.js",
    "revision": "0a33b06a5f3af80cf6b17f4c10f28014"
  },
  {
    "url": "/_nuxt/db650d6650b6b8a60597.js",
    "revision": "e71cccaa44277c49361dd6cce253eb46"
  },
  {
    "url": "/_nuxt/dd7152d51cca566bf0bb.css",
    "revision": "ca77606427d1db660062405ce58a7a2c"
  },
  {
    "url": "/_nuxt/ebfcf974ef24d03c2ad3.css",
    "revision": "10c2357074662a4eb3aa93770e6da72c"
  },
  {
    "url": "/_nuxt/ed308297bd08d1d93813.css",
    "revision": "fd2b14f85cba614c991e7f7369084315"
  },
  {
    "url": "/_nuxt/fdb82e2527a0a777e569.js",
    "revision": "78759ebd167ad0f05c906f325ef7f2c6"
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





