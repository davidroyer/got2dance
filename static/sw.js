importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/10.ff7c6a784e1cfa90a80a.js",
    "revision": "d5c023f7f4cbeeda2f325b2bc0b523c3"
  },
  {
    "url": "/_nuxt/9.bdb5c010d2b371fe00d1.js",
    "revision": "f4d5768ae7ea04c2045b0102c167edaf"
  },
  {
    "url": "/_nuxt/app.aa5c4061118053a69496.js",
    "revision": "099d5261c47302d1468b68acbbd2b7eb"
  },
  {
    "url": "/_nuxt/common.889d85693c3c7bea876b.js",
    "revision": "ab172c71090cac886c38a3346a32b280"
  },
  {
    "url": "/_nuxt/layouts/default.2c857e5c83f66ebfe158.js",
    "revision": "b9a43485f2ab67c91118ed1b3e055384"
  },
  {
    "url": "/_nuxt/manifest.7ec8d99044d288c396b4.js",
    "revision": "bf6c9ade777ac9f15630eb32dcaf32e1"
  },
  {
    "url": "/_nuxt/pages/about.7ad4224961db9b0219bb.js",
    "revision": "2580910dda8a40bb16aeb45c1fc07fb5"
  },
  {
    "url": "/_nuxt/pages/classes.2108363b6a9b93cfda28.js",
    "revision": "007ebf89f641cc3db611277a325b4e15"
  },
  {
    "url": "/_nuxt/pages/contact.a5dd3e02d1ce5c4ec1d2.js",
    "revision": "f6f18e45748602d454194aa486eadae6"
  },
  {
    "url": "/_nuxt/pages/index.949fc5e2f6821a496a9e.js",
    "revision": "4ce653821e739aa4f7ee7bb29d79888d"
  },
  {
    "url": "/_nuxt/pages/instructors.b86622a6df2ba4c62169.js",
    "revision": "743b79c08d2cee9cdab242d46990558b"
  },
  {
    "url": "/_nuxt/pages/lessons.d6edbbf9727831378527.js",
    "revision": "197062243481b393fdf4586bb86c32a4"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "got2dance_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
