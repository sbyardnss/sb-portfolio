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
    const isMobileView = ref(window.innerWidth <= 768);

    const handleResize = () => {
      isMobileView.value = window.innerWidth <= 768;
    };

    const browserOrientation = ref(window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape');

    const handleChangeOrientation = () => {
      browserOrientation.value = window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape';
    }


    window.addEventListener('resize', () => {
      handleResize();
      handleChangeOrientation();
    });
    onUnmounted(() => {
      window.removeEventListener('resize', () => {
        handleResize();
        handleChangeOrientation();
      });
      

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
  // text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
