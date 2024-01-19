<template>
  <div id="portfolio-container">
    <Nav
      id="navContainer" />
    <RouterView
      :key="$route.fullPath"
      id="routerContainer" />
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
import Nav from './components/Nav.vue';
import { defineComponent } from 'vue';
// @Options({
//   components: {
//     Nav,
//     ProjectsDisplay,
//   },
// })
// export default class App extends Vue {}
export default defineComponent({
  name: 'SBPortfolio',
  components: {
    Nav,
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

#portfolio-container {
  // height: 100vh;
}
#routerContainer {
  // padding: .5em;
  // height: 90vh;
  // background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
#navContainer {
  // height: 14vh;
}


</style>
