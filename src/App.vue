<template>
  <fw-turn class="magazine" :options="options">
    <img v-for="i in 31" :key="i" :src="`/pages/p${i}.jpg`"/>
  </fw-turn>
</template>

<script lang="js">
import { FwTurn } from "vue-turnjs";

export default {
  components: { FwTurn },
  data() {
    return {
      isMobile: false,
      options: {
        display: this.isMobile ? "single" : "double",
        acceleration: true,
        elevation: 50
      }
    }
  },

  mounted() {
    this.isMobile = window.matchMedia('max-width: 768px');
  }
}
</script>

<style scoped lang="scss">
.magazine {
  width: 100%;
  height: 95vh;

  img {
    width: 100%;
  }
}
.magazine .turn-page {
  background-color: #ccc;
  background-size: 100% 100%;
}
</style>
