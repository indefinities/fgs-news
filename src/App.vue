<template>
  <div class="fgs-news">
    <fw-turn :options="options" class="magazine">
      <img v-for="i in 31" :key="i" :src="`/pages/p${i}.jpg`"/>
    </fw-turn>
  </div>
</template>

<script lang="js">
import {FwTurn} from "vue-turnjs";

export default {
  components: {FwTurn},
  data() {
    return {
      isMobile: false,
      options: {
        display: this.isMobile ? 'single' : 'double',
        acceleration: true,
        elevation: 50
      }
    }
  },
  beforeCreate() {
    this.isMobile = window.matchMedia('(max-width: 767px)').matches;
  },
}
</script>

<style lang="scss">
.fgs-news {
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .magazine {
    width: 100%;
    border: #cccccc solid 1px;

    @media (min-width: 768px) {
      height: 95vh;
    }

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .magazine .turn-page {
    background-color: #ccc;
    background-size: 100% 100%;
  }
}
</style>
