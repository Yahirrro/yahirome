<template>
  <div class="images">
    <div class="__top__center__image">
      <lottie class="text_anm" :options="animated_text" :height="550" :width="500" v-on:animCreated="handleAnimation"/>
    </div>
  </div>
</template>
<script>
import Lottie from "~/components/lottie.vue";
// JSONデータを読み込み
import * as animated_text from "~/assets/animation/top_text.json";
export default {
  components: {Lottie},
  data() {
    return {
      // データを定義
      animated_text: { animationData: animated_text, loop: true },
      animationSpeed: 1,
      isHukidashiActive: false,
      isHukidashiActive2: false
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
  }
};
</script>
