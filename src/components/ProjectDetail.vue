<template>
  <div :class="$style.projectDetailContainer">
    <div class="page-header" :class="$style.projectDetailHeader">
      <h1>{{ project?.name }}</h1>
      <router-link class="btn-primary" v-if="project" to="/projects" >back to all projects</router-link>
    </div>
    <p>{{ project?.description }}</p>
    <a class="btn-radial" :href="project.url" target='_blank'>See deployed application</a>
    <ul>
      <h2>Features</h2>
      <li :key="feature" v-for="feature in project.features">
        {{ feature }}
      </li>
    </ul>
    <ul>
      <h2>Tech Notes</h2>
      <li :key="note" v-for="note in project.notes">
        {{ note }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Project } from "@/constants/types";

export default defineComponent({
  name: "ProjectDetail",
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
});
</script>
<style module>
.projectDetailContainer {
  /* border: 1px solid blue; */
}
.projectDetailHeader {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
}
</style>
