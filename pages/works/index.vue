<template>
  <div>
    <section class="post-index">
      <h1 class="pagetitle">
        <span>制作実績</span>
      </h1>
      <div class="container">
        <article class="post-card" v-for="works in works" :key="works.id">
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
        </article>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>

<script>
import axios from "axios";
export default {
  layout: 'page',

  head() {
    return {
      title: "Works" + " | Yahiro Nakamoto",
      meta: [
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://yahiro.me/works"
        }
      ]
    };
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
