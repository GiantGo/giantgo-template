const axios = require('axios')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'giantgo-nuxt',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/icon/iconfont.css'},
      {rel: 'stylesheet', href: '/css/main.css'},
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  css: [],
  plugins: [
    '@/plugins/lodash'
  ],
  generate: {
    routes: function () {
      return axios.get('http://123.206.65.112/')
        .then((res) => {
          // return res.data.map((user) => {
          //   return '/users/' + user.id
          // })
        })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      'axios', 'lodash'
    ],
    /*
     ** Run ESLint on save
     */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config
          .module
          .rules
          .push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
      }
    }
  }
}
