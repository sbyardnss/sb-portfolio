<template>
  <div class="light-text flex evenly padded-container-1">

    <ImageDisplay :image-url="require('../assets/Stephen Byard Resume.jpg')" :image-height="'40em'" :hover-zoom="false" :click-zoom="true" :zoom-height="'100%'" :image-class="'imageElementWithHover'"/>
    <h2><a class="btn-action" @click="handleDownloadResume">Download PDF</a></h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageDisplay from "@/utils/image-display.vue";
import { downloadResume } from "@/utils/download-resume";

export default defineComponent({
  name: "ResumeDownload",
  components: {
    ImageDisplay,
  },
  methods: {
    handleDownloadResume() {
      downloadResume();
    },
  },
});
</script>
<style module>.resumeImage {
  background-image: url('../assets/Stephen Byard Resume.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  height: 100em;
}</style>
