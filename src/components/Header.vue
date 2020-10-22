<template lang="html">
  <header>
    <nuxt-link class="logo-link" to="/">
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
         <li class="desktop-nav-item" :key="index">
           <nuxt-link role="menuitem" :to="handleSlug(item)">{{item.title}}</nuxt-link>
          </li>
        </template>
         <li v-if="$store.state.isDev" key="examples" class="desktop-nav-item">
          <nuxt-link to="/examples">Examples</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="covid-banner"><nuxt-link to="/covid-update">View Covid-19 Updates & Information</nuxt-link></div>
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
    .drawerToggle,
    .v-menu-button {
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

      &-link {
        flex: 1 0 125px;
      }
    }
  }

  nav {
    a {
      color: white;
      margin: 0.25em 0.75em;
    }
  }

  .desktop-nav-item a {
    @media (min-width: 900px) and (max-width: 1279px) {
      font-size: 18px !important;
      margin: 0.25em 0.5em;
    }
  }

  .covid-banner {
    position: absolute;
    top: 100%;
    background: #2d2d2d;
    padding: 0.5em .5em .75em;
    left: 0;
    right: 0;
    text-align: center;

    a {
      font-weight: 600;
      text-decoration: underline;
    }
  }
</style>
