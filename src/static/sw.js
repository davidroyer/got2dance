importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f7f44387008721a2d58.js",
    "revision": "76624ca08a3e62e2e69bc4f5a3f2d737"
  },
  {
    "url": "/_nuxt/0fe94a9f6c56fde9a6b1.js",
    "revision": "d06026b94b80f8c09c0f8d53585eaefd"
  },
  {
    "url": "/_nuxt/1b52ef55f4cff0f13842.css",
    "revision": "855e6337109b5dbc309e54d164865eb8"
  },
  {
    "url": "/_nuxt/2516adbc14dd37c31eb6.js",
    "revision": "7cea575359d76e45a07ef40865b58639"
  },
  {
    "url": "/_nuxt/39f373905960f4a945ab.js",
    "revision": "6cdb6f88e308221f7f3e66f5ec514671"
  },
  {
    "url": "/_nuxt/3ee707ddfe28bbcf7bc5.js",
    "revision": "8a29ac1c5e38ec2776c4020aec9d711c"
  },
  {
    "url": "/_nuxt/45975c241ded40ae1354.js",
    "revision": "9bf67a0ea9165f33cafe2896de08848a"
  },
  {
    "url": "/_nuxt/4628305d3c3eb7deae50.js",
    "revision": "6651f000465c6c63ccaafa2200d4934d"
  },
  {
    "url": "/_nuxt/4b102bb64454aacf763f.js",
    "revision": "39d941b3ef0d30a1cfcaf3ea2044e46a"
  },
  {
    "url": "/_nuxt/4bf20fe138ce02d01deb.css",
    "revision": "1d66e8d927899a155c5af56d07fe49e4"
  },
  {
    "url": "/_nuxt/56cdacb0a3d154706050.js",
    "revision": "1cd9c861f888d103685c6f631aa1d5a6"
  },
  {
    "url": "/_nuxt/5f7d30cffb9cc4707f73.js",
    "revision": "0ba919fc2fdca4a4d28ebd9a79bbf07f"
  },
  {
    "url": "/_nuxt/6238be8bdf330c4bde72.js",
    "revision": "0cc53900ffd41b1865352bef5d17057b"
  },
  {
    "url": "/_nuxt/66821149bda4349bc672.js",
    "revision": "43d9eaf9c26250f3aec74ea68a934846"
  },
  {
    "url": "/_nuxt/6732c1977a6d7c1fca49.js",
    "revision": "f6b0fef0eccfd16c8e1fa208da2929f6"
  },
  {
    "url": "/_nuxt/6bf928b94e0324fe671c.css",
    "revision": "0f9182db4f13c4fa379bdbee2f2ece28"
  },
  {
    "url": "/_nuxt/72235cd8954372970141.js",
    "revision": "42ce23ec82ea5927c137f397a94240d4"
  },
  {
    "url": "/_nuxt/722c08e2663636fa481d.css",
    "revision": "d56c7d57c83a35cd5483bc0bf7891e39"
  },
  {
    "url": "/_nuxt/75879bdcf098e34a8607.js",
    "revision": "74ce09c49053ed0f00dfa9ef890085b8"
  },
  {
    "url": "/_nuxt/772e3493dda671727e91.js",
    "revision": "a2a6abff186847e812c884b546a182b8"
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
    "url": "/_nuxt/c4cd5ad5201a2803f647.css",
    "revision": "3ee97c206a86f83cc14b360c3d658326"
  },
  {
    "url": "/_nuxt/da0e5128036088849f27.js",
    "revision": "67f8ebf9f27145574691f868ca54cb3c"
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
    "url": "/_nuxt/ec198e0af767e22ed833.css",
    "revision": "c45a98604140ba9d93a7708c15c4a93b"
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





