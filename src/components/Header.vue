<template lang="html">
  <header>
    <nuxt-link class="logo-link" to="/">
      <img
        class="logo"
        src="~/assets/images/logo-white.png"
        alt="Got2Dance Logo"
      />
    </nuxt-link>
    <!-- <button class="drawerToggle" @click="$store.commit('toggleDrawer')">Menu</button> -->
    <v-menu-button
      :checked="mobileMenuIsActive"
      :aria-label="navButtonText"
      :aria-expanded="mobileMenuIsActive ? 'true' : 'false'"
      aria-controls="nav-mobile"
      @click="$store.commit('toggleDrawer')"
    >
    </v-menu-button>
    <nav class="nav desktop-nav" role="navigation">
      <ul class="desktop-nav-list">
        <template v-for="(item, index) in menuItems">
          <li :key="index" class="desktop-nav-item">
            <nuxt-link role="menuitem" :to="handleSlug(item)">{{
              item.title
            }}</nuxt-link>
          </li>
        </template>
        <li v-if="$store.state.isDev" key="examples" class="desktop-nav-item">
          <nuxt-link to="/examples">Examples</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="covid-banner">
      <a @click="$store.commit('toggleBottomSheet')">
        Covid-19 Updates & Information
      </a>
    </div>
  </header>
</template>

<script>
import VMenuButton from '@/components/VMenuButton.vue'

export default {
  name: 'SiteHeader',
  components: {
    VMenuButton
  },

  computed: {
    navButtonText() {
      return this.mobileMenuIsActive ? 'Close' : 'Menu'
    },

    menuItems() {
      return this.$store.getters.menuItems
    },

    mobileMenuIsActive() {
      return this.$store.getters.navigationDrawerOpen
    }
  },
  methods: {
    handleSlug(menuItem) {
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
  // background: #2d2d2d;
  // background-color: #272727f0;
  background-color: #13161ef7;
  padding: 0.65em 0.5em 0.85em;
  left: 0;
  right: 0;
  text-align: center;

  a {
    // font-weight: 600;
    text-decoration: underline;
    font-size: 17px;
    color: #04bc95;
    cursor: pointer;

    @media (min-width: 980px) {
      font-size: 19px;
    }
  }
}
</style>
