import menu from '@/data/menu.json'
import siteData from '@/data/site-data.json'
import { groq } from '@nuxtjs/sanity'

const settingsQuerys = groq`*[_type == "siteSettings"][0] {
  _id,
  title,
  description
}`

export const state = () => ({
  isDev: null,
  navigationDrawerOpen: false,
  menuIsActive: false,
  menu,
  siteData,
  googleApiKey: process.env.GOOGLE_API_KEY,
  mapsApiKey: process.env.MAPS_API_KEY

})

export const mutations = {
  setCurrentPost (state, post) {
    state.post = post
  },

  setSiteData (state, payload) {
    state.siteData = payload
  },

  setMenu (state, payload) {
    state.menu = payload
  },

  toggleDrawer (state) {
    state.navigationDrawerOpen = !state.navigationDrawerOpen
  },

  setDev (state, payload) {
    state.isDev = payload
  },

  setSiteSettings (state, settings) {
    state.siteSettings = settings
  }
}

export const actions = {
  async nuxtServerInit ({ commit, state }, {isDev, $sanity}) {
    commit('setDev', isDev)

    const siteSettings = await $sanity
      .fetch(settingsQuerys)
      .catch((e) => console.error(e))

    commit('setSiteSettings', siteSettings)
  }
}

export const getters = {
  currentPost: state => state.post,
  menuItems: state => state.menu.items,
  siteData: state => state.siteData,
  siteHome: state => state.siteData.home,
  siteTitle: state => state.siteData.name,
  siteDescription: state => state.siteData.description,
  navigationDrawerOpen: state => state.navigationDrawerOpen
}
