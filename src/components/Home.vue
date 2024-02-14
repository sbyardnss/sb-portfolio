<template>
  <div class="flex column align-c" :class="$style.homePageContainer">
    <SocialMediaIcons v-if="!isMobileView" />
    <section class="light-text" :class="$style.introAndPortrait">
      <div :class="$style.aboutMe">
        <div class="flex column" :class="$style.bioNameContainer">
          <div :class="$style.nameHeader">Hi, I'm Stephen.
          </div>
          <div class="w-fit">
            <p class="responsive-text-large" :class="$style.bio">
              Driven by a
              <span :class="$style.bioHighlight">passion for learning</span>, I thrive on mastering new technologies,
              unraveling
              complex problems, and continuously expanding my skill set.
              <br /><br />
              In every project, I bring not just technical expertise but a mindset fueled by
              the <span :class="$style.bioHighlight">excitement</span> of exploration and discovery.
            </p>
            <MobileHomeLinks v-if="!isMobileView"/>
          </div>
        </div>
        <div :class="$style.sbImage" />
      </div>
      
    </section>
    <div class="flex center align-c wrap w-100">
      <MobileHomeLinks v-if="isMobileView"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import MobileHomeLinks from "./MobileHomeLinks.vue";
import SocialMediaIcons from "./SocialMedia.vue";
import { downloadResume } from "@/utils/download-resume";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      isMobileView: inject('isMobileView'),
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
  }

  .aboutMe {
    width: 80%;
  }

  .sbImage {
    width: 10em;
    height: 12em;
    max-width: 500px;
    min-width: 175px;
    background-size: cover;
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
  }

  .sbImage {
    width: calc((20/11) * 17em);
    height: calc((20/11) * 15em);
    max-height: 300px;
    max-width: 400px;
    background-size: cover;
  }
}

.aboutMe {
  display: flex;
  justify-content: space-evenly;
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
  max-width: 550px;
}

.bioHighlight {
  color: var(--second-color-light);
  font-style: italic;
}

.introAndPortrait {
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
  width: 100vw;
}
</style>

