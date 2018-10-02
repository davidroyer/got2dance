<template>
  <section class="container">
    <h1 class="page-title">Our Dance Instructors</h1>

    <div class="content">
      <div class="instructors">
        <div class="instructor" v-for="(instructor, index) in instructors" :key="index">
          <h3 v-html="instructor.title.rendered"></h3>
          <img :src="instructor.acf.headshot" alt="">
          <div v-html="instructor.acf.bio"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  async asyncData({ app, payload, params }) {
    const instructors = await app.$wp.instructors()
    return {
      instructors
    }
  },
  components: {
    Hero
  }
}
</script>

<style>
</style>
