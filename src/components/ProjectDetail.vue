<template>
  <div class="padded-container-1 centered-container-w70" :class="$style.projectDetailContainer">
    <div class="block">
      <div class="page-header" :class="$style.projectDetailHeader">
        <h1>{{ project?.name }}</h1>
        <router-link class="btn-action" v-if="project" to="/projects">See all projects</router-link>
        <!-- <div class="btn-primary" v-if="project" @click="handleNavigateBack">back to all projects</div> -->
      </div>
      <div class="flex between align-c">
        <p :class="$style.projectDescription">{{ project?.description }}</p>
        <div class="flex column">
          <a class="btn-radial" :href="project.url" target='_blank'>See deployed application</a>
          <a class="btn-action flex align-c" :href="project.github.frontEnd" target='_blank'>Github Frontend</a>
          <a class="btn-action flex align-c" :href="project.github.backEnd" target='_blank'>Github Backend</a>
        </div>
      </div>
    </div>
    <div class="radial-btn-container">
    </div>
    <div class="flex between align-c">
      <div class="flex evenly" :class="$style.projectImagesContainer">
        <ImageDisplay :key="url" v-for="url in project.images" :image-url="url" :image-width="'10%'" :hover-zoom="true"
          :click-zoom="true" :image-class="'imageElementWithHover'" />
      </div>
      <ul>
        <h2>Tech Notes</h2>
        <li :key="note" v-for="note in project.notes">
          {{ note }}
        </li>
      </ul>
    </div>
    <ul>
      <h2>Features</h2>
      <li :key="feature" v-for="feature in project.features">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import ImageDisplay from '../utils/image-display.vue';
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Project } from "@/constants/types";

export default defineComponent({
  name: "ProjectDetail",
  components: {
    ImageDisplay,
  },
  data() {
    return {
      zoomedImage: '',
    };
  },
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  methods: {
    handleNavigateBack() {
      this.$router.go(-1);
    },
  }
});
</script>
<style module>
.projectDetailContainer {
  border: 1px solid blue;
  /* padding: 1em; */
}

.projectDetailHeader {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
}

.projectDescription {
  width: 70%;
  background: linear-gradient(0.25turn, #090a0f, transparent);
  padding: 2em;
}

.projectImagesContainer {
  height: fit-content;
  width: 60%;
}
</style>
