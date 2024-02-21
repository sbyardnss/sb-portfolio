<template>
  <div :class="$style.contactPageContainer" class="flex column align-c">
    <div class="light-text">
      email:
      <a :class="$style.emailLink" href="mailto:stephenjbyard@gmail.com">stephenjbyard@gmail.com</a>
    </div>
    
    <SocialMedia 
      v-if="isMobileView"
      :orientation="'row'" 
      :position-override="'initial'" />
    <SocialMedia
      v-else />
    <EmailForm />
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import EmailForm from './EmailForm.vue';
import SocialMedia from './SocialMedia.vue';

export default defineComponent({
  name: 'ContactPage',
  data() {
    return {
      isMobileView: inject('isMobileView'),
    };
  },
  components: {
    EmailForm,
    SocialMedia,
  },
})
</script>
<style module>
.contactPageContainer {
  margin: 1em 0;
}
.emailLink {
  color: var(--second-color-light);
  text-decoration: none;
}
</style>