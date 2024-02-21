<template>
  <div class="light-text">
    <section class="flex column align-c full-container">
      <div class="flex between align-c" :class="$style.experiencePageHeader">
        <h3 class="header">Experience</h3>
        <a class="btn-action" @click="handleDownloadResume">Download CV</a>
      </div>
      <div :class="$style.experienceListItem" :key="experience.employer" :ref="experience.employer"
        v-for="experience in experienceList">
        <div :class="$style.experienceItemHeader" class="bottom-header-border align-e between m-b-1">
          <div class="subHeader">
            {{ experience.position }}
          </div>
          <div class="subheader">{{ experience.ext.image ? '' : experience.employer }}</div>
          <img v-if="experience.ext.image" :class="$style.extImage" :src="experience.ext.image"
            @click="handleNavigateToExternalLink(experience.ext.link);" />
        </div>
        <div>
          {{ experience.date }}
        </div>
        <p>
          {{ experience.description }}
        </p>
        <ul class="responsive-text-medium">
          <li :key="note" v-for="note in experience.notes">
            {{ note }}
          </li>
        </ul>
      </div>
    </section>
    <section class="flex column align-c">
      <h2>Takeaways</h2>
      <ul class="m-none" :key="item.title" v-for="item in takeawayList"
        :class="$style.experienceListItem">
        <div class="subHeader">{{ item.title }}</div>
        <p>{{ item.detail }}</p>
      </ul>
    </section>
    <section class="padded-container-1">
      <h2 class="text-align-c">Education</h2>
      <div class="w-fit m-center flex align-c">
        <img :style="{ height: '5em', marginRight: '2em', cursor: 'pointer' }"
          src="https://upload.wikimedia.org/wikipedia/commons/d/df/University_of_Tennessee_at_Chattanooga_athletics_logo.png" 
          @click="handleNavigateToExternalLink('https://www.utc.edu/')"/>
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
import { downloadResume } from "@/utils/download-resume";
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
    handleNavigateToExternalLink(url: string) {
      window.open(url, '_blank', 'noopener,noreferrer');
    },
    handleDownloadResume() {
      downloadResume();
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
@media (min-width: 769px) {
  .experiencePageHeader {
    width: 80%;
  }

  .experienceListItem {
    width: 80%;
  }

  .extImage {
    width: 10em;
    cursor: pointer;
    transition: .2s;
  }

  .extImage:hover {
    transform: scale(1.1);
  }

}

@media (max-width: 768px) {

  .experiencePageHeader {
    width: 90%;
  }

  .experienceListItem {
    width: 90%;
  }


  .extImage {
    width: 7em;
  }

  ul {
    padding-left: 1em;
  }
}
.experiencePageHeader {
  margin: 1em 0;
}
.experienceItemHeader {
  display: flex;
}

.experienceListItem {
  padding-bottom: 2em;
  margin-bottom: 2em;
  padding-left: 0;
}
</style>