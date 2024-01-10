<template>
  <div class="light-text" :class="$style.projectsContainer">
    <h1>Projects</h1>
    <div v-if="!project" :class="$style.projectList">
      <router-link
        :to="{
          name: 'ProjectDetail',
          params: { projectName: navigateToProject(project.name) },
        }"
        class="flex-between light-text"
        :key="project.name"
        :class="$style.projectItem"
        v-for="project in projects"
      >
        <div :class="$style.projectTitle">
          {{ project.name }}
        </div>
        <p :class="$style.projectPitch">{{ project.pitch }}</p>
      </router-link>
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
      }
      return "";
    },
  },
});
</script>
<style module>
.projectsContainer {
  /* border: 1px solid blue; */
  /* height: 100%; */
  /* margin: 1em; */
}
h1 {
  padding: 1em;
  margin: 0;
}
.projectList {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
.projectItem {
  text-decoration: none;
  justify-self: center;
  transition: 0.15s ease-in-out;
  background: #2c1b35;
  width: 100%;
  margin-bottom: 1em;
  transition: 0.15s ease-in-out;
  border: 1px solid #9a5cba;
  border-radius: 0.5em;
}

.projectItem:hover {
  transition: 0.15s ease-in-out;
  background: #533165;
}
.projectTitle {
  margin: 1em;
  font-size: X-large;
  font-weight: lighter;
  color: whitesmoke;
}

.projectPitch {
  width: 60%;
  height: fit-content;
  align-self: center;
}

/* .projectTitle:hover {
  transition: 0.15s ease-in-out;
  color: rgb(0, 191, 172);
} */
</style>
