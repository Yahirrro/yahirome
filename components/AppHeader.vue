<template>
  <header class="AppHeader" v-bind:class="{ 'AppHeader_animation' : AppHeaderAnimation, 'AppHeader_animation-leave' : AppHeaderLeave }">
    <div class="AppHeader_frame"></div>
    <h1 class="AppHeader_title">
      <span>{{ newTitle }}</span>
    </h1>
    <div class="AppHeader_titleBig">{{ newTitle }}</div>
    <div class="AppHeader_logoBackground"></div>
    <div class="AppHeader_leftTopText">{{ newDescription }}</div>
    <div class="AppHeader_leftBottomBorder"></div>
    <div class="AppHeader_leftCenterBorder"></div>
  </header>
</template>

<style lang="scss" scoped>
.AppHeader_animation {
  .AppHeader_title {      
    animation-name: leftTranslate;
    animation-duration: 3s;
    animation-delay: -1s;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);

    @keyframes leftTranslate {
      0% {
        transform: translateY(-50%) translateX(100vw);
      }
      100% {
        transform: translateY(-50%) translateX(0vw);
      }
    }
    &:before {
      animation-name: leftTranslate;
      animation-duration: 5s;
      animation-delay: 0.5s;
      animation-timing-function: cubic-bezier(0.4, 0, 0, 1);
    }
    &:after {
      animation-name: leftTranslate;
      animation-duration: 5s;
      animation-delay: 0s;
      animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
  .AppHeader_titleBig {
    animation-name: rightTranslate;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.42, 0, 0, 1);
    @keyframes rightTranslate {
      0% {
        transform: translateY(-50%) translateX(-100vw) rotate(0deg);
        opacity: 0;
      }
      100% {
        transform: translateY(-50%) translateX(0vw) rotate(-15deg);
        opacity: 1;
      }
    }
  }
  .AppHeader_leftTopText {
    animation-name: topTranslate;
    animation-duration: 3s;
    animation-delay: 0s;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
    @keyframes topTranslate {
      0% {
        transform: translateY(-100vh);
      }
      100% {
        transform: translateY(0vh);
      }
    }
  }
  .AppHeader_leftCenterBorder {
    animation-name: leftTranslate_bar;
    animation-duration: 30s;
    animation-delay: -14s;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
    @keyframes leftTranslate_bar {
      0% {
        transform: translateY(-50%) translateX(-100vw);
      }
      100% {
        transform: translateY(-50%) translateX(0vw);
      }
    }
  }
}
.AppHeader_animation-leave {
  @extend .AppHeader_animation;
  .AppHeader_title, .AppHeader_title:before, .AppHeader_title:after, .AppHeader_titleBig, .AppHeader_leftTopText, .AppHeader_leftCenterBorder {
    animation-direction: reverse;
    animation-duration: 0.5s;
    animation-delay: 0s;
  }  
}


.AppHeader {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 5;
  &_frame {
    width: calc(100vw - 44px);
    height: calc(100vh - 44px);
    margin: 20px auto;
    border: 2px black solid;
    z-index: 2;
  }
  &_title {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 2;
    transform: translateY(-50%);
    margin: 0;
    padding-right: 5%;
    font-family: niveau-grotesk, sans-serif;
    font-weight: 900;
    font-style: italic;
    font-size: 4rem;
    letter-spacing: -0.01em;
    color: black;
    &:before {
      content: "";
      position: absolute;
      left: -30px;
      top: -50px;
      display: inline-block;
      transform: translateY(-50%);
      width: 100px;
      height: 20px;
      background-color: black;
    }
    &:after {
      content: "";
      position: absolute;
      left: 100px;
      bottom: -15px;
      display: inline-block;
      transform: translateY(-50%);
      width: 100px;
      height: 5px;
      background-color: black;
    }
    span {
      outline-offset: -10px;
      border-bottom: 10px solid yellow;
    }
  }
  &_titleBig {
    z-index: -1;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%) rotate(-15deg);
    margin: 0;
    width: 100%;
    text-align: right;
    font-family: 'niveau-grotesk', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 74vw;
    letter-spacing: -0.08em;
    color: #f3f3f3;
  }
  &_logoBackground {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 35px;
    height: 35px;
    background-color: white;
  }
  &_leftTopText {
    position: absolute;
    top: 50px;
    left: 50px;
    margin: 0;
    writing-mode: vertical-rl;
    font-family: niveau-grotesk, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.8rem;
    letter-spacing: -0.01em;
  }
  &_leftBottomBorder {
    content: "";
    position: absolute;
    left: 80px;
    bottom: 80px;
    display: inline-block;
    width: 100px;
    height: 2px;
    background-color: black;
  }
  &_leftCenterBorder {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0px;
    bottom: 160px;
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color: yellow;
    transform: translateY(-50%);
  }
}
</style>

<script>
export default {
  props: ['title','description'],

  data() {
    return {
      AppHeaderAnimation: true,
      AppHeaderLeave: false,
      newTitle: this.title,
      newDescription: this.description,

      OnAppHeaderAnimation_interval: null,
      AppHeaderChange_interval: null
    }
  },

  created() {
    this.OnAppHeaderAnimation().then(() => {
      this.OnAppHeaderAnimation_interval = null
    });
    this.OnAppHeader();
  },

  methods: {
    async OnAppHeaderAnimation() {
      this.OnAppHeaderAnimation_interval = setTimeout(() => {
        this.AppHeaderAnimation = false;
      }, 30000);
    },

    OnAppHeader() {
      this.$nuxt.$on('changeHeader', this.AppHeaderChange)
      clearTimeout(this.OnAppHeaderAnimation_interval);
      clearTimeout(this.AppHeaderChange_interval);
    },

    AppHeaderChange(title, description) {
      if(this.newTitle == title) {
        console.log(window.innerHeight)
        setTimeout(() => {
          scroll({
            top: window.innerHeight,
            behavior: "smooth"
          });;
        }, 1)
        
        return
      };

      clearTimeout(this.OnAppHeaderAnimation_interval);
      this.AppHeaderAnimation = false;
      setTimeout(() => {
        this.AppHeaderLeave = true;
      }, 1)
      this.AppHeaderChange_interval = setTimeout(() => {
        this.AppHeaderLeave = false;
        this.newTitle = title;
        this.newDescription = description
        this.AppHeaderAnimation = true;
      }, 500)
      this.AppHeaderChange_interval = null;
    }
  }
}
</script>