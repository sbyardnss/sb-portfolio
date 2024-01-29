<template>
  <div class="light-text" :class="$style.emailFormContainer">
    <div class="timeline_tab"><span :class="$style.emailFormHeader">Contact Me</span>
        </div>
    <form id="contact-form" :class="$style.emailForm" v-on:submit="sendEmail($event)">
      <div class="flex column">
        <label for="name">Your Name</label>
        <input class="w-50" type="text" id="name" name="from_name" required />
      </div>
      <div class="flex column">
        <label for="email">Your Email Address</label>
        <input class="w-50" type="email" id="email" name="from_email" required />
      </div>
      <div class="flex column">
        <label for="message">Your Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>
  
      <button class="btn-action w-quarter text-align-c" type="submit">Send</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default defineComponent({
  name: 'EmailForm',
  data() {
    return {
      emailService: emailjs,
      env: process.env,
    }
  },
  methods: {
    sendEmail(event: Event) {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const formData = new FormData(target);

      let params: Record<string, unknown> = {};
      for (let pair of formData.entries()) {
        params[pair[0]] = pair[1];
      }
      //ENV VARIABLES FOR BELOW
      this.emailService.send(this.env.VUE_APP_EMAIL_SERVICE_KEY, this.env.VUE_APP_EMAIL_TEMPLATE_KEY, params, this.env.VUE_APP_EMAIL_PUBLIC_KEY)
        .then((result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.status, result.text);
          return result;
        }, (error: Error) => {
          console.log('FAILED...', error);
        });
    }
  }
})
</script>
<style module>
.emailFormContainer {
  /* width: 30em;
  height: 30em; */
  /* background-color: blue; */
  margin: 1em;
}
.emailForm {
  width: 30em;
  height: 30em;
}

.emailFormHeader {
  color: var(--first-color-lighter);
}
</style>