<template>
  <div :class="$style.mobileHomeLinks">
    <div :class="$style.mobileHomeMenuItem" @click="$router.push('/experience')">
      <div class="m-1">
        <!-- <h2 class="light-text">Experience</h2> -->
        <div class="subHeader">View experience</div>
      </div>
      <img :class="$style.arrowIcon" src="https://static.thenounproject.com/png/8212-200.png" />
    </div>
    <div :class="$style.mobileHomeMenuItem" @click="$router.push('/projects')">
      <div class="m-1">
        <!-- <h2 class="light-text">Projects</h2> -->
        <div class="subHeader">View projects</div>
      </div>
      <img :class="$style.arrowIcon" src="https://static.thenounproject.com/png/8212-200.png" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileHomeLinks',
})
</script>

<style module>
@media (max-width: 768px) {
  .mobileHomeMenuItem {
    margin: 0 auto 1em auto;
    width: 90%;
  }

  .mobileHomeLinks {
    width: 100%;
  }

}

@media (min-width: 769px) {
  @keyframes move {

    0%,
    100% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(10px);
    }
  }

  .mobileHomeMenuItem {
    margin: 0 auto 1em auto;
    width: 40%;
    min-width: fit-content;
    height: 30%;
    cursor: pointer;

  }

  .mobileHomeMenuItem:hover {
    background: var(--first-color-faint-2);
    transition: 0.1s ease-in-out;
  }

  .mobileHomeMenuItem:hover .arrowIcon {
    animation: move 0.6s ease-in-out 3;
  }

  .mobileHomeLinks {
    display: flex;
  }
}

.mobileHomeMenuItem {

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--first-color-faint);
  border-radius: 4px;
}

.arrowIcon {
  filter: invert(.5);
  width: 2em;
  margin-right: .5em;
}
</style>