<template>
  <div class="light-text flex column" :class="$style.skillsContainer">
    <div class="timeline_tab text-align-c">
      <span :class="$style.skillTab">Tech Stack</span>
    </div>
    <div class="timeline_block light-text flex" data-content id="skills" :class="$style.skillBlock">
      <div :key="skill.name" v-for="skill in skillList" :class="$style.skillItem">
        <i class="size-2em" :class="'devicon-' + skill.devIconLink" :title="skill.name"></i>
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
.skillsContainer {
  width: 30em;
  /* height: 30em; */

}

.skillList {
  transform: translateX(-200%);

}

.skillTab {
  color: var(--first-color-lighter);
}

.skillItem {
  width: 15%;
  height: 15%;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 1em 1em .5em 0;
}

.skillItem .skillTooltip {
  visibility: hidden;
}

.skillItem:hover .skillTooltip {
  visibility: visible;
}

.skillBlock {
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 1em;
  width: 30em;
  height: 30em;
}
</style>
