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

    <BottomSheet :show-bottom-sheet="$store.state.bottomSheetOpen" />
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
  }
}
</script>
