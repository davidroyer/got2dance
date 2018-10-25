importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ebdc3dbfdf5dfa06304.js",
    "revision": "e3bdb8999bce06db83ac313c5c5237d6"
  },
  {
    "url": "/_nuxt/1b52ef55f4cff0f13842.css",
    "revision": "855e6337109b5dbc309e54d164865eb8"
  },
  {
    "url": "/_nuxt/2373287baa453ebe52fa.js",
    "revision": "4a27d370b0d07bd24364ad14118f80e5"
  },
  {
    "url": "/_nuxt/2937a16b49fe6917eefc.js",
    "revision": "c371df02e171c680a467e359087c2958"
  },
  {
    "url": "/_nuxt/3136d6a77ffa2b8a81fe.css",
    "revision": "ecc0d09fe5b97cbddff48067a5c04cec"
  },
  {
    "url": "/_nuxt/34faf1b812fcf18d5e1b.js",
    "revision": "efb6f5cc8d076b4cb41257aa53caa2f7"
  },
  {
    "url": "/_nuxt/414c8409f6ce7c615bf1.js",
    "revision": "109f9cfb43017f1129d50ffdb6ffc742"
  },
  {
    "url": "/_nuxt/4213b15d0f007bbdc3b9.css",
    "revision": "80c6bf22e571cec26d7447c123a87b91"
  },
  {
    "url": "/_nuxt/4786d2771f2430257348.js",
    "revision": "9a614eb61516825b8b2d68a9a8ab17eb"
  },
  {
    "url": "/_nuxt/4bf20fe138ce02d01deb.css",
    "revision": "1d66e8d927899a155c5af56d07fe49e4"
  },
  {
    "url": "/_nuxt/572bcc6535229e6f6744.js",
    "revision": "327c2bc19ef812acaabbaf5e6358d784"
  },
  {
    "url": "/_nuxt/58bbac6a88ea7437e41b.js",
    "revision": "876dd1dfce0585528300584a33a178e1"
  },
  {
    "url": "/_nuxt/6bf928b94e0324fe671c.css",
    "revision": "0f9182db4f13c4fa379bdbee2f2ece28"
  },
  {
    "url": "/_nuxt/70f75d4d54da1997a0c6.js",
    "revision": "60bdd5773153120a114bad6d9f426e8c"
  },
  {
    "url": "/_nuxt/7b2db0e43b88323580d2.js",
    "revision": "19848be544fd19b724d543720375a54c"
  },
  {
    "url": "/_nuxt/8a71caaeb35ef3210f16.css",
    "revision": "8838389f1e0e91802df5e5f5f5accbe1"
  },
  {
    "url": "/_nuxt/92647ec0a7beb8b2898d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/a4e67931d33166fc8d8f.js",
    "revision": "b298a8cae6ada625fe27b15035fa333d"
  },
  {
    "url": "/_nuxt/b745a8f6a1d785e21a80.css",
    "revision": "9377331888d77e08bbd39fd52b4eb220"
  },
  {
    "url": "/_nuxt/bab0bdc19fd62d3d6e13.js",
    "revision": "279ee335df3182a1432cddea82dc6c82"
  },
  {
    "url": "/_nuxt/bad32c1993ee4b3b9e5e.css",
    "revision": "cc4121ca8ce162b851cab29dd4c023e5"
  },
  {
    "url": "/_nuxt/c0140451905ae179a3fc.js",
    "revision": "1a204784c3a78da2ce486020a0950f8a"
  },
  {
    "url": "/_nuxt/c4cd5ad5201a2803f647.css",
    "revision": "3ee97c206a86f83cc14b360c3d658326"
  },
  {
    "url": "/_nuxt/c7b5209aff4e4e639ce0.js",
    "revision": "fbb3180f43045421e627d8d249ba142d"
  },
  {
    "url": "/_nuxt/cabdca7a9dc43304a401.js",
    "revision": "dcb6df04485de8384171e9b68ca03f68"
  },
  {
    "url": "/_nuxt/d4ba5bd6b3b3e643fd72.js",
    "revision": "d65117f7483a400538bae18fcaf82aff"
  },
  {
    "url": "/_nuxt/dbe6cbba7d418e07cc15.js",
    "revision": "26522ab77d16883c623ced2cd5bafcd3"
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





