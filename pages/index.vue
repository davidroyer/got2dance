<template>
  <section class="container">
    <hero heading="Dance Lessons & Classes" :image="require('~/assets/images/hero-home.jpg')"></hero>
    <!-- <hero heading="Dance Lessons & Classes" image="hero-home.jpg"></hero> -->

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
