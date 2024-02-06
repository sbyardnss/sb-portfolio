<template>
  <div class="padded-container-1 centered-container-w70" :class="$style.projectDetailContainer">
    <div class="block">
      <div class="page-header" :class="$style.projectDetailHeader">
        <h1>{{ project?.name }}</h1>
        <a class="btn-radial-responsive" :href="project.url" target='_blank'>See deployed application</a>
        <!-- <div :class="$style.socialMediaIcon" class="devicon-github-original" /> -->
        <div class="flex between">
          <a class="btn-action flex align-c between" :href="project.github.frontEnd" target='_blank'>
            <div :class="$style.socialMediaIcon" class="devicon-github-original"/>
            client
          </a>
          <a class="btn-action flex align-c between" :href="project.github.backEnd" target='_blank'>
            <div :class="$style.socialMediaIcon" class="devicon-github-original"/>
            server
          </a>
        </div>
        <!-- <router-link class="btn-danger" v-if="project" to="/projects">back</router-link> -->
        <div class="btn-danger" v-if="project" @click="handleNavigateBack">back</div>
        <!-- <div class="btn-primary" v-if="project" @click="handleNavigateBack">back to all projects</div> -->
      </div>
      <div class="flex between align-c">
        <p :class="$style.projectDescription">{{ project?.description }}</p>
      </div>
      <div class="flex align-c">
      </div>
    </div>
    <div class="radial-btn-container">
    </div>
    <div class="flex between align-c">
      <div class="flex evenly" :class="$style.projectImagesContainer">
        <ImageDisplay :key="url" v-for="url in project.images" :image-url="url" :image-height="'8em'" :hover-zoom="true"
          :click-zoom="true" :image-class="'imageElementWithHover'" />
      </div>
      <ul :class="$style.techNotesContainer">
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
      // let routeToGoBack = { path: -1 }; // Example path
      // // Return the route object
      // return routeToGoBack;
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
  width: 70%;
}

.techNotesContainer {
  width: 25%;
}
.socialMediaIcon {
  margin-right: .5em;
  font-size: 1.5em;
  /* color: var(--first-color-light); */
  text-decoration: none;
}
</style>
