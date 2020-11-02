<template>
  <div :class="$route.name">
    <hero
      :heading="page.acf.page_title"
      :image="require('~/assets/images/hero-lessons.jpg')"
    ></hero>

    <div class="container">
      <div class="content">
        <section class="flex-center">
          <div class="package" style="border: none">
            <h2 class="package-heading mt-0">All Private Lessons Are:</h2>
            <div><strong>55 minutes for $75</strong></div>
          </div>
        </section>

        <hr class="mt-8 mx-16" />

        <section>
          <div class="row flex-center">
            <h2 class="section-heading mb-4">Lesson Info</h2>
            <ul class="info__list">
              <li class="info__item">
                <span class="info__question">Do you offer any packages?</span>
                <span class="info__answer">
                  We currently do not offer packages. This could change in the
                  near future though so please check back in with us.
                </span>
              </li>
              <li class="info__item">
                <span class="info__question">Length of lesson?</span>
                <span class="info__answer">
                  All lessons are 55 minutes. We currently don't offer any other
                  options for length of time.
                </span>
              </li>
              <li class="info__item">
                <span class="info__question">How do I get started?</span>
                <span class="info__answer">
                  You can reach us by filling out the form on the
                  <nuxt-link to="/contact">contact us</nuxt-link> and we'll get
                  back with to get you set up.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import content from '@/data/lessons.json'
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "lessonPackages"] {
  _id,
  name,
  price
}`

export default {
  components: {
    Hero
  },

  async asyncData({ app, $sanity }) {
    const lessonPackages = await $sanity.fetch(query)
    return {
      lessonPackages,
      page: content
    }
  },
  head() {
    return this.$createSeo('lessons')
  }
}
</script>

<style scoped lang="scss">
.info {
  &__list {
    display: flex;
    justify-content: center;
    margin: 0;
    flex-direction: column;

    @media (min-width: 680px) {
      flex-flow: row wrap;
    }
  }
  &__item {
    flex: 0 1 49%;
    padding: 3rem;
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
  }
}
</style>
