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
          <div class="flex" :class="$style.projectLIOverlay">
            <h1 :class="$style.projectLITitle">{{ project.name }}</h1>
            <div class="padded-container-1 flex" :class="$style.projectSkillContainer">
              <div :key="skill" v-for="skill in project.tech">
                <i class="size-2em" :class="'devicon-' + skill"></i>
              </div>
            </div>
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
import { scrollToTop } from "@/utils/scroll-to-top";

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
  mounted() {
    scrollToTop();
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
@media (min-width: 769px) {
  .projectListItem {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .projectListItem {
    width: 20em;
  }
}
h1 {
  padding: 1em;
  margin: 0;
}
.projectList {
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: space-evenly;
  /* flex-direction: column; */
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.projectListItem {
  height: 16em;
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
  background-color: black;
  height: fit-content;

}
.projectLIOverlay {
  position: relative;
  justify-content: space-between;
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

.projectSkillContainer {
  align-self: flex-end;
  justify-self: flex-end;
}

/* .projectItem:hover {
  transition: 0.15s ease-in-out;
  background: #533165;
} */
/* .projectTitle {
  margin: 1em;
  font-size: X-large;
  font-weight: lighter;
  color: whitesmoke;
} */

/* .demoImage {
  height: 90%;
} */
/* .projectPitch {
  width: 30%;
  height: fit-content;
  align-self: center;
} */

/* .projectTitle:hover {
  transition: 0.15s ease-in-out;
  color: rgb(0, 191, 172);
} */
</style>
