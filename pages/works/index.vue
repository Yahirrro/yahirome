<template>
  <section class="post-index">
    <PageTitle title="制作物" enTitle="WORKS"></PageTitle>
    <div class="container" style="grid-template-columns: 1fr 1fr; gap: 50px">

      <article class="WorksCard" v-for="(content, index) in works" :key="index">
        <div
          class="WorksCard_image"
          :style="`background-image: url( '${content.thumbnail.url}' );`"
          @click="$router.push('/works/' + content.id)"
        ></div>
        <div class="WorksCard_text">
          <div class="WorksCard_category">
            <div class="WorksCard_categoryElement" v-for="(category, index) in content.category" :key="index">
              {{ category.title }}
            </div>
          </div>
          <h1 class="WorksCard_title"><nuxt-link :to="'/works/' + content.id">{{ content.title }}</nuxt-link></h1>
        </div>
      </article>
    </div>

    <div class="container">
      <!-- <article class="post-card" v-for="works in works" :key="works.id">
        <nuxt-link :to="'/works/' + works.id">
          <div
            class="image"
            :style="`background-image: url( '${works.thumbnail.url}' );`"
          ></div>
          <div class="category">
            <div
              class="content"
              v-for="category in works.category"
              :key="category.id"
            >
              {{ category.title }}
            </div>
          </div>
          <div class="text">
            <h1 v-html="works.title"></h1>
          </div>
        </nuxt-link>
      </article> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1500px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  grid-template-rows: auto;
  @media (max-width: 767.98px) {
    display: block;
  }
}

.WorksCard {
  position: relative;
  text-decoration: none;
  transform-style: flat;
  &:hover {
    .WorksCard_image {
      transform: scale(1.035);
      box-shadow: 0 13px 45px rgba(0, 0, 0, 0.35);
    }
    .WorksCard_text {
      transform: scale(1.06) translateZ(1000px);
    }
    .WorksCard_title, .WorksCard_categoryElement {
      box-shadow: 0 15px 24px rgba(0, 0, 0, 0.1);
    }
  }
  &:first-of-type {
    grid-column: 1 / 3;
    margin-bottom: 50px;
    .WorksCard_image {
      width: 75%;
      height: 700px;
      
      @media (max-width: 767.98px) {
        width: 100%;
        height: 500px;
        margin-bottom: 100px;
      }
    }
    .WorksCard_title {
      font-size: 2.3rem;
      @media (max-width: 767.98px) {
        font-size: 1.8rem;
      }
    }
    .WorksCard_category {
      margin-top: 8px;
    }
    .WorksCard_text {
      left: inherit;
      right: 0;
      bottom: 50px;
      z-index: 2;
      &:before {
        content: "RECENT WORK"
      }
      @media (max-width: 767.98px) {
        left: 0;
        bottom: -30px;
      }
    }
  }
  &_image {
    transition: all 3s cubic-bezier(0.5, 0, 0.25, 1);
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 3px 24px rgba(0,0,0,.16);
    transform: rotate3d(5, 3, 0, -25deg);
    transform-style: flat;
    cursor: pointer;
    @media (max-width: 767.98px) {
      height: 250px;
      margin-bottom: 30px;
    }
  }
  &_text {
    transform-style: flat;
    transform: translateZ(1000px);
    transition: all 3s cubic-bezier(0.5, 0, 0.25, 1);
    position: absolute;
    font-size: 2rem;
    left: 20px;
    bottom: 30px;
    @media (max-width: 767.98px) {
      left: 10px;
      bottom: -10px;
    }
  }
  &_title {
    transition: all 2s cubic-bezier(0.5, 0, 0.25, 1);
    display: inline-block;
    font-size: 1.8rem;
    padding: 5px 10px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    border-radius: 5px;
    margin-bottom: 0;
    box-shadow: 0 3px 24px rgba(0,0,0,.08);
    margin: 0;
    a {
      text-decoration: none;
      color: black;
    }
    
    @media (max-width: 767.98px) {
      font-size: 1.5rem;
    }
  }
  &_category {
    display: flex;
    gap: 10px;
    word-break: keep-all;
    flex-wrap: wrap;
    margin-bottom: 10px;
    @media (max-width: 767.98px) {
      gap: 5px;
    }
  }
  &_categoryElement {
    transition: all 3s cubic-bezier(0.5, 0, 0.25, 1);
    text-decoration: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: rgb(255, 255, 0);
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
    box-shadow: 0 3px 24px rgba(0,0,0,.08);
    &:before {
      content: '#'
    }
    @media (max-width: 767.98px) {
      padding: 3px 5px;
    }
  }
}
</style>

<script>
import axios from "axios";
export default {
  layout: 'page',

  head() {
    return this.$seo({
      title: 'Works'
    })
  },
  data() {
    return {
      works: {}
    };
  },
  async asyncData({ $config: { APIKEY_works }}) {
    const response = await axios
      .get("https://yahiro.microcms.io/api/v1/works?limit=1000", {
        headers: { "X-API-KEY": 'e97d2214-a9de-428c-8c3d-cf9b9434628e' }
      });
    return {
      works: response.data.contents
    }
  },
  methods: {
    modifyDatetime(date) {
      const Ymd = date.split("T")[0];
      const His = date.split("T")[1].split(".")[0];

      return Ymd + " " + His;
    }
  },
  
  created() {
    this.$nuxt.$emit('changeHeader', 'Works', 'Yahiro Nakamoto Works')
  }
};
</script>
