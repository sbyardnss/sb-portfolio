<template>
  <img :id="`imageDisplayBasic + ${imageUrl}`" :class="imageClass" :src=imageUrl @click="handleZoomChange"
    :style="{ height: imageHeight, }" :onmouseover="handleHoverZoom" :onmouseout="handleHoverUnzoom" />
  <div v-if="zoomedImage" class="zoomContainer" @click="handleZoomChange">
    <img class="zoomedImage" :src="imageUrl" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageDisplay',
  data() {
    return {
      zoomedImage: false,
    };
  },
  emits: ['set-zoom-image'],
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    imageClass: {
      type: String,
      required: true,
      default: 'imageElement',
    },
    imageHeight: {
      type: String,
      required: true,
    },
    hoverZoom: {
      type: Boolean,
      required: false,
      default: true,
    },
    clickZoom: {
      type: Boolean,
      required: false,
      default: true,
    },
    // PROP USED ONLY IN OLD RESUME VIEWER. VALUE PLACED INLINE STYLE HEIGHT ON IMAGE ELEMENT
    // zoomHeight: {
    //   type: String,
    //   required: false,
    //   default: '90%',
    // }
  },
  methods: {
    handleZoomChange() {
      if (this.clickZoom)
        this.zoomedImage = !this.zoomedImage;
    },
    handleHoverZoom() {
      if (this.hoverZoom) {
        const imageToScale = document.getElementById(`imageDisplayBasic + ${this.imageUrl}`);
        if (imageToScale)
          imageToScale.style.transform = 'scale(1.2)';
      }
    },
    handleHoverUnzoom() {
      const imageToScale = document.getElementById(`imageDisplayBasic + ${this.imageUrl}`);
      if (imageToScale)
        imageToScale.style.transform = '';
    },
  },
  watch: {
    clickZoom() {
      if (this.clickZoom) {
        const imageToHoverCursor = document.getElementById(`imageDisplayBasic + ${this.imageUrl}`);
        if (imageToHoverCursor)
          imageToHoverCursor.style.cursor = 'pointer'
      }
    },
  },
});

</script>
<style>
.imageElement {
  height: auto;
  object-fit: contain;
  transition: ease-in-out .1s;
  outline: 1px solid transparent;
}

.imageElementWithHover {
  object-fit: cover;
  transition: ease-in-out .1s;
  cursor: pointer;
  outline: 1px solid transparent;

}

.imageElementWithHover:hover {
  box-shadow: rgb(255, 126, 255, .2) 0em 0em 20px;
  outline: 1px solid magenta;
  transition: ease-in-out .2s;
  z-index: 1;
}

.zoomContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: .5s ease-in-out;
  backdrop-filter: brightness(60%);
  z-index: 2;
}

.zoomedImage {
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: background-image 0.5s ease-in-out;
  max-height: 90vh;
  max-width: 90vw;
}

.imageElementWithHover {
  margin-right: .5em;
}

</style>