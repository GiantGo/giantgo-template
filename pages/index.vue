<template>
  <div>
    <navigation :navigation="navigation" :site-info="siteInfo"></navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6" v-for="(list, index) in lists" :key="index">
              <div class="panel panel-less">
                <div class="panel-heading">
                  {{list.name}}
                  <a class="pull-right see-all" :href="'/' + list.type + '/' + list._id + '/'">More</a>
                </div>
                <div class="list-group list-group-less">
                  <ins class="adsbygoogle"
                       style="display:block"
                       data-ad-format="fluid"
                       data-ad-layout-key="-hz+a-v-4h+ba"
                       data-ad-client="ca-pub-3164628254889272"
                       data-ad-slot="1252663305"></ins>
                  <script>
                    (adsbygoogle = window.adsbygoogle || []).push({})
                  </script>
                  <a class="list-group-item text-overflow"
                     v-for="(content, index) in list.contents"
                     :href="'/content/' + content._id + '/'"
                     v-if="index < 10"
                     :key="index">
                    <div class="card-img">
                      <img alt="img" v-if="content.extensions" :src="content.extensions.thumbnail">
                    </div>
                    <div class="card-info">
                      <section class="title">{{content.title}}</section>
                      <section>
                        <section class="social-bar">
                          <i class="iconfont icon-eye"></i>
                          <span>{{content.reading.total}}</span>
                        </section>
                      </section>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <global-footer :site-info="siteInfo"></global-footer>
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'
  import axios from 'axios'
  import GlobalFooter from '~/components/GlobalFooter'

  export default {
    components: {
      GlobalFooter,
      Navigation
    },
    data () {
      return {
        siteInfo: {
          codeFooter: ''
        },
        navigation: [],
        lists: []
      }
    },
    methods: {},
    head: {
//       script: [
//         {
//           innerHTML: `(adsbygoogle = window.adsbygoogle || []).push({
//   google_ad_client: 'ca-pub-3164628254889272',
//   enable_page_level_ads: true
// })`, type: 'text/javascript'
//         }
//       ],
//       __dangerouslyDisableSanitizers: ['script']
    },
    async asyncData ({params}) {
      try {
        let {data} = await axios.get('http://123.206.65.112/', {})

        return {
          siteInfo: data.siteInfo,
          navigation: data.navigation,
          lists: data.lists
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/colors";
</style>
