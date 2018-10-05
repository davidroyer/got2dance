<template>
<section class="container">
  <hero :heading="page.acf.page_title" :image="require('~/assets/images/hero-lessons.jpg')"></hero>

  <div class="content">
    <section>
      <div class="packages">
        <div class="package" v-for="(lessonPackage, index) in page.acf.packages" :key="index">
          <h3 v-html="lessonPackage.name"></h3>
          <div>${{lessonPackage.amount}}/Lesson</div>
        </div>
      </div>
    </section>

    <section>
      <div class="row">
        <h2 class="section__heading">Lesson Info</h2>
        <ul class="info__list">
          <li class="info__item">Do packages expire?<span class="info__answer">If you buy a package, there is no expiration date on using them.</span></li>
          <li class="info__item">Length of lesson?<span class="info__answer">These lessons are all are 50 minutes.</span></li>
          <li class="info__item">How do I get started?<span class="info__answer">Just contact us and we'll get you set up.</span></li>
        </ul>
        <a href="/contact" class="button--ghost">Contact Us</a>
      </div>
    </section>

  </div>
</section>
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

<style scoped>
</style>
