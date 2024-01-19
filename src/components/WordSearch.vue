<template>
  <div :class="$style.wordSearchContainer">
    <!-- <div :key="n" v-for="n in 60" :class="$style.letterContainer" :style="{ backgroundColor: randomColor() }">
      {{ String.fromCharCode(97 + Math.floor(Math.random()*26)) }}
    </div> -->
    <div :key="n" v-for="n in 10" class="flex evenly align-c" >
      <a :key="x" v-for="x in 10" :class="$style.letterContainer" :style="{ backgroundColor: randomColor() }">
        {{ String.fromCharCode(97 + Math.floor(Math.random()*26)) }}
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WordSearch",
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());
      return `rgb(${r()}, ${r()}, ${r()})`;
    },
  },
});
</script>
<style module>
.wordSearchContainer {
  border: 1px solid red;
  width: 30em;
  height: 30em;
  /* display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto auto; */
}
.letterContainer {
  /* display: flex; */
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  transition: ease-in-out .1s;
  cursor: pointer;
  width: 10%;
  height: auto;
  text-align: center;
  object-fit: contain;
}
.letterContainer:hover {
  box-shadow: rgb(255, 126, 255, .2) 0em 0em 20px;
  outline: 1px solid magenta;
  transition: ease-in-out .2s;
  /* width: 12%;
  height: 12%; */
  transform: scale(2);
  z-index: 3;
  position: relative;
}
.letterContainer:hover, .letterContainer:hover ~ .letterContainer, .letterContainer:hover + .letterContainer {
  transform: scale(1.1);
  z-index: 2;
}


.imageElement {
  width: auto;
  height: auto;
  object-fit: contain;
  transition: ease-in-out .1s;
  cursor: pointer;
  outline: 1px solid transparent;
}
.imageElement:hover {
  box-shadow: rgb(255, 126, 255, .2) 0em 0em 20px;
  outline: 1px solid magenta;
  transition: ease-in-out .2s;
  width: 12%;
}
</style>
