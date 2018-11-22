<template>
  <div>
    <navigation :navigation="navigation" :site-info="siteInfo"></navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <ol class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li v-for="(breadcrumb, index) in category.breadcrumb" :key="index">
              <a :href="'/' + breadcrumb.type + '/' + breadcrumb._id + '/'">{{breadcrumb.name}}</a>
            </li>
            <li><a :href="'/' + category.type + '/' + category._id + '/'">{{category.name}}</a></li>
            <li class="active">{{title}}</li>
          </ol>
          <div class="page-header text-center">
            <h5>{{title}}</h5>
            <img class="logo" v-if="extensions" :src="extensions.thumbnail"/>
            <p class="social-bar">
              {{date | formatTime}}　<i class="iconfont icon-eye"></i> {{reading.total}}　
            </p>
          </div>
          <div class="well text-muted" v-if="abstract">{{abstract}}</div>
          <!-- younagames -->
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7524637416419319"
               data-ad-slot="5520069230"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          <div class="detail-info">
            <div class="tag-tit">
              <span class="name">Details</span>
            </div>
            <div class="details">
              <div class="items">
                <span class="tit-name">Size:</span>
                <span class="size">{{extensions.size}}</span></div>
              <div class="items">
                <span class="tit-name">Version:</span>
                <span class="size">{{extensions.version}}</span></div>
              <div class="items">
                <span class="tit-name">Update Date:</span>
                <span class="size">{{extensions.updateAt}}</span>
              </div>
              <div class="items">
                <span class="tit-name">Author:</span>
                <span class="size">{{extensions.author}}</span>
              </div>
            </div>
          </div>
          <div class="tags" v-if="tags.length">
            Tags：<span class="tag" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
          </div>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-format="fluid"
               data-ad-layout-key="-i2+e-f-4c+9b"
               data-ad-client="ca-pub-7524637416419319"
               data-ad-slot="5766598392"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({})
          </script>
          <div>
            <a class="play-btn" :href="'/play/' + id + '/'">
              Play
            </a>
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
        id: '',
        category: {
          name: '',
          breadcrumb: []
        },
        siteInfo: {
          codeFooter: ''
        },
        navigation: [],
        readingList: {
          total: '',
          day: '',
          week: '',
          month: ''
        },
        title: '',
        url: '',
        href: '',
        user: '',
        date: '',
        reading: '',
        thumbnail: '',
        media: [],
        abstract: '',
        content: '',
        tags: [],
        extensions: {},
      }
    },
    methods: {},
    async asyncData ({params}) {
      try {
        let {data} = await axios.get('http://123.206.65.112/content?id=' + params.id, {})

        return {
          id: params.id,
          category: data.category,
          siteInfo: data.siteInfo,
          navigation: data.navigation,
          readingList: data.readingList,
          title: data.title,
          url: data.url,
          href: data.href,
          user: data.user,
          date: data.date,
          reading: data.reading,
          thumbnail: data.thumbnail,
          media: data.media,
          abstract: data.abstract,
          content: data.content,
          tags: data.tags,
          extensions: data.extensions
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
