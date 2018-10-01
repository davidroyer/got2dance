import WpApi from '@/services/wpapi'
const apiBaseUrl = process.env.apiBaseUrl

/**
 * Set `$wp` on the `app` instance
 * This way we can use it in middleware and pages `asyncData`/`fetch`
 */
export default async ({ app }, inject) => {
  const wp = new WpApi({
    wpSiteUrl: apiBaseUrl
  })

  await wp.createCustomPostRoutes()
  app.$wp = wp
  inject('wp', wp)
}
