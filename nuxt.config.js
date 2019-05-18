import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nick Niles, Web Design & Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      // { name: "msapplication-TileColor", content="#ffffff"},
      // { name: 'theme-color', content='#ffffff'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "favicon/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon/favicon-32x32.png"},
      { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon/favicon-16x16.png"},
      { rel:"manifest", href: "/site.webmanifest"},
      { rel:"mask-icon", href:"/safari-pinned-tab.svg", color: "#000000"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/main.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/in-viewport-directive.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      './assets/vars/*.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.yml$/,
        use: ['js-yaml-loader']
      })
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: "pre",
      //     test: /\.(js|vue)$/,
      //     loader: "eslint-loader",
      //     exclude: /(node_modules)/,
      //     options: { fix: true }
      //   })
      // }
    }
  }
}
