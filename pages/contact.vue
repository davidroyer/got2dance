<template>
  <div class="container">
    <h1 class="page-title">Contact</h1>
    <div class="content">
      <form name="contact" class="pure-form pure-form-stacked" action="/thank-you" netlify-honeypot="bot-field" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" required/>
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" required/>
        <label class="form-label" for="message">
          Message:
        </label>
        <!-- <textarea class="pure-input-1-2" placeholder="Your Message..."></textarea> -->
        <textarea class="form-field pure-input-1-2" name="message" id="message"  placeholder="Your Message..." required></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            '//cdn.jsdelivr.net/combine/npm/purecss@1.0.0/build/base-min.css,npm/purecss@1.0.0/build/grids-min.css,npm/purecss@1.0.0/build/forms-min.css'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
input,
textarea {
  min-width: 300px;
}
label {
  margin-top: 1.5em;
}
.form-button {
  margin-top: 2em;
}
</style>
