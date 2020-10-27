<template>
  <div :class="$route.name">
    <hero
      heading="Weddings"
      :image="require('~/assets/images/hero-weddings.jpg')"
    ></hero>
    <div class="container content">
      <section class="flex-center">
        <div class="package" style="border: none">
          <h2 class="package-heading mt-0">All Wedding Lessons Are:</h2>
          <div><strong>55 minutes for $75</strong></div>
        </div>
      </section>

      <hr class="section-seperator" />
      <section>
        <div class="row flex-center">
          <h2 class="section-heading">Wedding Info</h2>
          <ul class="info__list">
            <li class="info__item">
              <span class="info__question">Do you offer any packages?</span>
              <span class="info__answer">
                We currently do not offer packages. This could change in the
                near future though so please check back in with us.
              </span>
            </li>
            <li class="info__item">
              <span class="info__question">What about a song?</span>
              <span class="info__answer"
                >If you have a song picked out great. If not, that's okay
                too.</span
              >
            </li>
            <li class="info__item">
              <span class="info__question">Just want a couple moves?</span>
              <span class="info__answer">
                That's totally fine. We will always adapt to what you you're
                wanting. We're just here to help make your first dance the best
                and most enjoyable it can be.
              </span>
            </li>
            <li class="info__item">
              <span class="info__question">Want a choreography?</span>
              <span class="info__answer">
                Fantastic. We love to choreograph wedding dances.
              </span>
            </li>
            <li class="info__item">
              <span class="info__question">Want to get started?</span>
              <span class="info__answer"
                >Fantastic!
                <nuxt-link to="/contact" class="button--ghost"
                  >Contact Us</nuxt-link
                >
                us to get started!</span
              >
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
  components: {
    Hero
  },
  async asyncData({ app }) {
    // const page = await app.$wp.page('weddings')
    return {
      // page
    }
  },
  head() {
    return this.$createSeo('weddings')
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
  &__question,
  &__answer {
    display: block;
  }

  &__question {
    font-weight: 700;
    font-size: 1.05rem;
    text-align: center;
  }

  &__answer {
    margin-bottom: 0 !important;
    margin-top: 0.15rem;
    text-align: center;
    width: 100%;
  }
}
</style>
