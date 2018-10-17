<template>
<div class="home">
  <hero heading="Dance Lessons & Classes" :image="require('~/assets/images/hero-home.jpg')"></hero>

  <div class="container">
    <div class="content">
        <section class="media__row--flex">
          <nuxt-link role="link" tag="div" v-for="(card, index) in cards" :key="index" :to="card.link" class="media__link">
            <div class="media">
              <h3 class="media__heading" v-text="card.title"></h3>
              <img :src="require(`~/assets/images/${card.img}`)" alt="Dance Lessons" class="media__image">
              <h4 class="media__content__cover" v-text="card.text"></h4>
              <i class="material-icons" style="font-size:24px; color:white;">arrow_forward_ios</i>
            </div>
          </nuxt-link>
        </section>
        <hr class="section-seperator">
        <section class="location-section">
          <h3 class="location-heading">Our Location</h3>
          <address class="location-address">107 S. Hurstbourne Pkwy Louisville, KY </address>     
          <div class="map-wrapper">
            <iframe title="Map of Got 2 Dance's Location" class="map-iframe" :width="mapWidth" height="450" frameborder="0" style="border:0" :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt4KeH5KfaYgRHuLYoPAAkLU&key=${key}`" allowfullscreen></iframe>        
          </div>
        </section>
      </div>    
  </div>
</div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import content from '@/content/home.json'
// import config from '@@/site.config.js's
const MapsApiKey = process.env.MAPS_API_KEY

export default {
  asyncData () {
    return {
      content,
      cards: content.cards,
      key: MapsApiKey,
      mapWidth: '100%'
    }
  },
  components: {
    Hero
  },
  mounted () {
    if (window.matchMedia('(min-width: 610px)').matches) this.mapWidth = '600px'
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
      margin-left: auto;
      margin-right: auto;
      text-align: center;
  }
}

// .map-wrapper {
// 	height: 0;
// 	overflow: hidden;
// 	padding-bottom: 60%; /* aspect ratio */
// 	position: relative;
// }

// .map-iframe {
// 	border: 0;
// 	height: 100%;
// 	left: 0;
// 	position: absolute;
// 	top: 0;
// 	width: 100%;
// }

</style>

<style lang="scss" scoped src="@/assets/styles/media.scss">
</style>
