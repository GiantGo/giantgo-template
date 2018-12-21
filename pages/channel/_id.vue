<template>
  <div>
    <navigation :navigation="navigation" :site-info="siteInfo"></navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li v-for="(breadcrumb, index) in category.breadcrumb" :key="index">
              <a :href="'/' + breadcrumb.type + '/' + breadcrumb._id + '/'">{{breadcrumb.name}}</a>
            </li>
            <li class="active">{{category.name}}</li>
          </ol>
          <div class="row">
            <div class="col-md-6">
              <game-panel v-for="(list, index) in lists" :key="index" v-if="index % 2 === 0" :list="list"></game-panel>
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
            <div class="col-md-6">
              <game-panel v-for="(list, index) in lists" :key="index" v-if="index % 2 === 1" :list="list"></game-panel>
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
  import GamePanel from '~/components/GamePanel'

  export default {
    components: {
      GlobalFooter,
      Navigation,
      GamePanel
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
