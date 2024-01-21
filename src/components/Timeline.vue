<template>
  <div :class="$style.timelineContainer" class="qualification__container container">
    <div class="qualification__tabs flex between">
      <div class="qualification__button button--flex" data-target="#work" @click="handleChangeExperienceView('experience')">
        <i class="uil uil-briefcase-alt qualification__icon"></i>
        <h1>Experience</h1>
      </div>
      <div class="qualification__button button--flex qualification__active" data-target="#education" @click="handleChangeExperienceView('skills')">
        <i class="uil uil-graduation-cap qualification__icon"></i>
        <h1>Skills</h1>
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
        <div class="timeline_block" data-content id="education" :class="$style.skillBlock">
          showing education
          <div :key="education.date" v-for="education in educationExperience">
            {{ education.position }}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ExperienceList } from '@/constants/experience';

export default defineComponent({
  name: 'HistoryTimeline',
  data() {
    return {
      myExperience: ExperienceList,
      // experienceOrSkills: 'skills',
      displayClass: 'experienceList',
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
  // watch: {
  //   experienceOrSkills() {
  //     if (this.experienceOrSkills) {
  //       this.displayClass = 'workExperience';
  //     } else {
  //       this.displayClass = 'educationExperience';
  //     }
  //   }
  // }
})
</script>
<style module>
.timelineContainer {
  width: 30em;
  margin: 0 auto;
}
.experienceDisplayContainer {
  width: 30em;
  height: 30em;
  overflow: hidden;
  border: 1px solid orange;
  border-radius: 10px;
  outline: 2px solid teal;
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
.skillBlock {
  /* min-width: 30em;
  height: 30em;
  background-color: blue; */
}
.experienceBlock {
  /* min-width: 30em;
  height: 30em;
  background-color: green; */

}

</style>
