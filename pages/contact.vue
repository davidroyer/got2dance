<template>
<div :class="[$route.name, 'container']">
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
        <textarea class="form-field pure-input-1-2" rows="6" name="message" id="message"  placeholder="Your Message..." required></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        // {
        //   rel: 'stylesheet',
        //   href:
        //     '//cdn.jsdelivr.net/combine/npm/purecss@1.0.0/build/base-min.css,npm/purecss@1.0.0/build/grids-min.css,npm/purecss@1.0.0/build/forms-min.css'
        // }
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
  display: block;
  font-size: 1.3rem;

  &:first-of-type {
    margin-top: 0;
  }
}
label, input, button {
  font-family: 'Vollkorn', sans-serif;
}

.form-button {
  margin-top: 2em;
  font-size: 1.4em !important;
  // font-weight: 500;

}
.hidden {
  display: none;
}
input:not([type="submit"]), input:not([name="bot-field"]), textarea {
  font-size: 16px;
  line-height: normal;
  font-weight: 500;
  background: #fff;
  // color: #1c3e69;
  border: 0;
  display: block;
  width: 100%;
  height: auto;
  padding: 10px;
  // padding-right: 90px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(220, 220, 220, 0.5);
}

input[type=submit], .form-button {
  /* height: 100% !important; */
  min-height: 50px;
  display: block;
  margin-top: 1.5em;
  padding: .5em 1em;
  width: 100% !important;
  display: block;
  border: none;
  // margin: 0;
  text-decoration: none;
  background: #40526b;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, 
              transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
      font-size: 1.4em !important;
    padding: 0 !important;
    min-width: 140px;
    width: 100% !important;
    max-width: 300px;
    margin-left: auto;
    display: block;
}
.content {
  width: 500px;
  padding-top: 0;
}
</style>
