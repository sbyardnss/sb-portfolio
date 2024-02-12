<template>
  <div :class="$style.socialMediaLinkContainer" class="flex between">
      <a href="https://github.com/sbyardnss" target="_blank" :class="$style.socialMediaIcon"
        class="devicon-github-original"></a>
      <a href="https://www.linkedin.com/in/stephen-byard/" target="_blank" :class="$style.socialMediaIcon"
        class="devicon-linkedin-plain"></a>
      <a :class="$style.socialMediaIcon" @click="handleDownloadResume">CV</a>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { downloadResume } from '@/utils/download-resume';

export default defineComponent({
  name: 'SocialMediaIcons',
  methods: {
    handleDownloadResume() {
      downloadResume();
    },
  },
})
</script>
<style module>

.socialMediaIcon {
  margin: .5em .2em;
  font-size: 2em;
  color: var(--first-color-faint-2);
  cursor: pointer;
  text-decoration: none;
}

.socialMediaIcon:hover {
  color: var(--first-color-faint-lighter);
}

@media (min-width: 769px) {
  .socialMediaLinkContainer {
    position: absolute;
    flex-direction: column;
    left: .5em;
  }
}

@media (max-width: 768px) {
  .socialMediaLinkContainer {
    position: absolute;
    flex-direction: column;
    right: 1em;
  }
}

</style>