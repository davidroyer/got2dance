<template>
  <div class="siteWrapper">
    <site-header></site-header>
    <transition name="slide">
      <navigation-drawer v-if="$store.state.navigationDrawerOpen"></navigation-drawer>
    </transition>
    <main>
      <nuxt/>
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>

export default {
  components: {
    SiteHeader: () => import('~/components/Header'),
    SiteFooter: () => import('~/components/Footer'),
    NavigationDrawer: () => import('~/components/NavigationDrawer')
  }
}
</script>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
