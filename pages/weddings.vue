<template>
<div :class="$route.name">
  <hero heading="Weddings" :image="require('~/assets/images/hero-weddings.jpg')"></hero>
  <div class="container content">
    <section class="flex-center">
        <div class="section-headings">
          <h2 class="section-heading">Our Wedding Packages</h2>
          <span class="section-subheading">All lessons in wedding packages are 25 minute lessons </span>
        </div>
                    <div class="packages">
                      <div class="package">
                        <span class="package__level">Bronze</span>
                        <h3 class="package__heading">2 Lesson Package</h3>
                        <p class="package__price">$80</p>
                    </div>
                    <div class="package">
                        <span class="package__level">Silver</span>
                        <h3 class="package__heading">12 Lesson Package</h3>
                        <p class="package__price">$230</p>
                    </div>
                    <div class="package">
                        <span class="package__level">Platinum</span>
                        <h3 class="package__heading">24 Lesson Package</h3>
                        <p class="package__price">$430</p>
                    </div>                      
                    </div>

    </section>
    <hr class="section-seperator">
    <section>
      <div class="row flex-center">
        <h2 class="section-heading">Wedding Info</h2>
        <ul class="info__list">
          <li class="info__item">
            <span class="info__question">What about a song?</span>
            <span class="info__answer">If you have a song picked out great. If not, that's okay too.</span>
          </li>
          <li class="info__item">
            <span class="info__question">Just want a couple moves?</span>
            <span class="info__answer">You'll want the bronze or silver package.</span>
          </li>
          <li class="info__item">
            <span class="info__question">Want a choreography?</span>
            <span class="info__answer">You'll want the silver or platinum package.</span>
          </li>
          <li class="info__item">
            <span class="info__question">Want to get started?</span>
            <span class="info__answer">Fantastic! <nuxt-link to="/contact" class="button--ghost">Contact Us</nuxt-link> us to get started!</span>
          </li>
        </ul>
        
      </div>
    </section>
  </div>
</div>
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

<style lang="scss" scoped>
.info {
  &__list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    flex-direction: column;
    
    @media (min-width: 680px) {
      flex-flow: row wrap;
    }
  }

  &__item {
    flex: 0 1 46%;
    width: 350px;
    margin: 0 !important;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    text-align: left;
    align-content: baseline;    
  }
  &__question, &__answer {
    display: block;
  }

  &__question {
    font-weight: 700;
    font-size: 1.05rem;
    text-align: center;
  }

    &__answer {
    margin-bottom: 0 !important;
    margin-top: .15rem;
    text-align: center;
    width: 100%;
  }
}
</style>
