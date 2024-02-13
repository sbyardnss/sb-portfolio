<template>
  <div class="flex column align-c" :class="$style.homePageContainer">
    <SocialMediaIcons v-if="!isMobileView" />
    <section class="full-container light-text" :class="$style.introAndPortrait">
      <div class="w-80" :class="$style.aboutMe">
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
          
          <!-- <MobileHomeLinks v-if="!isMobileView" /> -->
        </div>
        <div :class="$style.sbImage" />
      </div>
      
    </section>
    <!-- <MobileHomeLinks v-if="!isMobileView" /> -->
    <div class="flex center align-c wrap w-100">
      <MobileHomeLinks v-if="isMobileView"/>
      <!-- <SliderWindow v-if="!isMobileView" /> -->
      <!-- <SkillsDisplay /> -->
      <!-- <EmailForm /> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import MobileHomeLinks from "./MobileHomeLinks.vue";
// import SliderWindow from "../components/Slider.vue";
import SocialMediaIcons from "./SocialMedia.vue";
// import EmailForm from "./EmailForm.vue";
import { downloadResume } from "@/utils/download-resume";
// import SkillsDisplay from "./SkillsDisplay.vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      isMobileView: inject('isMobileView'),
    }
  },
  components: {
    // SliderWindow,
    MobileHomeLinks,
    // EmailForm,
    SocialMediaIcons,
    // SkillsDisplay,
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
    padding-top: 1em;
  }

  .nameHeader {
    /* font-size: xx-large; */
    font-size: 4em;
    font-weight: 100;
  }

  .aboutMe {
    /* height: fit-content; */
    /* min-height: fit-content; */
    /* width: 80%; */
  }

  .sbImage {
    width: 10em;
    height: 12em;
    max-width: 500px;
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
  width: 90%;
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
}
</style>



<!-- INITIAL BIO IDEAS
<p :class="$style.bio">
        I am a full-stack software developer and graphic designer based in
        Nashville, TN. An avid chess player and musician, the world of
        programming has drawn me in with its endless puzzles and limitless
        creativity. Learning being my only desire, you might say my passion is
        growth.
      </p> -->
      <!-- <p :class="$style.bio">
        My expertise spans across both front-end and back-end
        technologies, enabling me to create seamless, user-centric applications.
        I have a knack for solving complex problems and a deep understanding of
        user interfaces and experiences. 

        
        Full-stack software developer and graphic designer based in Nashville,
        TN. Specializing in both front-end and back-end technologies, I create
        intuitive, user-centric applications. Passionate about problem-solving,
        I thrive on tackling complex issues and pushing the boundaries of what's
        possible in software development. An avid chess player and musician, I
        draw strength from my hobbies to fuel my creativity and problem-solving
        skills. Always eager to learn and adapt to new technologies and
        methodologies, I believe in continuous growth and the creation of
        software that resonates with users. Let's connect if you're seeking a
        developer committed to solving problems and creating beautiful,
        functional software.
      </p> -->

<!-- 
  ORIGINAL CHATGPT OUTPUT
I'm a dynamic full-stack software developer and graphic designer who finds
inspiration in the rhythm of code and the artistry of design. Nestled in the
heart of Nashville, a city known for its vibrant creativity, I've immersed
myself in the world of programming, enticed by its boundless puzzles and the
infinite canvas it provides for creativity. 

Beyond the screen, I'm a dedicated chess player and a harmonious musician. Just as in chess, I approach every
coding challenge with strategic thinking and foresight, making calculated moves
to ensure success. The world of programming has become my symphony, where each
line of code harmonizes to create a seamless and beautiful composition. 

My insatiable appetite for learning defines me - it's not just a desire, but a
passion for growth. I thrive on mastering new technologies, unraveling complex
problems, and continuously expanding my skill set. In every project, I bring not
just technical expertise but a mindset fueled by the excitement of exploration
and discovery.

Join me on this exciting journey where code meets creativity, and
every project is a chance to compose something extraordinary. -->

<!-- ADJUSTED
<p :class="$style.bio">
        I'm a full-stack software developer based in Nashville, TN and driven by
        a passion for learning. An avid chess player and musician, I've always
        gravitated towards hobbies which offer endless opportunities so it was
        no surprise when I was drawn in by the world of software development and
        its infinite puzzles and the creative opportunities.
        <br />
        <br />
        With an insatiable appetite for growth, I thrive on mastering new
        technologies, unraveling complex problems, and continuously expanding my
        skill set. In every project, I bring not just technical expertise but a
        mindset fueled by the excitement of exploration and discovery.
        <br />
        <br />
        Join me on this exciting journey where code meets creativity, and every
        project is a chance to compose something extraordinary.
      </p> -->
