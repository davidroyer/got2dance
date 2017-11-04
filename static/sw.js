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
    "url": "/_nuxt/11.9ec2f0db3f6cbb32506c.js",
    "revision": "5018db96a4d4d16dd2194bc9f319e5ee"
  },
  {
    "url": "/_nuxt/12.6c101121dcb9f4a103ac.js",
    "revision": "b22326b22d56fb57c07ba38ac933c51e"
  },
  {
    "url": "/_nuxt/13.a5c53f3bdf7b5d1c9339.js",
    "revision": "27f45edd90febc22066acd773a763bc5"
  },
  {
    "url": "/_nuxt/app.a1e775018c651e060c30.js",
    "revision": "5171c7148d0d7367addce72cff641a45"
  },
  {
    "url": "/_nuxt/common.dc54eaf2978c6c58a274.js",
    "revision": "ab0c6f88c914956ac1b960be6ec4dc23"
  },
  {
    "url": "/_nuxt/layouts/default.50757d9222e211d3720e.js",
    "revision": "6a418bb907a789cb354fd4d6509ca4a1"
  },
  {
    "url": "/_nuxt/manifest.aa1d437c0678b7e44893.js",
    "revision": "a6893975e35d11b14319b7862ce24336"
  },
  {
    "url": "/_nuxt/pages/about.3acc0b9bea3d26b1f165.js",
    "revision": "755dd616a10444ec85192d5686826bd3"
  },
  {
    "url": "/_nuxt/pages/calendar.933679bc0ccfd834852b.js",
    "revision": "968a7e8b8d22734b39d71f9be4c348cd"
  },
  {
    "url": "/_nuxt/pages/classes.2108363b6a9b93cfda28.js",
    "revision": "007ebf89f641cc3db611277a325b4e15"
  },
  {
    "url": "/_nuxt/pages/contact.f844c97e66fe8dce961a.js",
    "revision": "d298cb0845369dc295d2afd013ccb61f"
  },
  {
    "url": "/_nuxt/pages/index.949fc5e2f6821a496a9e.js",
    "revision": "4ce653821e739aa4f7ee7bb29d79888d"
  },
  {
    "url": "/_nuxt/pages/instructors.5283d357a98588956c82.js",
    "revision": "b0877b99bf56496ace97d4e157f92aa5"
  },
  {
    "url": "/_nuxt/pages/lessons.d6edbbf9727831378527.js",
    "revision": "197062243481b393fdf4586bb86c32a4"
  },
  {
    "url": "/_nuxt/pages/weddings.2d779b524a29774ed3a7.js",
    "revision": "c99823ce86768e981e6c1804f0b8e84f"
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
