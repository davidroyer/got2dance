<template>
  <div :class="[$route.name, 'container']">
    <h1 class="page-title">Contact</h1>
    <div class="content">
      <form name="contact" class="pure-form pure-form-stacked" action="/thank-you" netlify-honeypot="bot-field" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>

        <div class="mb-4">
          <label class="form-label" for="name">
            Name:
          </label>
          <input class="form-field focus:shadow-outline" name="name" id="name" required />
        </div>
        <div class="mb-4">
          <label class="form-label" for="email">
            Email:
          </label>
          <input class="form-field focus:shadow-outline" name="email" id="email" required />
        </div>

        <div class="mb-4">
          <label class="form-label" for="message">
            Message:
          </label>
          <textarea class="form-field focus:shadow-outline" rows="6" name="message" id="message" placeholder="Your Message..." required></textarea>
        </div>

        <v-button type="submit">Submit</v-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return this.$createSeo('contact')
  }
}
</script>

<style lang="scss" scoped>

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
  font-family: "Vollkorn", sans-serif;
}

.form-button {
  margin-top: 2em;
  font-size: 1.4em !important;
  // font-weight: 500;
}
.hidden {
  display: none;
}
// input:not([type="submit"]), input:not([name="bot-field"]), textarea {
//   font-size: 16px;
//   line-height: normal;
//   font-weight: 500;
//   background: #fff;
//   // color: #1c3e69;
//   border: 0;
//   display: block;
//   width: 100%;
//   height: auto;
//   padding: 10px;
//   // padding-right: 90px;
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
//   background-color: rgba(220, 220, 220, 0.5);
// }

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

  // &:focus {
  //   @apply outline-none;
  // }
}
</style>
