<template>
  <div class="light-text">
    <section class="flex column align-c">
      <h2>Technical Experience</h2>
      <div :class="$style.experienceListItem" :key="experience.employer" :ref="experience.employer" v-for="experience in experienceList"
        class="padded-container-1">
        <div class="flex align-c m-b-2">
          <img v-if="experience.extImageLink" :class="$style.extImage" :src="experience.extImageLink" />
          <span class="header">{{ experience.employer }}</span> <span class="subHeader" v-if="experience.date"> - {{ experience.position }}</span>
        </div>
        <div>
          {{ experience.date }}
        </div>
        <p>
          {{ experience.description }}
        </p>
        <ul>
          <li :key="note" v-for="note in experience.notes">
            {{ note }}
          </li>
        </ul>
      </div>
    </section>
    <section class="flex column align-c">
      <h2>Takeaways</h2>
      <ul class="padded-container-1 m-none" :key="item.title" v-for="item in takeawayList" :class="$style.experienceListItem">
        <div class="subHeader">{{ item.title }}</div>
        <p>{{ item.detail }}</p>
      </ul>
      <!-- - Part 1: planning - understanding goals - clear outline of functionality
      as much as possible - design mockups - time management? - Part 2:
      organization - consistent file structure - abstraction - inheritance -
      Part 3: knowing worth - My value depends on the skills I bring to the
      table - Understanding of length of time a project will take - Predicting
      length of time to learn new tech or skills - Part 4: referencing
      documentation for new technologies and processes - Learned paypal via
      requests - Learned how to incorporate cloudinary - Learned how to
      incorporate openAI - points of improvement -->
    </section>
    <section class="padded-container-1">
      <h2 class="text-align-c">Education</h2>
      <div class="w-fit m-center flex align-c">
        <img :style="{height: '5em', marginRight: '2em'}" src="https://upload.wikimedia.org/wikipedia/commons/d/df/University_of_Tennessee_at_Chattanooga_athletics_logo.png" />
        <div>
          <h3>University of Tennessee at Chattanooga</h3>
          <p>BA, Communication 2013</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ExperienceList, Takeaways } from "@/constants/experience";
import { scrollToTop } from "@/utils/scroll-to-top";

export default defineComponent({
  name: "ExperiencePage",

  data() {
    return {
      experienceList: ExperienceList,
      takeawayList: Takeaways,
    }
  },
  methods: {
    scrollToExperience(employer: string) {
      const refArray = this.$refs[employer] as Element[];
      if (refArray && refArray.length > 0) {
        refArray[0].scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (to.hash) {
          this.$nextTick(() => {
            this.scrollToExperience(to.hash.substring(1)); // remove the '#' from the hash
            //TODO: decide if you want to keep this hash removal
            window.history.replaceState({}, '', window.location.pathname + window.location.search);
          });
        } else {
          scrollToTop();
        }
      },
    },
  }
});
</script>
<style module>
.experienceListItem {
  width: 80%;
  padding-bottom: 2em;
}
.extImage {
  width: 10em;
}
</style>


<!-- - Part 1: Planning In this crucial phase, I meticulously understand project goals,
creating a foundation for success. By developing a clear outline of
functionality, I ensure that the project meets both client expectations and
end-user needs. The process includes crafting design mockups, providing a visual
roadmap for the project's aesthetic and functional elements. Additionally,
effective time management is a cornerstone, ensuring projects are delivered on
time without compromising quality. 
- Part 2: Organization A well-organized
codebase is paramount for project scalability and maintainability. I adhere to
consistent file structures, making it easy for both myself and other developers
to navigate the code. Utilizing abstraction and inheritance principles, I design
code that is modular and extensible, promoting code reuse and reducing
redundancy. This results in a streamlined development process and a more
sustainable product. 
- Part 3: Knowing Worth Recognizing that my value as a
developer is directly tied to the skills I bring to the table, I invest in
continuous skill development. I not only understand the length of time a project
will take but also have a keen sense of predicting the time required to learn
new technologies or skills. This foresight enables effective project planning
and ensures that I stay ahead of industry trends, providing maximum value to my
clients. 
- Part 4: Referencing Documentation for New Technologies and Processes In
adapting to the ever-evolving tech landscape, I have honed the skill of
referencing documentation effectively. I successfully incorporated PayPal
functionality into projects by delving into their documentation via the Requests
library. Similarly, I seamlessly integrated Cloudinary and OpenAI into my
repertoire by navigating their documentation with precision. This ability not
only showcases my resourcefulness but also highlights my commitment to staying
abreast of cutting-edge technologies. -->
