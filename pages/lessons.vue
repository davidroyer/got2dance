<template>
  <div :class="$route.name">
    <hero :heading="page.acf.page_title" :image="require('~/assets/images/hero-lessons.jpg')"></hero>

    <div class="container">
      <div class="content">
        <section class="flex-center">
          <h2 class="section-heading">Our Lesson Packages</h2>

          <div class="packages">
            <div class="package" v-for="(lessonPackage, index) in page.acf.packages" :key="index">
              <h3 class="package-heading" v-html="lessonPackage.name"></h3>
              <div>${{lessonPackage.amount}}/Lesson</div>
            </div>
          </div>
        </section>
        <hr class="section-seperator">
        <section>
          <div class="row flex-center">
            <h2 class="section-heading">Lesson Info</h2>
            <ul class="info__list">
              <li class="info__item">
                <span class="info__question">Do packages expire?</span>
                <span class="info__answer">If you buy a package, there is no expiration date on using them.</span>
              </li>
              <li class="info__item">
                <span class="info__question">Length of lesson?</span>
                <span class="info__answer">These lessons are all are 50 minutes.</span>
              </li>
              <li class="info__item">
                <span class="info__question">How do I get started?</span>
                <span class="info__answer">Just <nuxt-link to="/contact">contact us</nuxt-link> and we'll get you set up.</span></span>
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

export default {
  async asyncData ({ app }) {
    const page = await app.$wp.page('lessons')
    return {
      page
    }
  },
  components: {
    Hero
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
  }  
}
</style>
