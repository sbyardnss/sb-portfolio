<template>
  <div :class="$style.sliderContainer">
    <div class="flex between">
      <div data-target="#work" @click="handleChangeExperienceView('experienceList')">
        <div :class="$style.timeline_tab"><span
            :class="displayClass === 'experienceList' ? $style.sliderTabSelected : $style.sliderTabUnselected">Experience</span>
        </div>
      </div>
      <div data-target="#projects" @click="handleChangeExperienceView('projectList')">
        <div :class="$style.timeline_tab"><span
            :class="displayClass === 'projectList' ? $style.sliderTabSelected : $style.sliderTabUnselected">Projects</span>
        </div>
      </div>
    </div>
    <div :class="$style.experienceDisplayContainer">
      <div id="experienceSlider" :class="$style[displayClass]">
        <div class="light-text" data-content id="work" :class="$style.experienceBlock">
          <div class="m-1 p-quarter flex between" :key="experience.date" v-for="experience in myExperience"
            :class="$style.experienceItem">
            <div>
              <div class="m-1 "><span class="subHeader">{{ experience.employer }}</span>{{ experience.position ? ` -
                ${experience.position}` : '' }}</div>
              <div class="m-1 headerNotes">{{ experience.date }}</div>
            </div>
            <router-link :to="{
              path: '/experience',
              hash: '#' + experience.employer
            }" class="btn-action">Go to Experience</router-link>
          </div>
        </div>
        <div class="light-text flex column" data-content id="projects" :class="$style.projectBlock">
          <div :key="project.name" v-for="project in projects" :class="$style.projectItem"
            class="flex between m-1 p-quarter ">
            <div class="w-60">
              <div class="m-1 subHeader">
                {{ project.name }}
              </div>
              <div class="m-1 headerNotes">
                {{ project.pitch }}
              </div>
            </div>
            <router-link class="btn-radial-responsive" :to="{
              name: 'ProjectDetail',
              params: { projectName: handleDashifyText(project.name) },
            }">
              See More Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ExperienceList } from '@/constants/experience';
// import { SkillList } from '@/constants/skills';
import { ProjectLinks } from '@/constants/projects';
import { dashifyText } from "@/utils/dashify-text";

export default defineComponent({
  name: 'SliderWindow',
  data() {
    return {
      myExperience: ExperienceList,
      // skillList: SkillList,
      projects: ProjectLinks,
      displayClass: 'experienceList',
      hoveredSkill: '',
    }
  },
  methods: {
    handleChangeExperienceView(newClass: string) {
      this.displayClass = newClass;
    },
    handleDashifyText(text: string): string {
      return dashifyText(text);
    }
  },
})
</script>
<style module>

@media (min-width: 769px) {
  .sliderContainer {

    margin: 1em;
  }

  .experienceList,
  .projectList {
    width: 70vw;
    max-width: 30em;
    height: 30em;

  }
}

@media (max-width: 768px) {
  .sliderContainer {
    width: 90vw;
  }

  .experienceList,
  .projectList {
    height: 30em;
  }
}

.timeline_tab {
  font-size: xx-large;
}

.experienceBlock,
.projectBlock {
  min-width: 100%;
}

.experienceDisplayContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid orange;
  border-radius: 10px;
  outline: 2px solid teal;
}

.sliderTabSelected {
  color: var(--first-color-lighter);
}

.sliderTabUnselected {
  cursor: pointer;
  color: var(--first-color);

}

.sliderTabUnselected:hover {
  color: var(--first-color-alt);
  cursor: pointer;
}

.experienceList,
.projectList {
  display: flex;
  transition: transform 0.5s ease-out;
}

.experienceList {
  transform: translateX(0);
}
.projectList {
  transform: translateX(-100%);
}

.experienceItem {
  background-color: var(--first-color-faint);
  align-items: center;
}


.projectItem {
  background-color: var(--first-color-faint);
}
</style>
