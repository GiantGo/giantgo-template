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
          <div class="page-header text-center">
            <h5>{{title}}</h5>
            <img class="logo" v-if="extensions" :src="extensions.thumbnail"/>
            <p class="social-bar">
              {{date | formatTime}}　<i class="iconfont icon-eye"></i> {{reading.total}}　
            </p>
          </div>
          <div class="well text-muted" v-if="abstract">{{abstract}}</div>
          <div class="game-download">
            <a href="https://play.google.com/store/apps/details?id=com.games.g2048">
              <img alt="download" src="/img/googleplay1.png"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.games.g2048">
              <img alt="download" src="/img/googleplay2.png"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.games.g2048">
              <img alt="download" src="/img/googleplay3.png"/>
            </a>
          </div>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-format="fluid"
               data-ad-layout-key="-72+eg+1g-3d+2z"
               data-ad-client="ca-pub-7524637416419319"
               data-ad-slot="5409166247"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({})
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
          <!--<ins class="adsbygoogle"-->
          <!--style="display:block"-->
          <!--data-ad-format="fluid"-->
          <!--data-ad-layout-key="-i2+e-f-4c+9b"-->
          <!--data-ad-client="ca-pub-7524637416419319"-->
          <!--data-ad-slot="5766598392"></ins>-->
          <!--<script>-->
          <!--(adsbygoogle = window.adsbygoogle || []).push({})-->
          <!--</script>-->
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
  import GlobalFooter from '~/components/GlobalFooter'

  export default {
    components: {
      Navigation,
      GlobalFooter
    },
    props: {
      id: String,
      category: Object,
      siteInfo: Object,
      navigation: Array,
      readingList: Object,
      title: String,
      url: String,
      href: String,
      user: Object,
      date: String,
      reading: Object,
      thumbnail: Object,
      media: Array,
      abstract: String,
      content: String,
      tags: Array,
      extensions: Object,
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .game-download {
    width: auto;
    height: 40px;
    padding: 0 10px;
    text-align: center;
    margin-bottom: 10px;
    a {
      display: inline-block;
      width: 33%;
      height: 100%;
    }
    img {
      width: auto;
      height: 100%;
      max-width: 100%;
    }
  }
</style>
