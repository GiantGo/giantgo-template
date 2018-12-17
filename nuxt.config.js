const axios = require('axios')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'YOUNA Games',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'YOUNA Games'
      }, {
        'http-equiv': 'Pragma',
        'content': 'no-cache',
      }, {
        'http-equiv': 'Cache-Control',
        'content': 'no-cache',
      }, {
        'http-equiv': 'Expires',
        'content': '0',
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/icon/iconfont.css'},
    ],
    script: [
      {src: '/js/jquery-2.2.1.min.js'},
      {src: '/js/bootstrap.min.js'},
      {src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true},
      {src: '/js/common.js'},
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  css: [
    // 项目里要使用的 SCSS 文件
    '@/assets/scss/index.scss',
  ],
  plugins: [
    '@/plugins/lodash',
    '@/plugins/filters'
  ],
  generate: {
    interval: 500,
    routes: function () {
      let columns = []
      let channels = []
      let contents = []
      let plays = []
      return Promise.all([
        axios({
          method: 'get',
          url: `http://123.206.65.112/api/categories`,
          data: {},
          headers: {
            Cookie: 'nodercmsSid=s%3A4gl9cR8lU3L29TMIj3KcoT4mKRTRBxo4.XGuj0BeIUbDJ0ovOBgDVkRVSxokjfSnooZ6V%2BxyQxhQ'
          }
        }),
        axios({
          method: 'get',
          url: `http://123.206.65.112/api/contents`,
          data: {},
          headers: {
            Cookie: 'nodercmsSid=s%3A4gl9cR8lU3L29TMIj3KcoT4mKRTRBxo4.XGuj0BeIUbDJ0ovOBgDVkRVSxokjfSnooZ6V%2BxyQxhQ'
          }
        })
      ]).then(res => {
        res[0].data.forEach(category => {
          if (category.type === 'column') {
            columns.push('/column/' + category._id)
          } else if (category.type === 'channel') {
            channels.push('/channel/' + category._id)
          }
        })
        res[1].data.contents.forEach(content => {
          contents.push('/content/' + content._id)
          plays.push('/play/' + content._id)
        })

        return [].concat(columns, channels, contents, plays)
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
