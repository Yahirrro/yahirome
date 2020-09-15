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
      {
        hid: "description",
        name: "description",
        content:
          "Webデザインを中心に、プログラムやデザイン、動画編集などを幅広く行っています。"
      },
      {
        property: "og:image",
        content: "https://yahiro.me/thumb.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "Yahimotto"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000000" },
  /*
   ** Global CSS
   */
  css: [{ src: "~/assets/scss/design.scss", lang: "scss" }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      'nuxt-image-extractor',
      {
    	baseUrl: 'https://images.microcms-assets.io',
    	path: '/_images',
    	extensions: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg'],
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/sitemap"],

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
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  env: {
    APIKEY_works
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
