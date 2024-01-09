<template>
  <div :class="$style.navContainer">
    <router-link to="/" :class="$style.homeLink">
      <h1>Stephen Byard</h1>
    </router-link>
    <div class="flex-evenly">
      <router-link to="/projects" :class="$style.navLink">Projects</router-link>
      <router-link to="/experience" :class="$style.navLink">Experience</router-link>
      <router-link to="/resume" :class="$style.navLink">Resume</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>
<style module>
.navContainer {
  /* border: 1px solid orange; */
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  align-items: center;
  /* width: 16em; */
  /* height: 100%; */
  padding: 0 2em;
  background-color: #1a1c1e;
}
.homeLink {
  cursor: pointer;
  text-decoration: none;
  /* width: 80%; */
  transition: 0.15s ease-in-out;
}
.homeLink:hover {
  background-color: orange;

  transition: 0.15s ease-in-out;
}
.navLink {
  /* width: 80%; */
  /* padding: 1em; */
  /* width: fit-content;
  height: fit-content; */
  margin: 1em;
  font-size: X-large;
  font-weight: lighter;
  text-decoration: none;
  transition: 0.15s ease-in-out;
  color: whitesmoke;
}
.navLink:hover {
  /* background-color: orange; */
  transition: 0.15s ease-in-out;
  color: rgb(0, 191, 172);
}
</style>
