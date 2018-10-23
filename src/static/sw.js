importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00b7d5b88bcd5ff495a2.css",
    "revision": "4b9249a46d749fc8afd348a472081024"
  },
  {
    "url": "/_nuxt/1b52ef55f4cff0f13842.css",
    "revision": "855e6337109b5dbc309e54d164865eb8"
  },
  {
    "url": "/_nuxt/268c00fbb44ba4b7941f.js",
    "revision": "a68f8bc3eec09cabb3b086db2f339b0a"
  },
  {
    "url": "/_nuxt/27296a935f870a410081.js",
    "revision": "e8cbbd46c2e152b745d9e2ceb3d5c571"
  },
  {
    "url": "/_nuxt/2bf1557d0a1fb308a726.js",
    "revision": "08830038cd0644554ba502e84fdcbddf"
  },
  {
    "url": "/_nuxt/3343acb4f74bdf24d4ad.js",
    "revision": "4fd2b82373ff696348f842d9d753a8af"
  },
  {
    "url": "/_nuxt/37455e9faa67f204fc3b.js",
    "revision": "4241796b0cfee20a6c9ec67348288df3"
  },
  {
    "url": "/_nuxt/44d687f473ea6bafd017.css",
    "revision": "45e9c072e1c1a2f4a0430739020a5d2d"
  },
  {
    "url": "/_nuxt/4ed237047fd09794ecf4.css",
    "revision": "52e96e2b20923ef6ed107409cea4c026"
  },
  {
    "url": "/_nuxt/52efe31a342b1dd14582.js",
    "revision": "b9d1298c3c2960254fea33bbb7a1af0f"
  },
  {
    "url": "/_nuxt/549e08b5b183105961c4.js",
    "revision": "c549fae0f8a8bd8397ed0d65bacad39c"
  },
  {
    "url": "/_nuxt/6bf928b94e0324fe671c.css",
    "revision": "0f9182db4f13c4fa379bdbee2f2ece28"
  },
  {
    "url": "/_nuxt/7964f919ff3a7886d0e7.js",
    "revision": "6810e7be637d6303697f80bcef2d2783"
  },
  {
    "url": "/_nuxt/797dd851985795ebc6bd.js",
    "revision": "3db93fc8b4e1d5730274e9e69b51e5e2"
  },
  {
    "url": "/_nuxt/7980a7fb3669581126a2.js",
    "revision": "d6d76c9c3cbd3c5d935b7aa8655c05b8"
  },
  {
    "url": "/_nuxt/88e4f7b58ce25d85fb80.js",
    "revision": "f660605245f40e6fc71a1b89399f68ed"
  },
  {
    "url": "/_nuxt/8938ba33424036fb5f69.js",
    "revision": "9dde353dfe9d9a4e131356e82168f2d4"
  },
  {
    "url": "/_nuxt/8a71caaeb35ef3210f16.css",
    "revision": "8838389f1e0e91802df5e5f5f5accbe1"
  },
  {
    "url": "/_nuxt/8ca21f6f12b7ee687217.css",
    "revision": "1b683f5e5edf2f8d5165b722a09599ea"
  },
  {
    "url": "/_nuxt/92647ec0a7beb8b2898d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/abf0f6f47df2f5dab0d8.js",
    "revision": "cddf684fcd41f3d4b056d26f1becd0cf"
  },
  {
    "url": "/_nuxt/ac2348ceebf23c1161c9.js",
    "revision": "60a2afee120f6efe6e33407417daa02b"
  },
  {
    "url": "/_nuxt/b18a26eefe96dd87d29c.css",
    "revision": "3df607714ffb69842571337ebe4080ce"
  },
  {
    "url": "/_nuxt/b913f77aca02c288c703.js",
    "revision": "ba7fbd5b0f98b8885193363ca21c80f8"
  },
  {
    "url": "/_nuxt/c4cd5ad5201a2803f647.css",
    "revision": "3ee97c206a86f83cc14b360c3d658326"
  },
  {
    "url": "/_nuxt/c6288a0acad65f5eb54c.css",
    "revision": "1bf4597bef5c971e67e6698fa07255f5"
  },
  {
    "url": "/_nuxt/d8f7abaefac3da64f12c.js",
    "revision": "01cdaca05e30f03020737ba3ee363ab3"
  },
  {
    "url": "/_nuxt/db4c5bf56b9033f0b5da.js",
    "revision": "59f9b630a678ae8bf6aae2a7de653a56"
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





