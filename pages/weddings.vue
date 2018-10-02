<template>
  <section class="container">
    <h1 class="page-title">Weddings</h1>

    <div class="content">
      <pre>{{page}}</pre>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  async asyncData({ app }) {
    const page = await app.$wp.page('weddings')
    return {
      page
    }
  },
  components: {
    Hero
  }
}
</script>

<style scoped>
.page-title {
  text-align: center;
}
.siteWrapper .container {
  text-align: left;
  justify-content: left;
}
</style>
