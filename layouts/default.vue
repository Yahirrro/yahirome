<template>
  <div>
    <h1 class="__top__right__title">星乃やひろ</h1>
    <nuxt-link to="/" aria-label="Go to Top">
      <svg class="__top__left__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 566">
        <polygon
          class="cls-1"
          points="347.6 0 323.36 187.91 242.04 187.91 217.8 0 104.6 0 128.84 187.91 0 187.91 0 301.11 143.44 301.11 177.61 566 290.81 566 256.64 301.11 308.76 301.11 421.96 301.11 452.8 301.11 452.8 414.31 566 414.31 566 187.91 436.56 187.91 460.8 0 347.6 0"
        />
      </svg>
    </nuxt-link>
    <navbar />
    <transition name="page">
      <nuxt />
    </transition>
    <mainfooter v-if="$nuxt.$route.name !== 'index'" />
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
import navbar from "~/components/navbar.vue";
import mainfooter from "~/components/footer.vue";
export default {
  components: {
    navbar,
    mainfooter
  },
  head() {
    return {
      script: [
        { src: "/typekit.js" },
      ]
    };
  }
};
</script>
