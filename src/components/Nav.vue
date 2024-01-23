<template>
  <div :class="$style.navContainer">
    <router-link to="/" :class="$style.homeLink">
      <div class="flex evenly align-c">
        <img :class="$style.SBLogo" src="@/assets/sb_logo.svg" alt="My Image">
        <div>
          <h1>Stephen Byard</h1>
        </div>
      </div>
    </router-link>
    <div class="flex evenly">
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1c1e;
  overflow: hidden;
}
.SBLogo {
  height: 6.5em;
  margin-left: 1em;
}
.homeLink {
  cursor: pointer;
  text-decoration: none;
  transition: 0.15s ease-in-out;
}
.homeLink:hover {
  background-color: orange;

  transition: 0.15s ease-in-out;
}
.navLink {
  margin: 1em;
  font-size: X-large;
  font-weight: lighter;
  text-decoration: none;
  transition: 0.15s ease-in-out;
  color: whitesmoke;
}
.navLink:hover {
  transition: 0.15s ease-in-out;
  color: rgb(0, 191, 172);
}
/* begin alternate styling for anything below 760px width */
</style>
