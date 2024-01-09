<template>
  <div class="light-text">
    <!-- TODO: figure out how to add resume to this line -->
    <h1><a :href="`${pdfLink}`" download="download">PDF</a></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResumeDownload",
  data() {
    return {
      pdfLink: require("@/assets/logo.png"),
    };
  },
});
</script>
<style module></style>
