importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03741885a53c815dd6a2.js",
    "revision": "6059a9d10046c77480f0cef8802606ce"
  },
  {
    "url": "/_nuxt/0a0f9ad70b3db872e69f.js",
    "revision": "6064945d2890d1af53514c1d668ce51f"
  },
  {
    "url": "/_nuxt/1ca30d1797c91d5b6d8e.js",
    "revision": "f82fbec08681c682c38920ae5bfa7945"
  },
  {
    "url": "/_nuxt/1fb373f7487d9bb0f44a.js",
    "revision": "856560157d85e29ffdf14bbf08659517"
  },
  {
    "url": "/_nuxt/20a29dc0940b00bab214.js",
    "revision": "78df18246be262197a485c4b97f67070"
  },
  {
    "url": "/_nuxt/60f22e4d1b43bc7f9e6a.js",
    "revision": "5035334fe1cd1dff8d79a1cfad4a68a8"
  },
  {
    "url": "/_nuxt/620ac9dbd05413d0df44.js",
    "revision": "704231790fab0007a562d12ff573b96d"
  },
  {
    "url": "/_nuxt/6edf41abdf887dd658b7.js",
    "revision": "9276878f27cd70b0b18f779e875a77e0"
  },
  {
    "url": "/_nuxt/80c267b9bce68d02fac9.js",
    "revision": "f208f9e54468298b3ea72fc27ada48c4"
  },
  {
    "url": "/_nuxt/855218e783472b9ad63a.js",
    "revision": "62fb9ae91b741d2a71aa458028672ff0"
  },
  {
    "url": "/_nuxt/9bad54ad3f61812f23c8.js",
    "revision": "978e39239d115316a4f56de19e947f74"
  },
  {
    "url": "/_nuxt/b39f57ec81dd702d56a8.js",
    "revision": "22c3d26d4bb067b72d35f87c1495fcaa"
  },
  {
    "url": "/_nuxt/b63f686b3b82ee3bba3c.js",
    "revision": "eb3489af787eb577514e43ad1ddc1ecb"
  },
  {
    "url": "/_nuxt/b7843a7e198da6e749c3.js",
    "revision": "f3848082a2f288f0622c752ddcae559f"
  },
  {
    "url": "/_nuxt/c67a0b6660fbaa8a443b.js",
    "revision": "7d6cb2a5dbe67def87e13d24e92ba85d"
  },
  {
    "url": "/_nuxt/dac1e89c77756e9699b1.js",
    "revision": "db5646ce72d40ea551fae75b81c663c9"
  },
  {
    "url": "/_nuxt/e826436b775584df9c52.js",
    "revision": "62d5ec6eafab22bee41e209b4286f024"
  },
  {
    "url": "/_nuxt/eb0301610d82d4938513.js",
    "revision": "e9b38771063a55d1010d57d6662cb2f0"
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





