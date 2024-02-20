<template>
  <div id="portfolio-container">
    <Nav 
      id="navContainer" />
    <RouterView :key="$route.fullPath" id="routerContainer" />
  </div>
</template>

<script lang="ts">
import Nav from './components/Nav.vue';
import { defineComponent, ref, provide, onUnmounted } from 'vue';

export default defineComponent({
  name: 'SBPortfolio',
  components: {
    Nav,
  },
  setup() {
    const isMobileView = ref(window.innerWidth <=  768);
    const browserOrientation = ref(window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape');

    const handleChangeOrientation = () => {
      browserOrientation.value = window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape';
    }
    const handleResize = () => {
      isMobileView.value = window.innerWidth <=  768;
    };

    // Add the event listener for orientation change
    window.addEventListener('orientationchange', handleChangeOrientation);

    // Remove the event listener when the component is unmounted
    onUnmounted(() => {
      window.removeEventListener('orientationchange', handleChangeOrientation);
    });

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Remove resize event listener when the component is unmounted
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    provide('isMobileView', isMobileView);
    provide('orientation', browserOrientation);
  },
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
}
</style>
