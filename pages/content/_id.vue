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
            <li><a :href="'/' + category.type + '/' + category._id + '/'">{{category.name}}</a></li>
            <li class="active">{{title}}</li>
          </ol>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-format="fluid"
               data-ad-layout-key="-72+eg+1g-3d+2z"
               data-ad-client="ca-pub-7524637416419319"
               data-ad-slot="5409166247"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({})
          </script>
          <div class="detail-info clearfix">
            <div class="title">
              <span class="name">{{title}}</span>
            </div>
            <div class="detail-thumbnail">
              <img class="logo" v-if="extensions" :src="extensions.thumbnail"/>
            </div>
            <div class="details">
              <div class="items">
                <span class="tit-name">Size:</span>
                <span class="size">{{extensions.size}}</span></div>
              <div class="items">
                <span class="tit-name">Date:</span>
                <span class="size">{{extensions.updateAt}}</span></div>
              <div class="items">
                <div class="size">
                  <div class="star-rate"></div>
                </div>
              </div>
              <div class="items">
                <div class="size">
                  <i class="iconfont icon-eye"></i> {{Number(reading.total).toLocaleString()}}
                </div>
              </div>
            </div>
          </div>
          <div class="comment-container">
            <div class="title">
              Comments
            </div>
            <div class="comments">
              <div class="comment-item">
                <div class="name">Spx</div>
                <div class="content">哈哈哈哈哈哈哈哈</div>
              </div>
            </div>
            <div class="comments">
              <div class="comment-item">
                <div class="name">Spx</div>
                <div class="content">哈哈哈哈哈哈哈哈</div>
              </div>
            </div>
            <div class="comments">
              <div class="comment-item">
                <div class="name">Spx</div>
                <div class="content">哈哈哈哈哈哈哈哈</div>
              </div>
            </div>
          </div>
          <div class="well text-muted" v-if="abstract">{{abstract}}</div>
          <div class="tags" v-if="tags.length">
            Tags：<span class="tag" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
          </div>
          <div class="play">
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
