<template>
  <section class="container">
    <h1 class="page-title">Our Dance Instructors</h1>
    <div class="content">

      <div class="instructors flex-center">
        <div class="instructor" v-for="(instructor, index) in positionOrder(instructors)" :key="index">
          <img class="instructor-headshot" :src="require(`@/assets/images/instructors/${instructor.headshot}`)" alt="">
          <div class="instructor-info">
            <h3 class="instructor-name" v-html="instructor.name"></h3>
            <div v-html="instructor.bio"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'
import instructors from '@/data/instructors.json'

export default {
  head () {
    return this.$createSeo('instructors')
  },

  async asyncData ({ app, payload, params }) {
    return {
      instructors
    }
  },

  components: {
    Hero
  },

  methods: {

    positionOrder: function (arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function (a, b) {
        return a.order - b.order
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.instructor {
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 5em;

  @media (min-width: 680px) {
    display: flex;
  }
  &-headshot {
    max-width: 300px;
    border-radius: 400px;
    border: 2px solid lightgray;
    flex: 1 1 300px;
    height: auto;
    align-self: flex-start;
    max-width: 200px;
    justify-content: center;
    margin-left: auto;
    display: block;
    margin-right: auto;

    @media (min-width: 980px) {
      max-width: 250px;
    }
  }

  &-info {
    text-align: left;
    margin-left: auto;
    flex: 0 1 calc(100% - 350px);
  }

  &-name {
    font-size: 1.7em;
    margin-bottom: 0.25em;
    @media (max-width: 679px) {
      margin-bottom: 0.75em;
      text-align: center;
    }
  }
}
</style>
