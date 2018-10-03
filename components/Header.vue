<template lang="html">
  <header>
    <img class="logo" src="~/assets/images/logo-white.png" alt="Got2Dance Logo">
    <button class="drawerToggle" @click="$store.commit('toggleDrawer')">Menu</button>

    <nav class="nav nav--desktop" role="navigation">
      <ul>
        <template  v-for="(item, index) in menuItems" >
          <nuxt-link role="menuitem" :to="handleSlug(item)" :key="index">{{item.title}}</nuxt-link>
          <!-- <nuxt-link :to="item.link" :key="index">{{item.title}}</nuxt-link> -->
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  components: {
    Hero
  },
  name: 'SiteHeader',
  data() {
    return {
      mainNav: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Lessons',
          link: '/lessons'
        },
        {
          name: 'Classes',
          link: '/classes'
        },
        {
          name: 'Instructors',
          link: '/instructors'
        },
        {
          name: 'Calendar',
          link: '/calendar'
        },
        {
          name: 'Contact',
          link: '/contact'
        }
      ]
    }
  },

  computed: {
    menuItems() {
      return this.$store.getters.menuItems
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
.nav--desktop {
  display: none;

  @media (min-width: 900px) {
    display: block;
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
  @media (min-width: 900px) {
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
  }
}

nav {
  a {
    color: white;
    margin: 0.25em 0.75em;
  }
}
</style>
