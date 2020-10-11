<template>
  <div>
    <h1 class="__top__right__title">Yahiro Nakamoto</h1>
    <nuxt-link to="/" aria-label="Go to Top">
      <AppLottie
        class="__top__left__logo"
        :options="logo"
        :height="30"
        :width="30"
        v-on:animCreated="handleAnimation"
      />
    </nuxt-link>
    <AppNavbar />
    <transition name="page">
      <nuxt />
    </transition>
    <AppFooter v-if="$route.path != '/'" />
  </div>
</template>
<script>
import * as main_logo from "~/assets/animation/logo_anm.json";

export default {
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
