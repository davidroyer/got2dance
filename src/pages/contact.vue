<template>
  <div :class="[$route.name, 'container']">
    <h1 class="page-title">Contact</h1>
    <div class="content">
      <form
        name="contact"
        class="pure-form pure-form-stacked"
        action="/thank-you"
        netlify-honeypot="bot-field"
        method="post"
        netlify
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <div class="mb-4">
          <label class="form-label" for="name"> Name: </label>
          <input
            id="name"
            class="form-field focus:shadow-outline"
            name="name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="form-label" for="email"> Email: </label>
          <input
            id="email"
            class="form-field focus:shadow-outline"
            name="email"
            required
          />
        </div>

        <div class="mb-4">
          <label class="form-label" for="message"> Message: </label>
          <textarea
            id="message"
            class="form-field focus:shadow-outline"
            rows="6"
            name="message"
            placeholder="Your Message..."
            required
          ></textarea>
        </div>

        <v-button type="submit">Submit</v-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return this.$createSeo('contact')
  }
}
</script>

<style lang="postcss" scoped>
input,
textarea {
  min-width: 300px;
}
label {
  &:first-of-type {
    margin-top: 0;
  }
}
label,
input,
textarea,
button {
  font-family: 'Vollkorn', sans-serif;
}

.form-button {
  margin-top: 2em;
  font-size: 1.4em !important;
}
.hidden {
  display: none;
}

.v-button {
  color: #40526b;
  border-color: #40526b;
  @apply block mt-2 ml-auto;

  &:hover,
  &:focus {
    background-color: #40526b;
    @apply .text-white shadow-md;
  }
}

.content {
  width: 500px;
  padding-top: 0;
}
.form-label {
  @apply block text-grey-darker font-bold mb-2;
}
.form-field {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight;
}
</style>
