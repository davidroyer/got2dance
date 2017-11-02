<template lang="html">
  <header>
    <img class="logo" src="~/assets/images/logo-white.png" alt="Got2Dance Logo">
    <nav role="navigation">
      <ul>
        <template  v-for="(item, index) in mainNav" >
          <nuxt-link :to="item.link" :key="index">{{item.name}}</nuxt-link>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      mainNav: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About',
          link: '/about'
        },
        {
          name: 'Contact',
          link: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .logo {
    width: 100px;
  }
}

nav {
  a {
    color: white;
    margin: .25em .75em;
  }
}
</style>
