<template>
  <div :class="[$route.name, 'container']">
    <h1 class="page-title mb-0">Covid-19 Updates & Information</h1>
    <div class="content max-w-md">
      <h2 id="studio-location-update">Studio Location Update</h2>
      <p>
        In March, we moved out of the studio that was our home for the past
        several years. We are now available for lessons at 2 different locations
        which can be found on the home page towards the bottom.
      </p>
      <h2 id="covid-related-information">Covid Related Information</h2>
      <ul>
        <li>
          Currently no group classes are available but private groups are
          available.
        </li>
        <li>Wearing a mask is optional for students.</li>
        <li>A mask is will always be worn by the instructor.</li>
        <li>Payment as cash or check accepted.</li>
        <li>Hand sanitizer if available.</li>
        <li>Cleaning takes place frequently.</li>
        <li>Temperatures are taken prior to lessons.</li>
        <li>
          You must fill short questionnaire about any possible symptoms you have
          experienced.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
h2 {
  @apply mb-0 mt-8;
}
</style>
