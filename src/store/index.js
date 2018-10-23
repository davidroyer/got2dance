// require('dotenv').config()

export const state = () => ({
  isDev: null,
  navigationDrawerOpen: false,
  menuIsActive: false,
  siteData: {},
  menu: {}
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
  }
}

export const actions = {
  async nuxtServerInit ({ commit, state }, context) {
    const { app, isDev } = context
    const siteData = await app.$wp.siteData()
    const menu = await app.$wp.menu('main')
    commit('setDev', isDev)
    commit('setSiteData', siteData)
    commit('setMenu', menu)
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
