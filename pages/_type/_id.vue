<template>
  <div>
    <header id="post">
      <div class="bg-color"></div>
      <div
        class="bg"
        :style="'background-image: url(' + page.thumbnail.url + ')'"
      ></div>
      <div class="grid">
        <div
          class="image"
          :style="'background-image: url(' + page.thumbnail.url + ');'"
        ></div>
        <div class="text">
          <div class="category">
            <div
              class="content"
              v-for="category in page.category"
              :key="category.id"
            >
              {{ category.title }}
            </div>
          </div>
          <h1 v-html="page.title"></h1>
        </div>
      </div>
      <div class="container">
        <a
          class="gocheck absolute"
          :href="page.link"
          v-if="page.link"
          target="_blank"
        >
          みにいく
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              class
            />
          </svg>
        </a>
      </div>
    </header>
    <article class="post">
      <div class="thumb">
        <img :src="page.thumbnail.url" />
      </div>
      <div class="container" v-html="page.body"></div>
    </article>
    <a class="gocheck fixed" :href="page.link" v-if="page.link" target="_blank">
      みにいく
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          class
        />
      </svg>
    </a>
  </div>
</template>
<style lang="scss"></style>
<script>
import axios from "axios";
export default {
  head() {
    return {
      title: this.page.title + " | 星乃やひろ (Yahiro Hoshino)",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.body
        },
        {
          property: "og:title",
          content: this.page.title
        },
        {
          property: "og:description",
          content: this.page.body
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:site_name",
          content: "星乃やひろ (Yahiro Hoshino)"
        },
        {
          property: "og:url",
          content:
            "https://yahiro.me/" +
            this.$nuxt.$route.params.type +
            this.$nuxt.$route.params.id
        },
        {
          property: "og:image",
          content: this.thumbnail
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "Yahimotto"
        }
      ]
    };
  },
  data() {
    return {
      page: {}
    };
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://yahiro.microcms.io/api/v1/${params.type}/${params.id}`, {
        headers: { "X-API-KEY": process.env.APIKEY_works }
      })
      .then(res => {
        return {
          page: res.data
        };
      })
      .catch(e => {
        error({ statusCode: 404, message: "ページが見つかりません" });
      });
  }
};
</script>
