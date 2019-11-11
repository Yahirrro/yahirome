<template>
  <div>
    <header-anm :title="'Works'" :description="'Yahiro Hoshino Works'" />
    <section class="post-index">
      <h1 class="pagetitle">
        <span>制作実績</span>
      </h1>
      <div class="container">
        <article class="post-card" v-for="works in works" :key="works.id">
          <nuxt-link :to="'/works/'+works.id">
            <div class="image" :style="'background-image: url('+works.thumbnail.url+');'"></div>
            <div class="category" v-html="works.category"></div>
            <div class="text">
              <h1 v-html="works.title"></h1>
            </div>
          </nuxt-link>
        </article>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.post-index {
  padding-top: 50px;
  padding-bottom: 100px;
  h1.pagetitle {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.1em;
    font-weight: bolder;
    margin-bottom: 100px;
    span {
      border-bottom: 5px solid yellow;
    }
  }
  .container {
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: calc(33.33% - 20px) calc(33.33% - 20px) calc(
        33.33% - 20px
      );
    grid-gap: 30px;
    grid-template-rows: auto;
    @media (max-width: 767.98px) {
      display: block;
    }
    .post-card {
      position: relative;
      border: 2px solid black;
      transition: all 0.3s cubic-bezier(0.9, 0.85, 0, 2.77);
      @media (max-width: 767.98px) {
        margin-bottom: 20px;
        &:active {
          transform: rotate(5deg);
        }
      }
      &:hover {
        transform: rotate(5deg);
      }
      a,
      a:hover {
        text-decoration: none;
        color: black;
      }
      .image {
        width: 100%;
        height: 250px;
        background-color: black;
        background-size: cover;
        background-position: center;
      }
      .category {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px;
        background-color: yellow;
        font-weight: bold;
        font-size: 0.8rem;
        border-left: 2px solid black;
        border-bottom: 2px solid black;
      }
      .text {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        letter-spacing: 0.1em;
        h1 {
          margin: 0;
        }
      }
    }
  }
}
</style>

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
      works: []
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
