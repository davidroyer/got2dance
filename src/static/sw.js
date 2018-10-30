importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05aa283c075b530e7dd1.js",
    "revision": "47141de547c70e4aee683fd1c158158a"
  },
  {
    "url": "/_nuxt/10a292f8c876b21e4037.js",
    "revision": "e8cd25a300c32c7f61f4b690fb66579e"
  },
  {
    "url": "/_nuxt/21ed657cfdfc46e4022c.js",
    "revision": "218bcd651ccd5f5fddbbe697b337b9b0"
  },
  {
    "url": "/_nuxt/2e7005707cd33b5ea176.css",
    "revision": "2c6ddb014af7d71ce71f8619481470cc"
  },
  {
    "url": "/_nuxt/32e04d786da59e72067b.js",
    "revision": "15b0b7a001029239495dad27aab604e0"
  },
  {
    "url": "/_nuxt/3969645f2313da8e4ca8.js",
    "revision": "728dfb672c87ce82927b9a16cfe9e1ad"
  },
  {
    "url": "/_nuxt/4096449ac8f327723d22.js",
    "revision": "ea0d10d95f95ab0b8e361eb067cf384f"
  },
  {
    "url": "/_nuxt/494d98d4716fed88ba80.js",
    "revision": "5ffcb536c90577495217747b9ed4c282"
  },
  {
    "url": "/_nuxt/4bf20fe138ce02d01deb.css",
    "revision": "1d66e8d927899a155c5af56d07fe49e4"
  },
  {
    "url": "/_nuxt/52502b04f66d503c19d5.js",
    "revision": "c2bddc880ce362a7a9d18ceb61067b10"
  },
  {
    "url": "/_nuxt/6b1ad0f07449e7206cbc.js",
    "revision": "774b69f53acab37b420028c004510688"
  },
  {
    "url": "/_nuxt/6bf928b94e0324fe671c.css",
    "revision": "0f9182db4f13c4fa379bdbee2f2ece28"
  },
  {
    "url": "/_nuxt/722c08e2663636fa481d.css",
    "revision": "7c067c737c01a204781af6476238fadc"
  },
  {
    "url": "/_nuxt/7b119572e7bc686ad236.js",
    "revision": "554efc860b61f11fcc7578fca5319e63"
  },
  {
    "url": "/_nuxt/8a71caaeb35ef3210f16.css",
    "revision": "8838389f1e0e91802df5e5f5f5accbe1"
  },
  {
    "url": "/_nuxt/8f9b8c137308418b96e1.js",
    "revision": "a3c1bfa3d2dade7a0948099a37ac3cb8"
  },
  {
    "url": "/_nuxt/92647ec0a7beb8b2898d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/a047c1c6c56ed5de0080.js",
    "revision": "a20f555324232d08af93ba307260912c"
  },
  {
    "url": "/_nuxt/a05a27cfa4c4238d8454.js",
    "revision": "9cf42e54c73058a3932f922f56f07897"
  },
  {
    "url": "/_nuxt/afeca9e4d8be747f747b.js",
    "revision": "1ab616c38409604c346855c455c0a574"
  },
  {
    "url": "/_nuxt/b22172e7003a58b42b7e.css",
    "revision": "9a9cb48085209b666e42137d6afe9c52"
  },
  {
    "url": "/_nuxt/bf7ddda71c22c139dc9d.js",
    "revision": "4fca05afdc9e453e759d0007f52e3a71"
  },
  {
    "url": "/_nuxt/c4cd5ad5201a2803f647.css",
    "revision": "3ee97c206a86f83cc14b360c3d658326"
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
    "url": "/_nuxt/f567cab034bfdaf3b78e.js",
    "revision": "8b2c4f9f670efa33b8d0132dc13017e5"
  },
  {
    "url": "/_nuxt/ffb4e2bb0778c42d6fc6.js",
    "revision": "6ad7486f82cc67371bb2cef1d33b5476"
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





