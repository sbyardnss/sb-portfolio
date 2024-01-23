<template>
  
  <div class="light-text flex column">
    <span>Skills</span>
    <div class="timeline_block light-text flex" data-content id="skills" :class="$style.skillBlock">
      <div :key="skill.name" v-for="skill in skillList" :class="$style.skillItem">
        <i class="size-2em" :class="'devicon-' + skill.devIconLink"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { SkillList } from '@/constants/skills';

export default defineComponent({
  name: 'SkillsDisplay',
  data() {
    return {
      skillList: SkillList,
    }
  },
})
</script>
<style module>

.skillList {
  transform: translateX(-200%);

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
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1em 0;
  width: 30em;
}
</style>
