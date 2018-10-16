<template lang="html">
  <header>
    <nuxt-link to="/">
      <img class="logo" src="~/assets/images/logo-white.png" alt="Got2Dance Logo">
    </nuxt-link>
    <!-- <button class="drawerToggle" @click="$store.commit('toggleDrawer')">Menu</button> -->
      <v-menu-button
        @click="$store.commit('toggleDrawer')"
        :checked="mobileMenuIsActive"
        :aria-label="navButtonText"
        :aria-expanded="mobileMenuIsActive ? 'true' : 'false'"
        aria-controls="nav-mobile">
      </v-menu-button>
    <nav class="nav desktop-nav" role="navigation">
      <ul class="desktop-nav-list">
        <template v-for="(item, index) in menuItems" >
         <li class="desktop-nav-item"> <nuxt-link role="menuitem" :to="handleSlug(item)" :key="index">{{item.title}}</nuxt-link></li>
          <!-- <nuxt-link :to="item.link" :key="index">{{item.title}}</nuxt-link> -->
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
import Hero from '@/components/Hero.vue'
import VMenuButton from '@/components/VMenuButton.vue'

export default {
  components: {
    Hero,
    VMenuButton
  },
  name: 'SiteHeader',

  computed: {
    navButtonText () {
      return this.mobileMenuIsActive ? 'Close' : 'Menu'
    },

    menuItems () {
      return this.$store.getters.menuItems
    },

    mobileMenuIsActive () {
      return this.$store.getters.navigationDrawerOpen
    }
  },
  methods: {
    handleSlug (menuItem) {
      const { url } = menuItem
      const siteUrl = `${this.$store.state.siteData.home}/`
      if (url === this.$store.state.siteData.url) return '/'
      else return url.replace(siteUrl, '/')
    }
  }
}
</script>

<style lang="scss" scoped>
.desktop-nav {
    display: none;
  
  @media (min-width: 900px) {
    display: block;
  }
  &-list {
    margin-bottom: 0;
    display: flex;
  }
  &-item {
    list-style-type: none;
    margin-bottom: 0;
  }
}

.drawerToggle {
  -webkit-appearance: none;
  cursor: pointer;
  background: white;
  border: none;
  font-size: 1em;
  font-weight: 400;
  font-family: Vollkorn, sans-serif;
  position: relative;
  z-index: 9;
}
  @media (min-width: 900px) {
    .drawerToggle, .v-menu-button {
      display: none;
    }
  }
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  justify-content: space-between;
  padding: 0 1.25em;
  .logo {
    width: 125px;
    margin: 0;
  }
}

nav {
  a {
    color: white;
    margin: 0.25em 0.75em;
  }
}
</style>
