<template>
  <section class="container">
    <hero heading="Dance Lessons & Classes" :image="require('~/assets/images/hero-home.jpg')"></hero>
    <!-- <hero heading="Dance Lessons & Classes" image="hero-home.jpg"></hero> -->

    <div class="content">
      <div v-for="item in menuItems">
        <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  async asyncData({ app, payload, params }) {
    let menu = await app.$wp.menu('main')
    return {
      menu,
      menuItems: menu.items
    }
  },
  components: {
    Hero
  }
}
</script>

<style>
</style>
