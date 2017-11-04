export default function ({store}) {
  if (store.state.navigationDrawerOpen === true) {
    store.commit('toggleDrawer')
  }
}
