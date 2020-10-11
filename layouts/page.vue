<template>
  <div>
    <AppNavbar />

    <client-only>
    <div class="LayoutPage_header">
      <AppHeader ref="AppHeader" :title="headerText.title" :description="headerText.description" />
      <AppNotify />
    </div>
    </client-only>
    
    <nuxt
      class="LayoutPage_main"
      v-bind:class="{ 'LayoutPage_main-full': LayoutPageMainFull }"
      @changeHeader="changeHeader()" />
    
    <AppFooter v-if="$route.path != '/'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerText: {},
      LayoutPageMainFull: false
    };
  },
  created() {
    this.ChangeHeader()
  },
  mounted() {
    if(this.$nuxt.$route.name.split('-').length > 1) {
      this.LayoutPageMainFull = true
    }
    setTimeout(() => {
      if(scrollY == 0 && this.LayoutPageMainFull == false) {
        scroll({
          top: window.innerHeight/4,
          behavior: "smooth"
        });;
      }
    }, 5000)
  },
  watch: {
    '$route': function(to, from) {
      if(to.name.split('-').length > 1) {
        setTimeout(() => {
          this.LayoutPageMainFull = true
        }, 500)
      }
      else {
        this.LayoutPageMainFull = false
      }
    }
  },
  methods: {
    ChangeHeader() {
      this.$nuxt.$on('changeHeader', (title, description) => {
        this.headerText = {
          title: title, description: description
        }
      })
    },

    OnLayoutPageMainFull() {
      this.$nuxt.$on('LayoutPageMainFull', (data) => {
        console.log(data)
        this.LayoutPageMainFull = data
      })
    }
  }
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.5, 0, 0, 1);
}
.page-enter,
.page-leave-active {
  transform: translateY(100vh)
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