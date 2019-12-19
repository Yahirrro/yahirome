<template>
  <div class="images">
    <div class="__top__center__image">
      <lottie class="hukidashi" v-if="isHukidashiActive" v-bind:class="{ active: isHukidashiActive2}" :options="hukidashi" :height="76.923" :width="250" v-on:animCreated="handleAnimation"/>
      <lottie class="logo" :options="logo" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
    </div>
  </div>
</template>
<script>
import Lottie from "~/components/lottie.vue";
// JSONデータを読み込み
import * as main_logo from "~/assets/animation/logo_anm.json";
import * as hukidashi from "~/assets/animation/hukidashi.json";
export default {
  components: {Lottie},
  data() {
    return {
      // データを定義
      logo: { animationData: main_logo, loop: false },
      hukidashi: { animationData: hukidashi, loop: true },
      animationSpeed: 1,
      isHukidashiActive: false,
      isHukidashiActive2: false
    };
  },
  mounted(){
    window.setTimeout(()=>{
      this.HukidashiActive();
    }, 4000);
    window.setTimeout(()=>{
      this.HukidashiActive2();
    }, 4500);
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    HukidashiActive(){
      this.isHukidashiActive = true;
    },
    HukidashiActive2(){
      this.isHukidashiActive2 = true;
    }
  }
};
</script>
