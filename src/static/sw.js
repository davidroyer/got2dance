importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02ea2a8c82c72d18d033.js",
    "revision": "df49e9358e12d22e2278f223e8493dbb"
  },
  {
    "url": "/_nuxt/0512df3fd7c635025e96.js",
    "revision": "f9b3dca8243cd69d9ad0cfcbbc2149c6"
  },
  {
    "url": "/_nuxt/129694a08feaea841350.js",
    "revision": "fb19d4c7f32fa47a39262c1c32cec81f"
  },
  {
    "url": "/_nuxt/1e979aac1c9bffc5a47e.js",
    "revision": "c0c5de4f303fc36338574d63e4a78213"
  },
  {
    "url": "/_nuxt/4bf20fe138ce02d01deb.css",
    "revision": "1d66e8d927899a155c5af56d07fe49e4"
  },
  {
    "url": "/_nuxt/6bf928b94e0324fe671c.css",
    "revision": "0f9182db4f13c4fa379bdbee2f2ece28"
  },
  {
    "url": "/_nuxt/71fa2e038647bf9ccffb.js",
    "revision": "b0c75611b34981c263de55d8f6e157eb"
  },
  {
    "url": "/_nuxt/722c08e2663636fa481d.css",
    "revision": "7c067c737c01a204781af6476238fadc"
  },
  {
    "url": "/_nuxt/7a5c5b06c69e9bf2e2e5.js",
    "revision": "fa69b7372eb22a6e4726616874718578"
  },
  {
    "url": "/_nuxt/814efcc1ececcbdb7641.css",
    "revision": "95b1ec684d14b91a4aaa835724292dc3"
  },
  {
    "url": "/_nuxt/8a71caaeb35ef3210f16.css",
    "revision": "8838389f1e0e91802df5e5f5f5accbe1"
  },
  {
    "url": "/_nuxt/8c91e4b7f5794c6adddb.js",
    "revision": "4d0cb5b5a428b445344cec48c233890b"
  },
  {
    "url": "/_nuxt/92647ec0a7beb8b2898d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/9fb117862b3896eb694a.js",
    "revision": "95615e2b4aa75dd9c51ef7aae2b3a73f"
  },
  {
    "url": "/_nuxt/a05a27cfa4c4238d8454.js",
    "revision": "9cf42e54c73058a3932f922f56f07897"
  },
  {
    "url": "/_nuxt/c4a3ebfe6c727dfdd25e.js",
    "revision": "14e0b9b2bae7df2e7104055101b9133d"
  },
  {
    "url": "/_nuxt/c4cd5ad5201a2803f647.css",
    "revision": "3ee97c206a86f83cc14b360c3d658326"
  },
  {
    "url": "/_nuxt/c9cf738252cd59e39f8f.js",
    "revision": "c1b1476f2269ddc71fefbbf98401bdd0"
  },
  {
    "url": "/_nuxt/d1ed78862962146fdd40.js",
    "revision": "d8a2aa8732271ec548e7817a54eee16a"
  },
  {
    "url": "/_nuxt/d3cdd69dbcd1b473c751.js",
    "revision": "25876c31ec7438cbcbe2a006f53af1f5"
  },
  {
    "url": "/_nuxt/d836dc82602349fba358.js",
    "revision": "1906f763f68a4f66e6b3808121f6b2aa"
  },
  {
    "url": "/_nuxt/dd7152d51cca566bf0bb.css",
    "revision": "ca77606427d1db660062405ce58a7a2c"
  },
  {
    "url": "/_nuxt/e5aa1fd56ada423e8894.js",
    "revision": "8e8d54c93e95e3a615eed64b0728d17c"
  },
  {
    "url": "/_nuxt/e63ea00371ae63eb16a1.css",
    "revision": "1f0b3c3df48b7b7989f261f6608c6bd3"
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
    "url": "/_nuxt/f567cab034bfdaf3b78e.js",
    "revision": "8b2c4f9f670efa33b8d0132dc13017e5"
  },
  {
    "url": "/_nuxt/f8ae73c70ec60685672e.js",
    "revision": "46d37d651c7b8091ea2d8c07bda1d05d"
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





