<template>
  <div :class="$style.navContainer">
    <router-link to="/" :class="$style.homeLink">
      <div class="flex evenly align-c">
        <img :class="$style.SBLogo" src="@/assets/sb_logo.svg" alt="My Image">
        <div :class="$style.nameContainer">
          <div :class="$style.nameTextA">Stephen</div>
          <div :class="$style.nameTextB">Byard</div>
        </div>
      </div>
    </router-link>
    <div class="flex evenly">
      <router-link to="/projects" :class="$style.navLink">Projects</router-link>
      <router-link to="/experience" :class="$style.navLink">Experience</router-link>
      <router-link to="/resume" :class="$style.navLink">Resume</router-link>
    </div>
    <input type="checkbox" id="nav-toggle" :class="$style.active" />
    <label htmlFor="nav-toggle" :class="$style.hamburgerMenu">
      <span></span>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavBar",
  setup() {
    const menuOpen = ref(false);

    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    return { menuOpen, toggleMenu };
  },
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
  color: var(--second-color-light);
}

/* begin alternate styling for anything below 760px width */
@media (min-width: 769px) {
  .hamburgerMenu {
    display: none;
  }
}

@media (max-width: 768px) {
  .navLink {
    display: none;
  }

  .hamburgerMenu {
    content: '';
    display: inline-block;
    cursor: pointer;
    height: 3em;
    background-color: transparent;
  }

  .hamburgerMenu span,
  .hamburgerMenu:before,
  .hamburgerMenu:after {
    content: '';
    height: 3em;
    width: 2em;
    border-bottom: 3px solid rgba(113, 20, 144, 0.909);
    position: absolute;
    top: calc(1em);
    right: 5%;
    transition: .6s cubic-bezier(0.215, 0.61, 0.355, 1);

  }

  .hamburgerSpan {
    z-index: 10;
    border-bottom: 3px solid rgba(113, 20, 144, 0.909);
  }
  .hamburgerMenu:before {
    transform: translateY(-10px);
  }

  .hamburgerMenu:after {
    transform: translateY(10px);
  }

  .close {
    z-index: 1;
    pointer-events: none;
  }

  .active:checked+.hamburgerMenu span {
    transform: scaleX(0);
  }

  .active:checked+.hamburgerMenu:before {
    border-color: rgba(113, 20, 144, 0.909);
    transform: rotate(45deg) translate(1em, -.5em);
  }

  .active:checked+.hamburgerMenu:after {
    border-color: rgba(113, 20, 144, 0.909);
    transform: rotate(-45deg) translate(-1em, -.5em);
  }

  .active {
    display: none;
  }
}

/* Show the menu items when the menu is open */
.navLink.open {
  display: block;
}
</style>
