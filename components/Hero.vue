<template lang="html">
  <!-- <div class="hero" :style="{ backgroundImage: `url(~/assets/${image})` }"> -->
  <div class="hero" :style="{ 'background-image': 'url(' + image + ')' }">

    <h1 class="hero__heading" v-text="heading"></h1>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: ['heading', 'image'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  align-self: flex-start;
  height: 250px;
  background-size: cover;
  background-position: top center;
  position: relative;
  @media (min-width: 800px) {
    height: 375px;
  }
  &__heading {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(232, 232, 232, 0.8);
    margin: 0;
    padding: 0.5em;
    color: #40404c;
    font-size: 2.5rem;
    line-height: 1.1;
  }
}
</style>
