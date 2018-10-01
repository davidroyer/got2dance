<template>
  <section class="container">
    <h1 class="page-title">Our Studio Calendar</h1>
    <div class="content">
      <no-ssr>
        <Calendar></Calendar>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Calendar from '@/components/Calendar'

export default {
  components: {
    Calendar,
    Hero
  },

  head() {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ]
      // link: [
      //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      // ]
    }
  }
}
</script>

<style>
#calendar {
  max-width: 1200px;
}
</style>
