<template>
  <div>
    <h1 class="__top__right__title">星乃やひろ</h1>
    <nuxt-link to="/" aria-label="Go to Top">
      <lottie
        class="__top__left__logo"
        :options="logo"
        :height="30"
        :width="30"
        v-on:animCreated="handleAnimation"
      />
    </nuxt-link>
    <navbar />
    <transition name="page">
      <nuxt />
    </transition>
    <mainfooter v-if="$route.path != '/'" />
  </div>
</template>
<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
<script>
import Lottie from "~/components/lottie.vue";
import * as main_logo from "~/assets/animation/logo_anm.json";

import navbar from "~/components/navbar.vue";
import mainfooter from "~/components/footer.vue";
export default {
  components: {
    navbar,
    mainfooter,
    Lottie
  },
  head() {
    return {
      script: [{ src: "/typekit.js" }]
    };
  },
  data() {
    return {
      // データを定義
      logo: { animationData: main_logo, loop: false },
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>
