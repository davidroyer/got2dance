<template>
  <section class="container">
    <h1 class="page-title">Our Studio Calendar</h1>
    <div class="content">
        <Calendar/>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Calendar from '@/components/Calendar'

export default {
  head () {
    return this.$createSeo('calendar')
  },
  components: {
    Calendar,
    Hero
  }
}
</script>

<style scoped lang="scss">
#calendar {
  max-width: 1200px;

}
a.fc-event {
    color: white !important;
    font-weight: 400;
}

</style>
