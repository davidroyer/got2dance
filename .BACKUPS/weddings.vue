<template>
<section class="container">
  <h1 class="page-title">Weddings</h1>

  <div class="content">
    <section>
      <div class="row">
        <h2 class="section__heading">Wedding Info</h2>
        <ul class="info__list">
          <li class="info__item">What about a song?<span class="info__answer">If you have a song picked out great. If not, that's okay too.</span></li>
          <li class="info__item">Just want a couple moves?<span class="info__answer">You'll want the bronze or silver package.</span></li>
          <li class="info__item">Want a choreography?<span class="info__answer">You'll want the silver or platinum package.</span></li>
          <li class="info__item">Want to get started?<span class="info__answer">Fantastic! Contact us to get started!</span></li>
        </ul>
        <a href="/contact" class="button--ghost">Contact Us</a>
      </div>
    </section>
  </div>
</section>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  async asyncData ({ app }) {
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
.siteWrapper .container {
  text-align: left;
  justify-content: left;
}
</style>
