<template>
  <div :class="$style.mobileHomeLinks">
    <div :class="$style.mobileHomeMenuItem" @click="$router.push('/experience')">
      <div class="m-1">
        <h2 class="light-text">Experience</h2>
        <div class="subHeader">View my experiences</div>
      </div>
      <img :class="$style.arrowIcon" src="https://static.thenounproject.com/png/8212-200.png" />
    </div>
    <div :class="$style.mobileHomeMenuItem" @click="$router.push('/projects')">
      <div class="m-1">
        <h2 class="light-text">Projects</h2>
        <div class="subHeader">View my projects</div>
      </div>
      <img :class="$style.arrowIcon" src="https://static.thenounproject.com/png/8212-200.png" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileHomeLinks',
})
</script>

<style module>
.mobileHomeLinks {
  width: 100%;
}

.mobileHomeMenuItem {
  margin: 0 auto 1em auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--first-color-faint);
  width: 90%;
  border-radius: 4px;
}

.arrowIcon {
  filter: invert(.5);
  height: 2em;
}
</style>