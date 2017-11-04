<template lang="html">
  <div class="navigationDrawer"
    :aria-hidden="$store.state.navigationDrawerOpen ? 'false' : 'true'"
    :class="{active: $store.state.navigationDrawerOpen}">
    <nav>
      <ul>
        <li><nuxt-link to="/">Link</nuxt-link></li>
        <li><nuxt-link to="/">Link</nuxt-link></li>
        <li><nuxt-link to="/">Link</nuxt-link></li>
        <li><nuxt-link to="/">Link</nuxt-link></li>
        <li><nuxt-link to="/">Link</nuxt-link></li>
        <li><nuxt-link to="/">Link</nuxt-link></li>
        <li><nuxt-link to="/">Link</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    activeDrawer () {
      return this.$store.state.navigationDrawerOpen
    }
  }
}
</script>

<style lang="scss">
.navigationDrawer {
    position: fixed;
    right: 0;
    top: 81px;
    min-width: 220px;
    background: white;
    bottom: 0;
    z-index: 999;
    padding: 1em;
    box-shadow: rgba(131, 131, 131, 0.46) 0px 2px 5px 0px, rgba(137, 137, 137, 0.42) 0px 2px 10px 0px;
}
</style>
