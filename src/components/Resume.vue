<template>
  <div class="light-text flex evenly padded-container-1">

    <ImageDisplay :image-url="require('../assets/Stephen Byard Resume.jpg')" :image-width="'30%'" :hover-zoom="false" :click-zoom="true" :image-class="'imageElementWithHover'"/>
    <h2><a class="btn-action" @click="downloadPDF">Download PDF</a></h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageDisplay from "@/utils/image-display.vue";

export default defineComponent({
  name: "ResumeDownload",
  components: {
    ImageDisplay,
  },
  methods: {
    downloadPDF() {
      // window.open('/Stephen Byard Resume.pdf', '_blank');
      fetch('/Stephen Byard Resume.pdf')
        .then(response => response.blob())
        .then(blob => {
          // Create a blob URL representing the PDF file
          let url = window.URL.createObjectURL(blob);
          // Create a link element
          let link = document.createElement('a');
          link.href = url;
          // Set the download attribute of the link element
          link.setAttribute('download', 'Stephen Byard Resume.pdf');
          // Append the link to body
          document.body.appendChild(link);
          // Simulate click to start download
          link.click();
          // Remove the link from body
          document.body.removeChild(link);
      });
    },
  },
});
</script>
<style module>
.resumeImage {
  background-image: url('../assets/Stephen Byard Resume.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  height: 100em;
}
</style>
