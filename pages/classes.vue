<template>
<div :class="$route.name">
  <hero heading="Group Dance Classes" :image="require('~/assets/images/hero-classes.jpg')"></hero>
  <div class="container content">

      <section class="group-classes flex-apart">
        <div class="group-classes group-level flex-center">
          <h3 class="group-classes__heading">Beginner Classes</h3>
          <img src="https://d33wubrfki0l68.cloudfront.net/3a4e44b7c90326a4fc55590db4e63ee647c1e624/c28f8/img/classes1.jpg" alt="Beginner Group Classes" class="group-classes__image">
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
          <img src="https://d33wubrfki0l68.cloudfront.net/131a42b1460b8d2821bff315a0bf34095757d13f/e4293/img/classes2.jpg" alt="Intermediate Group Classes" class="group-classes__image">
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
        <li class="info__item">Do packages expire?<span class="info__answer">If you buy a package, there is no expiration date on using them.</span></li>
        <li class="info__item">Length of lesson?<span class="info__answer">These lessons are all are 50 minutes.</span></li>
        <li class="info__item">How do I get started?<span class="info__answer">Just contact us and we'll get you set up.</span></li>
      </ul>
      <a href="/contact" class="button--ghost">Contact Us</a>
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
  head: {
    title: 'Classes',
    meta: [
      { hid: 'description', name: 'description', content: 'Classes description' }
    ]
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
