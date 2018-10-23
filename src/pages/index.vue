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
            <iframe title="Map of Got 2 Dance's Location" class="map-iframe" :width="mapWidth" height="450" frameborder="0" style="border:0" :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt4KeH5KfaYgRHuLYoPAAkLU&key=${key}`" allowfullscreen></iframe>        
          </div>
        </section>
      </div>    
  </div>
</div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import content from '@/data/home.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight)

export default {
  head () {
    return this.$createSeo('index')
  },
  asyncData () {
    return {
      content,
      cards: content.cards,
      key: process.env.MAPS_API_KEY,
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
// .card {

//     @media (max-width: 767px) {
//       width: 100%;
//       margin-left: auto;
//       margin-right: auto;
//       text-align: center;
//       display: block;
//       margin-bottom: 20px;
//       position: relative;
//       box-shadow: 0 2px 5px 0 rgba(40, 31, 31, .56), 0 2px 10px 0 rgba(32, 32, 32, .52);
//       border-radius: 3px;
//       padding: 15px 20px;
//       transition: all .3s ease-in-out;  
//     }
// }
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

// .media {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: .25rem;
    
//     &-image {
//       width: 50px;
//     }
//     &-action {
//       box-shadow: 2px 2px 2px 0 rgba(40, 31, 31, .26), 0 2px 2px 0 rgba(32, 32, 32, .14);
//       border-radius: 50%;
//       top: 15px;
//       width: 35px;
//       height: 35px;
//       font-size: 25px;
//       background-color: #40526b;
//       color: white;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       padding-left: 4px;
//       margin-right: 10px;
//   }
// }


</style>

<style lang="scss" scoped src="@/assets/styles/media.scss">
</style>
