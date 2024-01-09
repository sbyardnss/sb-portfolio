<template>
  <div class="light-text page-container" :class="$style.projectsContainer">
    <h1>Projects</h1>
    <div v-if="!project">
      <div :key="project.name" v-for="project in projects">
        <router-link
          :to="{
            name: 'ProjectDetail',
            params: { projectName: navigateToProject(project.name) },
          }"
          >{{ project.name }}</router-link
        >
      </div>
    </div>
    <div v-else>
      <ProjectDetail :project="project" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ProjectLinks } from "../constants/projects";
import ProjectDetail from "./ProjectDetail.vue";

export default defineComponent({
  name: "ProjectsDisplay",
  components: {
    ProjectDetail,
  },
  data() {
    return {
      projects: ProjectLinks,
    };
  },
  methods: {
    navigateToProject(projectName: string) {
      const formattedProjectName = projectName.replace(/ /g, "-").toLowerCase();
      return `${formattedProjectName}`;
    },
  },
  computed: {
    project() {
      const projectName = this.$route?.params?.projectName as string;
      if (projectName) {
        return ProjectLinks.find(
          p =>
            p.name.toLowerCase() === projectName.replace("-", " ").toLowerCase()
        );
      } return '';
    },
  },
});
</script>
<style module>
.projectsContainer {
  border: 1px solid blue;
}
</style>
