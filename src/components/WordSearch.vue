<template>
  <div :class="$style.wordSearchContainer">
    <div :key="n" v-for="n in 90" :class="$style.letterContainer">
      {{ String.fromCharCode(97 + Math.floor(Math.random()*26)) }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WordSearch",
});
</script>
<style module>
.wordSearchContainer {
  border: 1px solid red;
  width: 30em;
  height: 30em;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto auto;
}
.letterContainer {
  font-size: 5vh;
}
</style>
