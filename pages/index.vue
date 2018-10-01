<template>
  <section class="container">
    <!-- <hero heading="Dance Lessons & Classes" :image="require('~/assets/images/hero-home.jpg')"></hero> -->
    <hero heading="Dance Lessons & Classes" image="/hero-home.jpg"></hero>

    <div class="content">
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  async asyncData({ app, payload, params }) {
    let main = await app.$wp.menu('main')
    return {
      main
    }
  },
  components: {
    Hero
  }
}
</script>

<style>
</style>
