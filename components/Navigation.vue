<template lang="html">
  <nav class="nav" aria-label="Website Main Navigation" role="navigation">
    <ul class="nav-list" role="menubar">
      <li class="nav-item" v-for="(item, index) in menuItems" >
        <nuxt-link role="menuitem" class="nav-link" :to="handleSlug(item)" :key="index">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
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
    menuItems () {
      return this.$store.getters.menuItems
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
nav {
  ul {
    list-style-type: none;
    padding-left: 1em;

    li {
      margin: 1em 0;
      font-size: 1.1em;
      a {
        color: #40526b;
        text-decoration: none;
        &.nuxt-link-exact-active {
          font-weight: 900;
          border-bottom: 3px solid;
          text-decoration: none;
        }
      }
    }
  }
}
.nav {
  &-list {
    text-align: right;
    margin-right: 5px;
  }

  &-link {
    font-size: 20px;
  }
}
</style>
