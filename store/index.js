export const state = () => ({
  counter: 0,
  navigationDrawerOpen: false
})

export const mutations = {
  toggleDrawer (state) {
    state.navigationDrawerOpen = !state.navigationDrawerOpen
  }
}

export const actions = {
  // increment (state) {
  //   state.counter++
  // }
}

export const getters = {
  drawer (state) {
    return state.navigationDrawerOpen
  }
}
