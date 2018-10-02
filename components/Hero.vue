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
  height: 350px;
  background-size: cover;
  background-position: top center;
  position: relative;
  // background: url('~assets/hero-home.jpg';

  &__heading {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(228, 228, 228, 0.71);
    margin: 0;
    padding: 0.5em;
    color: #40404c;
  }
}
</style>
