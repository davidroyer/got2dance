<template lang="html">
  <div class="content">
    <h1 class="page-title">
      Thank you
    </h1>
    <p class="text-center">
      <nuxt-link to="/">Back to home</nuxt-link >
    </p>
  </div>  
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    width: 100%; 
  }
  .text-center {
    margin-left: auto;
    margin-right: auto;
  }
</style>
