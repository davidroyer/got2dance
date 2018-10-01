<template>
  <section class="container">
    <hero heading="Group Dance Classes" :image="require('~/assets/images/hero-classes.jpg')"></hero>
    <!-- <hero heading="Group Dance Classes" image="/hero-classes.jpg"></hero> -->

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
  components: {
    Hero
  }
}
</script>

<style>
</style>
