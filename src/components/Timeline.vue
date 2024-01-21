<template>
  <div :class="$style.timelineContainer" class="qualification__container container">
    <div class="qualification__tabs flex between">
      <div class="qualification__button button--flex" data-target="#work" @click="handleChangeExperienceView('experience')">
        <i class="uil uil-briefcase-alt qualification__icon"></i>
        <div class="timeline_tab"><span :class="displayClass === 'experienceList' ? $style.sliderTabSelected : $style.sliderTabUnselected">Experience</span></div>
      </div>
      <div class="qualification__button button--flex qualification__active" data-target="#education" @click="handleChangeExperienceView('skills')">
        <i class="uil uil-graduation-cap qualification__icon"></i>
        <div class="timeline_tab"><span :class="displayClass === 'skillList' ? $style.sliderTabSelected : $style.sliderTabUnselected">Skills</span></div>
      </div>
    </div>
    <div class="qualification__sections" :class="$style.experienceDisplayContainer">
      <div id="experienceSlider" class="timeline_slider" :class="$style[displayClass]">
        <div class="timeline_block" data-content id="work" :class="$style.experienceBlock">
          showing work
          <div :key="experience.date" v-for="experience in myExperience">
            {{ experience.position }}
          </div>
          <!-- <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Software Engineer</h3>
              <span class="qualification__subtitle">Microsoft - Peru</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2016-2018
              </div>
            </div>
  
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div> -->
        </div>
        <div class="timeline_block light-text" data-content id="skills" :class="$style.skillBlock">
          <!-- <div :key="education.date" v-for="education in educationExperience">
            {{ education.position }}
          </div> -->
          <div :key="skill.name" v-for="skill in skillList" :class="$style.skillItem">
            <i class="size-2em" :class="'devicon-' + skill.devIconLink"></i>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ExperienceList } from '@/constants/experience';
import { SkillList } from '@/constants/skills';

export default defineComponent({
  name: 'HistoryTimeline',
  data() {
    return {
      myExperience: ExperienceList,
      skillList: SkillList,
      displayClass: 'skillList',
      // sliderTabSelected: 'experience'
      hoveredSkill: '',
    }
  },
  computed: {
    workExperience() {
      return this.myExperience.filter(exp => exp.type === 'work');
    },
    educationExperience() {
      return this.myExperience.filter(exp => exp.type === 'education');
    },
  },
  methods: {
    handleChangeExperienceView(target: string) {
      if (target === 'skills') {
        this.displayClass = 'skillList'
      } else {
        this.displayClass = 'experienceList'
      }
    },
  },
})
</script>
<style module>
.timelineContainer {
  width: 30em;
  margin: 2em auto;
}
.experienceDisplayContainer {
  width: 30em;
  height: 30em;
  overflow: hidden;
  border: 1px solid orange;
  border-radius: 10px;
  outline: 2px solid teal;
}

.sliderTabSelected {
  color: var(--first-color);
}
.sliderTabUnselected {
  cursor: pointer;
  color: var(--first-color-lighter);

}
.sliderTabUnselected:hover {
  color: var(--first-color-alt);
  cursor: pointer;
}

.experienceList {
  /* display: flex;
  width: 30em;
  height: 30em;
  transition: transform 0.5s ease-out; */
  transform: translateX(0);
}
.skillList {
  /* width: 30em;
  height: 30em;
  display: flex;
  transition: transform 0.5s ease-out; */
  transform: translateX(-100%);

}
.skillItem {
  width: 15%;
  height: 15%;
  display: flex;
  justify-content: center;
  padding: 0;
}
.skillItem .skillTooltip {
  visibility: hidden;
}
.skillItem:hover .skillTooltip {
  visibility: visible;
}
.skillBlock {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1em 0;
}
.experienceBlock {
  /* min-width: 30em;
  height: 30em;
  background-color: green; */

}

</style>
