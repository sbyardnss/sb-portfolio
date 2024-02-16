<template>
  <a v-if="frontEndLink" class="btn-action flex align-c between" :href="frontEndLink" target='_blank'>
    <div :class="$style.socialMediaIcon" class="devicon-github-original" />
    client
  </a>
  <a v-if="backEndLink" class="btn-action flex align-c between" :href="backEndLink" target='_blank'>
    <div :class="$style.socialMediaIcon" class="devicon-github-original" />
    server
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GithubLinks',
  props: {
    frontEndLink: {
      type: String,
      required: false,
    },
    backEndLink: {
      type: String,
      required: false,
    }
  },
})
</script>
<style module>
.socialMediaIcon {
  margin-right: .5em;
  font-size: 1.5em;
  text-decoration: none;
}
</style>