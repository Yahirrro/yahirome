<template>
  <div>
    <header id="post">
      <div class="grid">
        <div class="image" :style="'background-image: url('+works.thumbnail.url+');'"></div>
        <div class="text">
          <p class="type">{{$route.params.type}}</p>
          <h1 v-html="works.title"></h1>
        </div>
      </div>
    </header>
    <article class="post">
      <div class="thumb">
        <img :src="works.thumbnail.url" />
      </div>
      <div class="container" v-html="works.body"></div>
    </article>
    <a class="gocheck" :href="works.link" v-if="works.link" target="_blank">
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
<style lang="scss">
a.gocheck {
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  margin: 0;
  padding: 10px;
  border: 2px solid black;
  backdrop-filter: blur(10px);
  background-color: rgba(251, 251, 0, 0.7);
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  transition: all 0.3s cubic-bezier(0.9, 0.85, 0, 2.77);
  &:hover {
    transform: rotate(-10deg);
  }
  svg {
    width: 0.8rem;
    transform: rotate(45deg) translateY(1px) translateX(3px);
  }
}
header#post {
  position: relative;
  background-position: center;
  background-size: cover;
  letter-spacing: 0.11em;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.1);
  .grid {
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translate(-50%);
    display: grid;
    grid-template-columns: 150px 520px;
    grid-gap: 30px;
    align-content: end;
    align-items: end;
    max-width: 700px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 767.98px) {
      display: block;
    }
  }
  .image {
    background-size: cover;
    background-position: center;
    width: 146px;
    height: 100px;
    border: 2px solid black;
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  .text {
    @media (max-width: 767.98px) {
      padding-left: 15px;
      padding-right: 15px;
    }
    h1,
    p {
      margin: 0;
    }
    p {
      display: inline-block;
      background-color: yellow;
      margin-bottom: 1rem;
      padding: 5px;
      border: solid 2px black;
      letter-spacing: 0em;
      text-transform: capitalize;
      font-family: niveau-grotesk, sans-serif;
      font-style: italic;
    }
  }
}
article.post {
  min-height: calc(100vh - 550px);
  letter-spacing: 0.11em;
  padding-top: 50px;
  padding-bottom: 100px;
  .thumb {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 100%;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    }
  }
  .container {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: calc(50px - 1rem);
    img {
      height: auto;
      width: calc(100% + 30px);
      transform: translateX(-15px);
      margin-top: 20px;
      margin-bottom: 20px;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
      background-color: #f8f9fa;
    }
    li {
      margin-bottom: 10px;
    }
    h1,
    h2,
    h3,
    h4 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: 700;
    }
    h1 {
      margin-top: 0px;
      text-align: center;
    }
    h2 {
      background: white;
      display: inline-block;
      padding: 10px 15px;
      font-size: 1.5rem;
      transform: translateX(-15px);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    }
    h3 {
      margin-top: 50px;
    }
    strong {
      font-weight: 700;
    }
    a {
      word-wrap: break-word;
      letter-spacing: 0.05rem;
      transition-duration: 0.5s;
      color: yellow;
      &:hover {
        text-decoration: none;
      }
    }
    p {
      margin-bottom: 1rem;
      line-height: 2;
    }
  }
}
</style>
<script>
import axios from "axios";
export default {
  head() {
    return {
      title: this.works.title + " | 星乃やひろ (Yahiro Hoshino)",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.works.body
        },
        {
          property: "og:title",
          content: this.works.title
        },
        {
          property: "og:description",
          content: this.works.body
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
      works: {}
    };
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://yahiro.microcms.io/api/v1/works/${params.id}`, {
        headers: { "X-API-KEY": process.env.APIKEY_works }
      })
      .then(res => {
        return {
          works: res.data
        };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Post not found" });
      });
  }
};
</script>