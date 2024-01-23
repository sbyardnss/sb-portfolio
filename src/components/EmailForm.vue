<template>
  <form id="contact-form" class="padded-container-1" v-on:submit="sendEmail($event)">
    <div>
      <label for="name">Your Name</label>
      <input type="text" id="name" name="from_name" required />
    </div>
    <div>
      <label for="email">Your Email Address</label>
      <input type="email" id="email" name="from_email" required />
    </div>
    <div>
      <label for="message">Your Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </div>

    <button type="submit">Send</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default defineComponent({
  name: 'EmailForm',
  data() {
    return {
      emailService: emailjs,
    }
  },
  methods: {
    // sendEmail(event: Event) {
    //   event.preventDefault();
    //   console.log('event', event)
    //   console.log('event.target', event.target)
    //   this.emailService.sendForm('service_qrsa0q6', 'template_58mrsr8', event.target as HTMLFormElement, 'OeU7Hg7Fngcx1YL4C')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log('SUCCESS!', result.status, result.text);
    //     return result;
    //     }, (error: Error) => {
    //       console.log('FAILED...', error);
    //     });
    // }
    sendEmail(event: Event) {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const formData = new FormData(target);

      let params: Record<string, unknown> = {};
      for (let pair of formData.entries()) {
        params[pair[0]] = pair[1];
      }

      this.emailService.send('service_qrsa0q6', 'template_58mrsr8', params, 'OeU7Hg7Fngcx1YL4C')
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