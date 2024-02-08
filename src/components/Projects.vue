<template>
  <div class="light-text" :class="$style.projectsContainer">
    <div v-if="!project">
      <h1 class="text-align-c">Projects</h1>
      <div :class="$style.projectList">
        <div 
          :key="project.name" 
          v-for="project in projects" 
          :class="$style.projectListItem" 
          :style="{ backgroundImage: `url(${project.images[0]})`}"
          @click="$router.push({
            name: 'ProjectDetail',
            params: { projectName: formatNameForNavigate(project.name) }
          });">
          <div class="flex column align-c center" :class="$style.projectLIOverlay">
            <h1 :class="$style.projectLITitle">{{ project.name }}</h1>
          </div>
        </div>
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
import { dashifyText } from "@/utils/dashify-text";

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
    formatNameForNavigate(projectName: string) {
      return dashifyText(projectName)
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
/* .projectsContainer {

} */
h1 {
  padding: 1em;
  margin: 0;
}
.projectList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* flex-direction: column; */
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
/* .projectItem {
  text-decoration: none;
  justify-self: center;
  transition: 0.15s ease-in-out;
  background: #2c1b35;
  width: 100%;
  height: 20em;
  margin-bottom: 1em;
  transition: 0.15s ease-in-out;
  border: 1px solid #9a5cba;
  border-radius: 0.5em;
} */

.projectListItem {
  height: 16em;
  width: 20em;
  background-size: cover;
  border-radius: 20px;
  overflow: hidden;
  transition: .2s;
  margin: 1em;
  cursor: pointer;
}
.projectListItem:hover {
  transform: scale(1.02);
}
.projectLITitle {
  color: var(--first-color-lighter);
  padding: .5em;
  border-radius: 4px;
  transition: 0.15s ease-in-out;

}
.projectLIOverlay {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  pointer-events: none;
  backdrop-filter: grayscale(100%);
}
.projectListItem:hover .projectLIOverlay {
  background-color: rgba(0, 0, 0, 0.4);
}

.projectListItem:hover .projectLITitle {
  transition: 0.3s ease-in-out;
  color: var(--second-color-light);
  backdrop-filter: blur(1px) grayscale(100%)   transition 0.15s ease-in-out;
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

.demoImage {
  height: 90%;
}
.projectPitch {
  width: 30%;
  height: fit-content;
  align-self: center;
}

/* .projectTitle:hover {
  transition: 0.15s ease-in-out;
  color: rgb(0, 191, 172);
} */
</style>
