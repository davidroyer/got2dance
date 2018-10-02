<template>
  <section class="container">
    <hero :heading="page.acf.page_title" :image="require('~/assets/images/hero-lessons.jpg')"></hero>

    <div class="content">
      <div class="packages">
        <div class="package" v-for="(lessonPackage, index) in page.acf.packages" :key="index">
          <h3 v-html="lessonPackage.name"></h3>
          <div>${{lessonPackage.amount}}/Lesson</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  async asyncData({ app }) {
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
