<template>
  <div id="portfolio-container">
    <Nav 
      id="navContainer" 
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent />
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

    window.addEventListener('resize', handleResize);
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    provide('isMobileView', isMobileView);
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
