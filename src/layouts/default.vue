<template>
  <div class="siteWrapper">
    <site-header></site-header>

    <transition name="slide">
      <navigation-drawer
        v-if="$store.state.navigationDrawerOpen"
      ></navigation-drawer>
    </transition>
    <main>
      <nuxt />
    </main>

    <BottomSheet :show-bottom-sheet="bottomSheetOpen" />
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/Header.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter: () => import('@/components/Footer'),
    BottomSheet: () => import('@/components/BottomSheet'),
    NavigationDrawer: () => import('@/components/NavigationDrawer')
  },
  computed: {
    bottomSheetOpen() {
      return this.$store.state.bottomSheetOpen
    }
  },

  watch: {
    bottomSheetOpen(newValue) {
      console.log('bottomSheetOpen -> newValue', newValue)
      const $html = document.querySelector('html')
      if (newValue === true) {
        $html.classList.add('scroll-lock')
      } else {
        $html.classList.remove('scroll-lock')
      }
    }
  }
}
</script>

<style lang="scss">
html {
  &.scroll-lock {
    overflow-y: hidden;

    body {
      overflow-y: hidden;
    }
  }
}
</style>
