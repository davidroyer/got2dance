<template>
<div :class="$route.name">
  <hero heading="Group Dance Classes" :image="require('~/assets/images/hero-classes.jpg')"></hero>
  <div class="container content">

      <section class="group-classes flex-apart">
        <div class="group-classes group-level flex-center">
          <h3 class="group-classes__heading">Beginner Classes</h3>
          
          <img  src="~/assets/images/classes1.jpg" alt="Beginner Group Classes" class="group-classes__image">
          <ul class="group-classes__list">
            <li class="group-classes__list-item">These classes are designed with the absolute beginner dancer in mind so no need to worry if you have never danced before.</li>
            <li class="group-classes__list-item">Our goals for Beginner classes are to have fun and learn in a comfortable environment.</li>
            <li class="group-classes__list-item">
              Once you feel comfortable in the Beginner Classes then it’s time to try out an Intermediate Class.
            </li>
          </ul>
        </div>

        <div class="group-classes group-level flex-center">
          <h3 class="group-classes__heading">Intermediate Classes</h3>
          <img  src="~/assets/images/classes2.jpg" alt="Intermediate Group Classes" class="group-classes__image">
          <ul class="group-classes__list">
            <li class="group-classes__list-item">These classes are designed for the dancer who has a solid foundation of the basics of whichever style of dance is being taught for that particular class.</li>
            <li class="group-classes__list-item">You will get to fine-tune your technique.</li>
            <li class="group-classes__list-item">
              You will learn more challenging moves in these classes.
            </li>
          </ul>
        </div>
      </section>
    <hr class="section-seperator">
    <section class="flex-center">
      <h2 class="section__heading">Class Info</h2>
      <ul class="info__list">
        <li class="info__item">
          <span class="info__question">Do packages expire?</span>
          <span class="info__answer">If you buy a package, there is no expiration date on using them.</span>
        </li>
        <li class="info__item">
          <span class="info__question">How long are the classes?</span>
          <span class="info__answer">The classes range from 45 to 60 minutes.</span>
        </li>
        <li class="info__item">
          <span class="info__question">How do I get started?</span>
          <span class="info__answer">Just <nuxt-link to="/contact">contact us</nuxt-link> and we'll get you set up.</span>
        </li>
      </ul>
    </section>
  </div>
</div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  components: {
    Hero
  },
  head () {
    return this.$createSeo('classes')
  }
}
</script>

<style lang="scss" scoped>
section.container {
  margin-top: 4.5em;
}
.group-classes {
  &__heading {
    flex-basis: 100%;
    text-align: center;
    @media (min-width: 980px) {
      font-size: 2rem;
    }    
  }
  &__image {
    width: 800px;
  }
}

section {
  &.flex-apart.group-classes {
    display: flex;

    align-items: flex-start;    
    justify-content: space-between;
    max-width: 100%;
      margin-top: .5rem; 
    flex-direction: column;
    
      @media (min-width: 680px) {
        margin-top: 2.5rem; 
        flex-flow: row wrap;  
      }    
  }

  .group-classes {
    &.group-level {
      max-width: 600px;
      flex: 1 1 45%;
      padding: .25rem .5rem;  
      
      @media (min-width: 980px) {
        padding: .25rem 1rem;      
      }
    }
  }
}

</style>
