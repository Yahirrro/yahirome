require("dotenv").config();
const { APIKEY_works } = process.env;
const axios = require("axios");
export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: "Yahiro Nakamoto (中本 八尋)",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
    script: [{ src: "/typekit.js" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000000" },
  /*
   ** Global CSS
   */
  css: [{ src: "~/assets/scss/design.scss", lang: "scss" }],

  components: true,

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      '~/modules/nuxt-image-extractor.js',
      {
        baseUrl: 'https://images.microcms-assets.io',
        SiteBaseUrl: 'https://yahiro.me',
        path: '/_images',
        extensions: ['jpg', 'jpeg', 'png'],
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/sitemap",
    'nuxt-seo'
  ],

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://yahiro.me",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: ["post/"],
    routes(callback) {
      axios
        .get("https://yahiro.microcms.io/api/v1/works?limit=1000", {
          headers: { "X-API-KEY": "e97d2214-a9de-428c-8c3d-cf9b9434628e" }
        })
        .then(res => {
          var routes = res.data.contents.map(works => {
            return "/works/" + works.id;
          });

          callback(null, routes);
        })
        .catch(callback);
    }
  },
  seo: {
    baseUrl: 'https://yahiro.me',
    lang: 'ja',
    language: 'Japanese',
    name: 'Yahiro Nakamoto (中本 八尋)',
    title: 'Yahiro Nakamoto (中本 八尋)',
    templateTitle: '%title% | %name%',
    description: 'デザインとテクノロジーを使って、プロダクトをより良くするお手伝いをしています。',
    keywords: ['中本 八尋', 'Yahiro Nakamoto', 'フロントエンドエンジニア', 'UIデザイナー', '高校生'],
    image: 'https://yahiro.me/thumb.png',
    openGraph: {
      name: 'Yahiro Nakamoto (中本 八尋)',
      type: 'website',
      image: 'https://yahiro.me/thumb.png'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Yahimotto',
      creator: '@Yahimotto'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  privateRuntimeConfig: {
    APIKEY_works: "e97d2214-a9de-428c-8c3d-cf9b9434628e"
  },

  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  generate: {
    routes() {
      return axios
        .get("https://yahiro.microcms.io/api/v1/works?limit=1000", {
          headers: { "X-API-KEY": "e97d2214-a9de-428c-8c3d-cf9b9434628e" }
        })
        .then(res => {
          return res.data.contents.map(data => {
            return "/works/" + data.id;
          });
        });
    }
  }
};
