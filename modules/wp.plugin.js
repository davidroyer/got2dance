import WpApi from '@/modules/core/index.js'
// import WpApi from '@/services/wpapi'
const apiBaseUrl = process.env.apiBaseUrl

/**
 * Set `$wp` on the `app` instance
 * This way we can use it in middleware and pages `asyncData`/`fetch`
 */
export default async (ctx, inject) => {
  const moduleOptions = <%= serialize(options) %>;
  console.log('moduleOptions: ', moduleOptions);
  const wp = await new WpApi({
    wpSiteUrl: moduleOptions.wpSiteUrl
  })
  // const wp = await new WpApi(options)
  ctx.$wp = wp
  inject('wp', wp)
}

// const wp = new wpApi(<%= serialize(options) %>)
//
// export default function (ctx, inject) {
//   inject('wp', wp)
// }
