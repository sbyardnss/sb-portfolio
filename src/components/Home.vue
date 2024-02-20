<template>
  <div class="flex column align-c" :class="$style.homePageContainer">
    <SocialMediaIcons v-if="!isMobileView" />
    <section class="light-text" :class="$style.introAndPortrait">
      <div :class="$style.aboutMe">
        <div class="flex column" :class="$style.bioNameContainer">
          <div :class="$style.nameHeader">Hi, I'm Stephen.
          </div>
          <div class="w-fit" >
            <p class="responsive-text-large" :class="$style.bio">
              Driven by a
              <span :class="$style.bioHighlight">passion for learning</span>, I thrive on mastering new technologies,
              unraveling
              complex problems, and continuously expanding my skill set.
              <br /><br />
              In every project, I bring not just technical expertise but a mindset fueled by
              the <span :class="$style.bioHighlight">excitement</span> of exploration and discovery.
            </p>
          </div>
          <MobileHomeLinks v-if="!isMobileView" />
        </div>
        <div id="sbPortrait" :class="$style.sbImage" />
      </div>

    </section>
    <div class="flex center align-c wrap w-100">
      <MobileHomeLinks v-if="isMobileView" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import MobileHomeLinks from "./MobileHomeLinks.vue";
import SocialMediaIcons from "./SocialMedia.vue";
import { downloadResume } from "@/utils/download-resume";
import { scrollToTop } from "@/utils/scroll-to-top";

export default defineComponent({
  name: "HomePage",
  setup() {

    function updateOpacity() {
      var element = document.getElementById('sbPortrait');
      var windowWidth = window.innerWidth;
      let opacity;
      if (windowWidth > 1300 || windowWidth < 769) {
        opacity = 1;
      } else if (windowWidth < 900) {
        opacity = 0;
      } else {
        opacity = 1 - (((windowWidth -  1300) * -1) / (1300 -  900));
      }
      if (element)
      element.style.opacity = opacity.toString();
    }
    window.addEventListener('resize', updateOpacity);

    updateOpacity();
  },
  data() {
    return {
      isMobileView: inject('isMobileView'),
      windowWidth: window.innerWidth,
    }
  },
  components: {
    MobileHomeLinks,
    SocialMediaIcons,
  },
  methods: {
    handleDownloadResume() {
      downloadResume();
    },
  },
  watch: {
    isMobileView() {
      // this.$nextTick(() => {
      //   scrollToTop();
      // });
      setTimeout(() => {
        scrollToTop();
      },  100);
    }
  }
});
</script>
<style module>
@media (min-width: 769px) {
  .homePageContainer {
    height: 90vh;
    justify-content: center;
  }

  .nameHeader {
    font-size: 4em;
    font-weight: 100;
    width: fit-content;
  }

  .aboutMe {
    width: 80%;
    max-width: 80%;
  }

  .sbImage {
    width: 360px;
    height: 100%;
    max-width: 500px;
    background-size: cover;
    margin-left: auto;
    flex-shrink: 1;
  }

  .bioNameContainer {
    margin-right: auto;
    min-width: 40em;
  }

  .introAndPortrait {
    min-width: 38em;
    width: 90vw;
  }

  .bio {
    max-width: 90%;
    width: 680px;
  }
}

@media (max-width: 768px) {
  .nameHeader {
    font-size: 4em;
    font-weight: 100;
  }

  .aboutMe {
    width: 90%;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: center;
  }

  .sbImage {
    width: calc((20/11) * 17em);
    height: calc((20/11) * 15em);
    max-height: 300px;
    max-width: 400px;
    background-size: cover;
    opacity: 1;
  }

  .bio {
    max-width: 550px;
  }

  .introAndPortrait {
    width: 100vw;
  }
}

.aboutMe {
  display: flex;
  align-items: center;

}


.sbImage {
  font-size: 3vw;
  background-image: url("../assets/faceBio.jpeg");
  background-position-x: center;
  border-radius: 10px;
}

.bio {
  font-weight: 100;
}

.bioHighlight {
  color: var(--second-color-light);
  font-style: italic;
}

.introAndPortrait {
  min-height: fit-content;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
}
</style>

