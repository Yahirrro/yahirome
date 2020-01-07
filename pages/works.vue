<template>
  <div>
    <header-anm :title="'Works'" :description="'Yahiro Hoshino Works'" />
    <section class="post-index">
      <h1 class="pagetitle">
        <span>制作実績</span>
      </h1>
      <div class="container">
        <article class="post-card" v-for="works in works" :key="works.id">
          <nuxt-link :to="'/works/' + works.id">
            <div
              class="image"
              :style="'background-image: url(' + works.thumbnail.url + ');'"
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
import headerAnm from "~/components/header/header_animated.vue";
export default {
  head() {
    return {
      title: "Works" + " | 星乃やひろ (Yahiro Hoshino)",
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

  components: {
    headerAnm
  },

  methods: {
    fetchWorks() {
      axios
        .get("https://yahiro.microcms.io/api/v1/works?limit=1000", {
          headers: { "X-API-KEY": process.env.APIKEY_works }
        })
        .then(res => {
          console.log(res.data);
          this.works = res.data.contents;
          console.log(this.works);
        })
        .catch(err => {
          console.log(err);
        });
    },
    modifyDatetime(date) {
      const Ymd = date.split("T")[0];
      const His = date.split("T")[1].split(".")[0];

      return Ymd + " " + His;
    }
  },
  mounted() {
    this.fetchWorks();
  }
};
</script>
