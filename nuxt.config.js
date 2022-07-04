export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Testing the nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap' },


    ]
  },

  loading: { color: '#3B8070', height: '4px', duration: 5000 },
  // loading:false,


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    '~assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
    

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  env: {
    baseURL: process.env.baseURL || 'https://nuxt-blogs-c16de-default-rtdb.firebaseio.com',
    firebaseApiKey:'AIzaSyBHiMWsL51_E5VNbxK-v1L6M2Cc0J5WUyA'
  }

  ,
  // rootDir:'/my-app/'

  router: {
    // base:'/start3445/'

    // this is for if want cutom default routes
    // extendRoutes(routes,resolve){
    //   routes.push({
    //     path:'*',
    //     component:resolve(__dirname,'pages/index.vue')
    //   })
    // }


    //active link will be using active css class globally
    // linkActiveClass:'active'


    middleware:'log'
  },

  transition:{
    // main.css have a css .fade-enter-active, .fade-leave-active
    // name:'fade',
    // mode:'out-in'
  }




  // target: 'static',
  // router: {
  //   base: '/Blog_live/'
  // }
}
