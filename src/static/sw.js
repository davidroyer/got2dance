importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0557683a3f5f4df41883.css",
    "revision": "90f259e356e871687717a23e77deddc6"
  },
  {
    "url": "/_nuxt/235f6a635bb1b675aaeb.css",
    "revision": "6952c3727ef3725bc300e1104ba90377"
  },
  {
    "url": "/_nuxt/2e3010d44ee52dce8fa2.js",
    "revision": "2b973e619f12fed7dd874ed8c9c9229f"
  },
  {
    "url": "/_nuxt/3d15e349f66fba146267.js",
    "revision": "65ac890aa5dc97f4e08c8e4989d05fc0"
  },
  {
    "url": "/_nuxt/4213b15d0f007bbdc3b9.css",
    "revision": "80c6bf22e571cec26d7447c123a87b91"
  },
  {
    "url": "/_nuxt/4d6f243862d9ac3472f0.js",
    "revision": "ade292aea22b432da8c18ce9b869f774"
  },
  {
    "url": "/_nuxt/4ed237047fd09794ecf4.css",
    "revision": "52e96e2b20923ef6ed107409cea4c026"
  },
  {
    "url": "/_nuxt/52fe0f6deaaa66367b39.js",
    "revision": "ac1b6bb6f6e19ca901b6e4f33add6eb1"
  },
  {
    "url": "/_nuxt/5b8b73700425334671a0.js",
    "revision": "eb2e137b253b1630b8d3f7946d1e70c6"
  },
  {
    "url": "/_nuxt/5b9ebafaa4f562d52c52.js",
    "revision": "69eb8663e1ea073c86bb09ff869fba06"
  },
  {
    "url": "/_nuxt/66dfa3538096cbe5f1de.css",
    "revision": "a2d848f22123965566658a5d23e6b79f"
  },
  {
    "url": "/_nuxt/6909d4235e906787715f.css",
    "revision": "2d91860233c6b1d98d0ed741288a75c8"
  },
  {
    "url": "/_nuxt/715dbdbb6806c32d576a.js",
    "revision": "2122cec925fe85557b8137f76539aba8"
  },
  {
    "url": "/_nuxt/72e8046cdd34c97a2ea1.js",
    "revision": "9ec824bbd55ea02daf35e21be58be9eb"
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
    "url": "/_nuxt/a2c18d250648f76a3170.css",
    "revision": "a78477d6740e4ceddccf90a85e7ff192"
  },
  {
    "url": "/_nuxt/a9b3138c577bb1159a97.css",
    "revision": "3fa697e1c21e998d5d83e2f3ec144b5e"
  },
  {
    "url": "/_nuxt/ae4e2ac768592773ce40.js",
    "revision": "fa3d148b091d07c85ca83594fb2db4c7"
  },
  {
    "url": "/_nuxt/b18a26eefe96dd87d29c.css",
    "revision": "2d88837c6b995085899368be3937defb"
  },
  {
    "url": "/_nuxt/b1f5b5033f6c7907b288.js",
    "revision": "dba59024a66c4ebc6f0b96aec49a01cd"
  },
  {
    "url": "/_nuxt/b779427f10620eeda955.js",
    "revision": "5cecc30d5d10d12d8107d31eeefae886"
  },
  {
    "url": "/_nuxt/c08edb3d143c6fecbf37.js",
    "revision": "fdc695732355889dcd3fb6c617e0128c"
  },
  {
    "url": "/_nuxt/c4cd5ad5201a2803f647.css",
    "revision": "3ee97c206a86f83cc14b360c3d658326"
  },
  {
    "url": "/_nuxt/d1e6436bb682d091ce67.js",
    "revision": "a1a224d797906ae8538ea9339dad8e71"
  },
  {
    "url": "/_nuxt/d5e0b87dbf14a57f2797.js",
    "revision": "6d0df82743f93b848f5c572494d1b596"
  },
  {
    "url": "/_nuxt/dd7152d51cca566bf0bb.css",
    "revision": "ca77606427d1db660062405ce58a7a2c"
  },
  {
    "url": "/_nuxt/e09119fa275883ac16b8.js",
    "revision": "1f16599e12aa1d38819334a988728894"
  },
  {
    "url": "/_nuxt/e8a03711a961f8e67375.js",
    "revision": "2bda7c4a417133345c8ed14c8451ed17"
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
    "url": "/_nuxt/faee0bf7f968f661b494.js",
    "revision": "f8e266940f94394dfd6bdd5809a1f40a"
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





