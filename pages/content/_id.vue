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

<style lang="scss" scoped>
  @import "../../assets/scss/colors";

  .detail-info {
    margin-top: 10px;
    border-top: 2px solid $color03;
    border-bottom: 2px solid $color03;
    padding: 10px;
    background: $color02;
    color: $color06;
  }

  .detail-info .title {
    height: 20px;
    line-height: 20px;
  }

  .detail-info .title .iconfont {
    margin-left: 10px;
  }

  .detail-info .detail-thumbnail {
    width: 35%;
    float: left;
    margin-top: 20px;
  }

  .detail-info .detail-thumbnail .items {
    position: relative;
    margin-top: 10px;
  }

  .star-rate {
    display: inline-block;
    width: 100px;
    height: 20px;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAAA70lEQVR4AdXUIQjCQBTGcYNgMAt2BGGdZbHY28BeLKvaBIPJYLHYMf/tbX2w9V62OgZj2wljjKHP3W5FvK/cHe8Hd+/gRmpgfgalwVHa1UKWlCyHwAuKizFkQowiZmIKt6gqW1Po1dAzglioJlYnZIbFGgeXM3fCFgy5c8bFYY3F7B2eUL1y+jgqrp7hinfEIetAGc7X5rAhkRkJm86uYhMJLMLWPgc7Ae56vCM3Ad76QF+AvhYyJW/Ky2aWM9XBVV1acGXOlaJer3TwUJUF2E2Xg2rnoINPUvaMW3cesyflqYMPFsJvsOAhQ/P8E3wB75uY7oxINXcAAAAASUVORK5CYII=) 0 0 repeat-x;
    background-size: 20px;
  }

  .detail-info .detail-thumbnail img {
    width: 100%;
  }

  .detail-info .details {
    padding: 10px 0 0 20px;
    box-sizing: border-box;
    overflow: hidden;
    float: left;
    width: 65%;
  }

  .detail-info .details .items {
    width: 100%;
    float: left;
    padding: 5px 0;
  }

  .detail-info .details .items span {
    font-size: 14px;
  }

  .detail-info .details .items .tit-name {
    display: inline-block;
    width: 40px;
    color: $color04;
  }

  .detail-info .details .items .size {
    text-align: start;
    margin-left: 12px;
  }

  .detail-info .details .items .tit-name + .size {
    display: inline-block;
    font-size: 14px;
    margin-left: 10px;
  }

  .play {
    height: 100px;
  }

  .play-btn {
    position: relative;
    display: inline-block;
    top: 30px;
    margin-left: -100px;
    left: 50%;
    right: 0;
    width: 200px;
    height: 40px;
    line-height: 40px;
    border-radius: 30px;
    text-align: center;
    z-index: 999;
    transform: translate(-50%, -90%);
    animation: scales .5s infinite linear;
    color: $color08;
    background: $color10;
  }

  .comment-container {
    padding-bottom: 10px;
    background: $color02;
    color: $color06;
  }

  .comment-container .comment-item {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    padding: 15px 10px;
    border-top: 2px solid $color03;
  }

  .comment-container .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .comment-container .comment-item .content {
    margin-left: 10px;
  }

  @keyframes scales {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .content p {
    margin: 0 0 20px 0;
    font-size: 16px;
    line-height: 1.7;
  }

  .content img,
  .content iframe,
  .content embed {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  .content table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px
  }

  .content table > tbody > tr > td, .content table > tbody > tr > th, .content table > tfoot > tr > td, .content table > tfoot > tr > th,
  .content table > thead > tr > td, .content table > thead > tr > th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd
  }

  .content table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd
  }

  .content table > caption + thead > tr:first-child > td, .content table > caption + thead > tr:first-child > th,
  .content table > colgroup + thead > tr:first-child > td, .content table > colgroup + thead > tr:first-child > th,
  .content table > thead:first-child > tr:first-child > td, .content table > thead:first-child > tr:first-child > th {
    border-top: 0
  }

  .content table > tbody + tbody {
    border-top: 2px solid #ddd
  }

  .well {
    background: $color02;
    color: $color06;
    border: none;
  }

  .tags {
    margin-top: 20px;
    color: $color04;
  }

  .tag {
    padding: 2px 5px;
    border-radius: 5px;
    background: $color04;
    color: $color02;
  }
</style>
