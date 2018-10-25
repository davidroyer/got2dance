<template>
<div class="home">
  <hero heading="Dance Lessons & Classes" :image="require('~/assets/images/hero-home.jpg')"></hero>

  <div class="container">
    <div class="content">

      <!-- <div class="card-group flex flex-wrap -m-3">   
        <nuxt-link class="card shadow-md flex w-full sm:w-1/2 md:w-1/3 flex flex-col p-3" role="link" tag="div" v-for="(card, index) in cards" :key="index" :to="card.link">
            <img :src="require(`~/assets/images/${card.img}`)" alt="Dance Lessons" class="media__image">
            <h3 class="card-heading" v-text="card.title"></h3>
            <h4 class="hidden md:block card-content" v-text="card.text"></h4>
            <div class="md:hidden card-action media-action">
              <fa-icon icon="chevron-right"></fa-icon>
            </div>
        </nuxt-link>
      </div> --> 
        <section class="media__row--flex">
          <nuxt-link role="link" tag="div" v-for="(card, index) in cards" :key="index" :to="card.link" class="media__link">
            <div class="media">
              <img :src="require(`~/assets/images/${card.img}`)" alt="Dance Lessons" class="media__image">
              <h3 class="media__heading" v-text="card.title"></h3>
              <h4 class="media__content__cover" v-text="card.text"></h4>
               <div class="media-arrow-icon media-action">
                  <fa-icon icon="chevron-right"></fa-icon>
               </div>
            </div>
          </nuxt-link>
        </section>
        <hr class="section-seperator">
        <section class="location-section">
          <h3 class="location-heading">Our Location</h3>
          <address class="location-address">107 S. Hurstbourne Pkwy Louisville, KY </address>     
    
          <div class="map-wrapper">
            <iframe title="Map of Got 2 Dance's Location" class="map-iframe" :width="mapWidth" height="450" frameborder="0" style="border:0" :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt4KeH5KfaYgRHuLYoPAAkLU&key=${mapsApiKey}`" allowfullscreen></iframe>        
          </div>
        </section>
      </div>    
  </div>
</div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import content from '@/data/home.json'

export default {
  head () {
    return this.$createSeo('index')
  },
  asyncData () {
    return {
      content,
      cards: content.cards,
      mapWidth: '100%'
    }
  },
  data: () => ({
    mapsApiKey: process.env.MAPS_API_KEY
  }),
  components: {
    Hero
  },
  mounted () {
    if (window.matchMedia('(min-width: 610px)').matches) this.mapWidth = '600px'
  }
}
</script>
