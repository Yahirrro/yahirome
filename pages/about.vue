<template>
  <div>
    <header-anm :title="'About'" :description="'About Yahiro Hoshino'" />
    <article id="content">
      <div class="container">
        <h2>
          誰に対しても
          <strong>“やさしい”</strong> デザインをはじめよう。
        </h2>
        <p>
          デザインを通して、みなさまの価値観を表現し、つなげて行く。
          <br />そんなお手伝いをさせて頂きたいと考えています。
        </p>
      </div>

      <div class="poster_image">
        <div class="inner">
          <img class="sm-shot" src="/web.png" alt />
        </div>
      </div>

      <div class="container">
        <h2>フロントエンドから、デザインまで。</h2>
        <p>
          デザインは“見た目を変えること”ではなく
          <strong>“きちんと機能させること”</strong>。
          <br />ユーザーに向けたメッセージが届くデザインを心がけています。
        </p>
      </div>

      <div class="poster_image">
        <div class="inner">
          <div class="loop" style="background-image: url(/all.png);"></div>
        </div>
      </div>

      <div class="grid-2c">
        <div class="container">
          <h2>
            過去の主な
            <strong>取引先</strong>
          </h2>
          <div class="company-icon">
            <img src="/company/TAKARA_TOMY_logo.png" />
            <img src="/company/UNO_logo.png" />
            <img src="/company/uuum_logo.png" />
            <img src="/company/pocodun_logo.png" />
            <img src="/company/easeus_logo.png" />
            <img src="/company/stampit_logo.svg" />
            <img src="/company/ikasa_logo.png" />
          </div>
        </div>

        <div class="container">
          <h2>できること</h2>
          <figure class="category">
            <h3>
              <strong>ツール</strong>
            </h3>
            <ul class="skils">
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Premiere Pro</li>
              <li>Adobe XD</li>
            </ul>
          </figure>
          <figure class="category">
            <h3>
              <strong>スキル</strong>
            </h3>
            <ul class="skils">
              <li>Webデザイン</li>
              <li>フロントエンド</li>
              <li>UI / UXデザイン</li>
              <li>動画制作</li>
            </ul>
          </figure>
          <figure class="category">
            <h3>
              <strong>プログラミング言語</strong>
            </h3>
            <ul class="skils">
              <li>HTML</li>
              <li>CSS / SCSS</li>
              <li>PHP</li>
              <li>Javascript</li>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
            </ul>
          </figure>
        </div>
      </div>
    </article>
    <figure class="aboutme">
      <div class="name">
        <img src="/icon.png" class="yahiro" alt="星乃やひろ (Yahiro Hoshino)" />
        <h1>星乃やひろ</h1>
        <p class="initial">Yahiro Hoshino</p>
        <p>
          <small>高校生</small>
        </p>
      </div>
      <div class="description">
        <p>
          学生の頃にWebサイトやプログラムに興味を持ったことがきっかけで、Webデザインを中心に、プログラムやデザインの勉強をはじめました。 世界最大級の動画サイト「<span>YouTube</span>」では、特定の人物のみに表示される「チャンネルの認証バッジ」が付与され、 オンラインマーケット「<span>Coconala</span>」では、販売総数が150件を突破し、やりとりを通してたくさんのお喜びの声をいただいております。
        </p>
      </div>
    </figure>
  </div>
</template>
<style lang="scss">
@import url("https://use.typekit.net/jcw1gwz.css");

article#content {
  text-align: center;
  letter-spacing: 0.25em;
  margin-bottom: 100px;
  .container {
    margin-top: 150px;
    margin-bottom: 50px;
    max-width: 700px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.9;
    strong {
      border-bottom: 5px solid yellow;
    }
  }

  .poster_image {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    overflow: hidden;
    border: 2px solid black;
    .inner {
      z-index: 99;
      max-width: 800px;
      height: 400px;
      background-color: rgba(0, 0, 0, 0.05);
      img.sm-shot {
        height: calc(100% + 100px);
      }
      .loop {
        z-index: 1;
        background-size: cover;
        width: 100%;
        height: calc(650px - 165px);
        overflow: hidden;
        animation: loop 60s linear infinite;
        @keyframes loop {
          0% {
            background-position: 7590px top;
          }
          100% {
            background-position: -1260px top;
          }
        }
      }
    }
  }

  .company-icon {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    transform: translateX(10px);
    margin-top: 40px;
    @media (max-width: 767.98px) {
      justify-content: center;
    }
    img {
      height: 40px;
      margin-right: 10px;
      margin-bottom: 20px;
    }
  }

  .category {
    margin: 0;
    ul.skils {
      list-style-type: none;
      margin: 0;
      padding-left: 1rem;
      border: 0;
      vertical-align: baseline;
      li {
        height: 32px;
        line-height: 32px;
        display: inline-block;
        margin: 0 8px 10px 0;
        padding: 0 8px;
        font-size: 12px;
        color: black;
        border: 1px solid black;
        letter-spacing: 0.01em;
      }
    }
  }

  .grid-2c {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    margin-top: 100px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    @media (max-width: 767.98px) {
      display: block;
      text-align: center;
    }
    .container {
      padding-left: 0px;
      padding-right: 0px;
      margin-top: 0px;
      margin-bottom: 50px;
      &:last-of-type {
        margin-bottom: 0px;
      }
    }
  }
}

figure.aboutme {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 114px;
  padding: 20px;
  text-align: left;
  border: 2px solid black;

  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 20px;
  grid-template-rows: auto;

  @media (max-width: 767.98px) {
    display: block;
    text-align: center;
  }
  .name {
    letter-spacing: 0.25em;
    img.yahiro {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    h1 {
      margin-top: 10px;
      margin-bottom: 0;
      font-size: 1.5rem;
    }
    p {
      letter-spacing: 0.01em;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 0.8rem;
      color: #6f6f6f;
      &.initial {
        font-family: niveau-grotesk, sans-serif;
      }
      &:last-of-type {
        @media (max-width: 767.98px) {
          margin-bottom: 1rem;
        }
      }
    }
  }
  .description {
    letter-spacing: 0.15em;
    p {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 0.9rem;
      line-height: 1.75;
      span {
        letter-spacing: 0.01em;
      }
    }
  }
}
</style>
<script>
import headerAnm from "~/components/header/header_animated.vue";
export default {
  head() {
    return {
      title: "About" + " | 星乃やひろ (Yahiro Hoshino)",
      meta: [
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://yahiro.me/about"
        }
      ]
    };
  },
  components: {
    headerAnm
  }
};
</script>
