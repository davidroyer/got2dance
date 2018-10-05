<template>
<section class="container block">
  <hero heading="Dance Lessons & Classes" :image="require('~/assets/images/hero-home.jpg')"></hero>

  <div class="content">
    <div class="row media__row--flex">
      <nuxt-link role="link" tag="div" v-for="(card, index) in cards" :key="index" :to="card.link" class="media__link">
        <div class="media">
          <h3 class="media__heading" v-text="card.title"></h3>
          <img :src="require(`~/assets/images/${card.img}`)" alt="Dance Lessons" class="media__image">
          <h4 class="media__content__cover" v-text="card.text"></h4>
          <i class="material-icons" style="font-size:24px; color:white;">arrow_forward_ios</i>
        </div>
      </nuxt-link>
    </div>
    <section class="location-section">
      <h3 class="location-heading">Our Location</h3>
      <address class="location-address">107 S. Hurstbourne Pkwy Louisville, KY </address>     
      <iframe width="600" height="450" frameborder="0" style="border:0" :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt4KeH5KfaYgRHuLYoPAAkLU&key=${key}`" allowfullscreen></iframe>
    </section>
  </div>
</section>
</template>

<script>
import Hero from '@/components/Hero.vue'
import content from '@/content/home.json'

export default {
  asyncData () {
    return {
      content,
      cards: content.cards,
      key: process.env.MAPS_API_KEY
    }
  },
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
.location {
    &-section {
      margin-top: 3.5em;
      margin-bottom: 3.5em;
      margin-left: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  &-heading {
    font-size: 2em;
  }
  &-address {
      margin-top: -.5em;
      margin-bottom: 1.5em;
      font-size: 1.25em;
  }
}

</style>

<style lang="scss" scoped src="@/assets/styles/media.scss">
</style>
