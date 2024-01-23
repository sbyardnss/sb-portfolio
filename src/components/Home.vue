<template>
  <div class="padded-container-1 flex column" :class="$style.homePageContainer">
    <div :class="$style.socialMediaLinkContainer" class="flex column between">
      <a href="https://github.com/sbyardnss" target="_blank" :class="$style.socialMediaIcon"
        class="devicon-github-original"></a>
      <a href="https://www.linkedin.com/in/stephen-byard/" target="_blank" :class="$style.socialMediaIcon"
        class="devicon-linkedin-plain"></a>
      <a :class="$style.socialMediaIcon" @click="handleDownloadResume">CV</a>
    </div>
    <section class="light-text flex" :class="$style.aboutMe">
      <div class="flex column" :class="$style.bioNameContainer">
        <h1 style="width: fit-content;">Hi, I'm Stephen</h1>
        <div class="flex align-c">
          <p :class="$style.bio">
            I'm a full-stack software developer based in Nashville, TN. Driven by a
            passion for learning, I thrive on mastering new technologies, unraveling
            complex problems, and continuously expanding my skill set. In every
            project, I bring not just technical expertise but a mindset fueled by
            the excitement of exploration and discovery.
            <br />
            <br />
            Join me on this exciting journey, at the intersection of code and creativity,
            where every project is an opportunity to achieve something
            extraordinary.
          </p>
        </div>
      </div>
      <div :class="$style.sbImage" />
    </section>
    <div class="flex between align-c wrap">
      <SliderWindow />
      <!-- <SkillsDisplay /> -->
      <EmailForm />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SliderWindow from "../components/Slider.vue";
import EmailForm from "./EmailForm.vue";
import { downloadResume } from "@/utils/download-resume";
// import SkillsDisplay from "./SkillsDisplay.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    SliderWindow,
    EmailForm,
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
.homePageContainer {
  width: 70vw;
  margin: 2em auto;

}

.bioNameContainer {
  width: 50%;
}

.aboutMe {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-right: 4em;
}

.socialMediaLinkContainer {
  position: absolute;
  left: 2vw;
}

.socialMediaIcon {
  margin: .5em .2em;
  font-size: 2.5em;
  color: var(--first-color-faint-2);
  cursor: pointer;
  text-decoration: none;
}

.socialMediaIcon:hover {
  color: var(--first-color-faint-lighter);
}

.sbImage {
  font-size: 3vw;
  width: 25em;
  max-width: 400px;
  max-height: 480px;
  height: 30em;
  background-image: url("../assets/faceBio.jpeg");
  background-size: cover;
  background-position-x: center;
  filter: drop-shadow(1em 1em .5em #090a0f75);
  border-radius: 10px;
}

.bio {
  /* width: 100%; */
  text-align: start;
  background: linear-gradient(0.25turn, #090a0f, transparent);
  font-size: 1em;
  font-weight: 100;
  padding: 2em;
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
