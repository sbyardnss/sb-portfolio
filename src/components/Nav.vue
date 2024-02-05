<template>
  <div :class="$style.navContainer">
    <router-link to="/" :class="$style.homeLink">
      <div class="flex evenly align-c">
        <img :class="$style.SBLogo" src="@/assets/sb_logo.svg" alt="My Image">
        <div :class="$style.nameContainer">
          <div :class="$style.nameTextA" >Stephen</div>
          <div :class="$style.nameTextB">Byard</div>
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
  /* overflow: hidden; */
}
.SBLogo {
  height: 6.5em;
  /* margin-left: 1em; */
}
.nameContainer {
  color: var(--text-color-vibe);
  max-width: 20em;
  max-height: 10em;
  /* overflow: hidden; */
}
.nameTextA {
  font-size: 3em;
  margin: 0;
  font-weight: 900;
  position: relative;
  /* top: 0px; */
  /* left: 50%; */
}
.nameTextB {
  font-size: 3em;
  margin: 0;
  font-weight: 100;
  position: relative;
  overflow: visible;
  /* top: -10px; */
}
.homeLink {
  cursor: pointer;
  text-decoration: none;
  transition: 0.15s ease-in-out;
}
.homeLink:hover {
  /* background-color: orange;

  transition: 0.15s ease-in-out; */
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
  /* color: rgb(0, 191, 172); */
  color: var(--second-color-light);
}
/* begin alternate styling for anything below 760px width */
</style>
