<template>
  <div>
    <AppNavbar />

    <client-only>
    <div class="LayoutPage_header">
      <AppHeader ref="AppHeader" :title="headerText.title" :description="headerText.description" />
    </div>
    </client-only>
    
    <nuxt
      class="LayoutPage_main"
      v-bind:class="{ 'LayoutPage_main-full': $route.name.split('-').length > 1   }"
      @changeHeader="changeHeader()" />
    
    <AppFooter v-if="$route.path != '/'" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: "/typekit.js" }]
    };
  },
  data() {
    return {
      headerText: {}
    };
  },
  created() {
    this.OnChangeHeader()
  },
  watch: {
    '$route': function(to, from) {
      // window.scrollTo(0, 500)
    }
  },
  methods: {
    OnChangeHeader() {
      this.$nuxt.$on('changeHeader', this.ChangeHeader)
    },
    ChangeHeader(title, description) {
      this.$emit('changeHeaderComponent', title, description)
      this.headerText = {
        title: title, description: description
      }
    }
  }
}
</script>

<style lang="scss">
.page-enter-active {
  transition: all 0.5s ease;
}
.page-leave-active {
  transition: all 0.5s ease;
}
.page-enter {
  transform: translateX(100vw);
}
.page-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.LayoutPage {
  &_header {
    position: fixed;
    top: 0;
  }
  &_main {
    position: relative;
    margin-top: 100vh;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(15px);
    overflow: hidden;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    @media (max-width: 767.98px) {
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      backdrop-filter: blur(20px);
    }
    &-full {
      margin-top: 0px;
      border-radius: 0;
    }
  }
}
</style>