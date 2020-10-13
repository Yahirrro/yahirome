<template>
  <div>
    <header id="post">
      <div class="bg-color"></div>
      <div
        class="bg"
        :style="`background-image: url( '${page.thumbnail.url}' );`"
      ></div>
      <div class="grid">
        <div
          class="image"
          :style="`background-image: url( '${page.thumbnail.url}' );`"
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
    </article>
    
  </div>
</template>
<style lang="scss" scoped>
a.gocheck {
  z-index: 100;
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
  &.fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  &.absolute {
    border: none;
    padding: 5px 10px;
    background-color: white;
    transform: translateY(3px);
    @media (max-width: 767.98px) {
      transform: translateY(0px);
    }
    &:hover {
      transform: translateY(6px);
    }
  }
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
  overflow: hidden;
  .bg-color {
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.85)
    );
    width: 100%;
    position: absolute;
    height: 400px;
  }
  .bg {
    width: 100%;
    position: absolute;
    height: 400px;
    background: url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1427&q=80);
    background-size: cover;
    background-position: center;
    filter: blur(20px);
    transform: scale(1.2);
  }
  .grid {
    z-index: 5;
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
    .category {
      display: flex;
      .content {
        padding: 5px;
        background-color: yellow;
        font-weight: bold;
        font-size: 0.8rem;
        border: 2px solid black;
        margin-right: 10px;
        margin-bottom: 1rem;
      }
    }
  }

  .container {
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    height: 29px;
    text-align: right;
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 10;
  }
}
article.post {
  min-height: calc(100vh - 550px);
  letter-spacing: 0.11em;
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: white;
  @media (max-width: 800px) {
    padding-top: 0px;
  }
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
    /deep/ {
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
        color: #00abd8;
        font-weight: bold;
        text-decoration: unset;
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
}
</style>
<script>
import axios from "axios";
export default {
  layout: 'page',
  head() {
    return this.$seo({
      title: this.page.title,
      templateTitle: '%title% | Works | %name%',
      image: this.page.thumbnail.url,
      openGraph: {
        type: 'article',
        image: this.page.thumbnail.url
      },
    })
  },
  data() {
    return {
      page: {}
    };
  },
  async asyncData({ params, error, $config: { APIKEY_works } }) {
    return axios
      .get(`https://yahiro.microcms.io/api/v1/works/${params.postId}`, {
        headers: { "X-API-KEY": 'e97d2214-a9de-428c-8c3d-cf9b9434628e' }
      })
      .then(res => {
        return {
          page: res.data
        };
      })
      .catch(e => {
        error({ statusCode: 404, message: "ページが見つかりません" });
      });
  },
  mounted () {
    this.$emit('LayoutPageMainFull', true)
  }
};
</script>
