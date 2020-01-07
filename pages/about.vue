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
              <li>UIデザイン</li>
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
              <li>JavaScript</li>
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
          学生の頃にWebサイトやプログラムに興味を持ったことがきっかけで、Webデザインを中心に、プログラムやデザインの勉強をはじめました。
          世界最大級の動画サイト「<span>YouTube</span>」では、特定の人物のみに表示される「チャンネルの認証バッジ」が付与され、
          オンラインマーケット「<span>Coconala</span>」では、販売総数が150件を突破し、やりとりを通してたくさんのお喜びの声をいただいております。
        </p>
      </div>
    </figure>
  </div>
</template>
<style lang="scss"></style>
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
