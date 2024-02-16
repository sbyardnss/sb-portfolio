<template>
  <div :class="$style.projectDetailContainer">
    <div class="block">
      <div class="page-header" :class="$style.projectDetailHeader">
        <div class="flex between align-c">
          <div :class="$style.projectName">{{ project?.name }}</div>
          <div class="btn-danger" v-if="isMobileView" @click="handleNavigateBack">back</div>
        </div>
        <a class="btn-radial-responsive" :href="project.url" target='_blank'>See deployed application</a>
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
        <div class="btn-danger" v-if="!isMobileView" @click="handleNavigateBack">back</div>
      </div>
      <div class="flex between align-c">
        <p :class="$style.projectDescription">{{ project?.description }}</p>
      </div>
      <div class="flex align-c">
      </div>
    </div>
    <div class="radial-btn-container">
    </div>
    <div class="flex align-c" :class="$style.imagesAndNotesContainer">
      <div class="flex evenly" :class="$style.projectImagesContainer">
        <ImageDisplay :class="$style.projectImage" :key="url" v-for="url in project.images" :image-url="url" :image-height="'8em'" :hover-zoom="true"
          :click-zoom="true" :image-class="'imageElementWithHover'" />
      </div>
      <ul :class="$style.techNotesContainer">
        <h2>Tech Notes</h2>
        <li :key="note" v-for="note in project.notes">
          {{ note }}
        </li>
      </ul>
    </div>
    <ul :class="$style.featuresList">
      <h2>Features</h2>
      <li :key="feature" v-for="feature in project.features">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import ImageDisplay from '../utils/image-display.vue';
import { defineComponent, inject } from "vue";
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
      isMobileView: inject('isMobileView'),
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
/* .projectDetailContainer {
  border: 1px solid blue;
} */

.projectDetailHeader {
  display: flex;
  justify-content: space-between;
}

.projectDescription {
  width: 70%;
  background: linear-gradient(0.25turn, #090a0f, transparent);
  padding: 2em;
}

.projectImagesContainer {
  /* height: fit-content; */
  width: 70%;
  overflow: scroll;
}

.techNotesContainer {
  width: 25%;
}
.socialMediaIcon {
  margin-right: .5em;
  font-size: 1.5em;
  text-decoration: none;
}

@media (min-width: 769px) {
  .projectDetailContainer {
    width: 70%;
    margin: 0 auto;
    padding: 1em;
    background-color: rgb(0, 0, 0, .2);
    z-index: 10;
  }
  .projectName {
    font-size: xx-large;
  }
  .imagesAndNotesContainer {
    justify-content: space-between;
  }
  .projectImagesContainer {
    height: 12em;
    align-items: center;
  }
}
@media (max-width: 768px) {
  .projectDetailContainer {
    width: 100%;
  }

  .projectDetailHeader {
    flex-direction: column;
  }
  .projectName {
    font-size: x-large;
  }
  .imagesAndNotesContainer {
    flex-wrap: wrap;
  }
  .projectImagesContainer {
    width: 90%;
    overflow: scroll;
    justify-content: flex-start;
    margin-left: 1em;
  }
  .projectImage {
    width: fit-content;
  }
  .featuresList {
    width: 90%;
  }
}
</style>
