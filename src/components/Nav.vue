<template>
  <div :class="$style.navContainer">
    <router-link to="/" :class="$style.homeLink">
      <div class="flex evenly align-e">
        <img :class="$style.SBLogo" src="@/assets/SbLogo.svg" alt="My Image">
        <div :class="$style.nameContainer">
          <!-- <div class="subHeader">Stephen Byard</div> -->
          <!-- <div class="subHeader">Stephen</div>
          <div class="subHeader">Byard</div> -->
        </div>
      </div>
      <!-- <div class="light-text m-1" v-else>SB</div> -->
    </router-link>
    <div id="navLinkContainer" :class="$style.navLinkContainer" :style="{display: mobileNavDisplay}" class="flex evenly">
      <div v-if="isMobileView" :class="$style.navLink" @click="navigateToRoute('/')">Home</div>
      <div @click="navigateToRoute('/projects')" :class="$style.navLink">Projects</div>
      <div @click="navigateToRoute('/experience')" :class="$style.navLink">Experience</div>
      <!-- <div @click="navigateToRoute('/resume')" :class="$style.navLink">Resume</div> -->
      <SocialMediaIcons v-if="isMobileView"/>
    </div>
    <div :class="$style.mobileMenuHamburgerContainer">
      <input type="checkbox" id="nav-toggle" :class="$style.active" />
      <label htmlFor="nav-toggle" :class="$style.hamburgerMenu" @click="toggleNav">
        <span></span>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import SocialMediaIcons from "./SocialMedia.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    SocialMediaIcons,
  },
  data() {
    return {
      showMobileMenu: ref(false),
      isMobileView: inject('isMobileView'),
    };
  },
  methods: {
    navigateToRoute(route: string) {
      this.$router.push(route);
      const navLinkCheckbox = document.getElementById('nav-toggle') as HTMLInputElement;
      navLinkCheckbox.checked = false;
      this.showMobileMenu = false;
    },
    toggleNav() {
      this.showMobileMenu = !this.showMobileMenu.valueOf();
      this.disableScrollEvents();
    },
    disableScrollEvents() {
      const navContainer = document.getElementById('navContainer');
      if (navContainer) {
        navContainer.addEventListener('wheel', this.handlePrevent, { passive: false });
        navContainer.addEventListener('touchmove', this.handlePrevent, { passive: false });
        navContainer.addEventListener('scroll', this.handlePrevent, { passive: false });
      }
    },
    handlePrevent(e: Event) {
      e.preventDefault();
    },
  },
  computed: {
    mobileNavDisplay() {
      if (this.isMobileView && !this.showMobileMenu) {
        return 'none';
      } else {
        return 'flex'
      }
    }
  },
  watch: {
    isMobileView(newValue, oldValue) {
      if (newValue !== oldValue) {
        const navLinkCheckbox = document.getElementById('nav-toggle') as HTMLInputElement;
        navLinkCheckbox.checked = false;
        this.showMobileMenu = false;
      }
    },
  }
});
</script>
<style module>
.navContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #1a1c1e; */
}

.SBLogo {
  height: 4.5em;
  margin: 0 1em;
  /* filter: invert(50%); */
}

.nameContainer {
  color: var(--text-color-vibe);
  max-width: 20em;
  max-height: 10em;
}

.nameTextA {
  font-size: 3em;
  margin: 0;
  font-weight: 900;
  position: relative;
}

.nameTextB {
  font-size: 3em;
  margin: 0;
  font-weight: 100;
  position: relative;
  overflow: visible;
}

.homeLink {
  cursor: pointer;
  text-decoration: none;
  transition: 0.15s ease-in-out;
}

.navLink {
  margin: 1em;
  font-size: X-large;
  font-weight: lighter;
  text-decoration: none;
  transition: 0.15s ease-in-out;
  color: whitesmoke;
  cursor: pointer;
}

.navLink:hover {
  transition: 0.15s ease-in-out;
  color: var(--second-color-light);
}

/* begin alternate styling for anything below 760px width */
@media (min-width: 769px) {
  .mobileMenuHamburgerContainer {
    display: none;
  }
}

@media (max-width: 768px) {
  .navLinkContainer {
    position: fixed;
    flex-direction: column;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vw;
    z-index: 11;
    background-color: black;
  }

  .mobileMenuHamburgerContainer {
    z-index: 11;
  }
  .hamburgerMenu {
    display: inline-block;
    cursor: pointer;
    height: 3em;
    background-color: transparent;
    width: 2em;
    height: 2em;
    margin: 1em;
  }

  /* TODO: Why is content needed in this css to show the hamburger menu correctly? */
  .hamburgerMenu span,
  .hamburgerMenu:before,
  .hamburgerMenu:after {
    content: '';
    width: 2em;
    border-bottom: 3px solid rgba(113, 20, 144, 0.909);
    position: absolute;
    top: 2em;
    right: 1em;
    transition: .3s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
  }
  .hamburgerMenu:before {
    transform: translateY(-10px);
  }

  .hamburgerMenu:after {
    transform: translateY(10px);
  }

  .active:checked+.hamburgerMenu span {
    transform: scaleX(0);
  }

  .active:checked+.hamburgerMenu:before {
    /* border-color: rgba(113, 20, 144, 0.909); */
    transform: rotate(45deg);
  }

  .active:checked+.hamburgerMenu:after {
    /* border-color: rgba(113, 20, 144, 0.909); */
    transform: rotate(-45deg);
  }

  .active {
    display: none;
  }
}
</style>
