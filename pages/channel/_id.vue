<template>
  <div>
    <!--<navigation :navigation="navigation" :site-info="siteInfo"></navigation>-->
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <ol class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li v-for="(breadcrumb, index) in category.breadcrumb" :key="index">
              <a :href="'/' + breadcrumb.type + '/' + breadcrumb._id + '/'">{{breadcrumb.name}}</a>
            </li>
            <li class="active">{{category.name}}</li>
          </ol>
          <div class="row">
            <div class="col-md-6" v-for="(list, index) in lists" :key="index">
              <div class="panel panel-less">
                <div class="panel-heading">
                  {{list.name}}
                  <a class="pull-right see-all" :href="'/' + list.type + '/' + list._id + '/'">More</a>
                </div>
                <div class="list-group list-group-less">
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
              <!-- younagames -->
              <!--<ins class="adsbygoogle"-->
                   <!--style="display:block"-->
                   <!--data-ad-format="fluid"-->
                   <!--data-ad-layout-key="-i2+e-f-4c+9b"-->
                   <!--data-ad-client="ca-pub-1560934174894492"-->
                   <!--data-ad-slot="2326591342"></ins>-->
              <!--<script>-->
                <!--(adsbygoogle = window.adsbygoogle || []).push({})-->
              <!--</script>-->
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
        category: {
          name: '',
          breadcrumb: []
        },
        siteInfo: {
          codeFooter: ''
        },
        navigation: [],
        lists: []
      }
    },
    methods: {},
    async asyncData ({params}) {
      try {
        let {data} = await axios.get('http://123.206.65.112/channel?id=' + params.id, {})

        return {
          category: {...data.category},
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

<style scoped>

</style>
