<template>
  <div>
    <navigation :navigation="navigation" :site-info="siteInfo"></navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="detail-info clearfix">
            <div class="detail-thumbnail">
              <img class="logo" v-if="extensions" :src="extensions.thumbnail"/>
            </div>
            <div class="details">
              <div class="title">
                {{title}}
              </div>
              <div class="items">
                <span class="size">{{extensions.size}}</span>
                <span class="size">
                  <i class="iconfont icon-eye"></i> {{Number(reading.total).toLocaleString()}}
                </span>
              </div>
              <div class="items">
                <rate :length="5" v-model="rate"></rate>
              </div>
            </div>
          </div>
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
               data-ad-client="ca-pub-3164628254889272"
               data-ad-slot="5463726279"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({})
          </script>
          <div class="comment-container">
            <div class="title">
              Comments
            </div>
            <div class="comments">
              <div class="comment-item">
                <div class="name">siler</div>
                <div class="content">This game is so interesting.</div>
              </div>
            </div>
            <div class="comments">
              <div class="comment-item">
                <div class="name">eka</div>
                <div class="content">Game ini sangat menarik.</div>
              </div>
            </div>
            <div class="comments">
              <div class="comment-item">
                <div class="name">kumar</div>
                <div class="content">यह गेम बहुत दिलचस्प है।</div>
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
  import GlobalFooter from '~/components/GlobalFooter'
  import rate from '~/components/Rate'

  export default {
    components: {
      GlobalFooter,
      Navigation,
      rate
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
      rate: Number
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>


<style lang="scss" scoped>
  @import "../assets/scss/colors";

  .detail-info {
    margin-top: 5px;
    padding: 10px;
    background: $text;
    color: $primary-text;
  }

  .detail-info .title {
    height: 20px;
    line-height: 20px;
    font-size: 22px;
    display: inline-block;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .detail-info .title .iconfont {
    margin-left: 10px;
  }

  .detail-info .detail-thumbnail {
    width: 35%;
    float: left;
    margin-top: 0;
    text-align: center;
  }

  .detail-info .detail-thumbnail .items {
    position: relative;
    margin-top: 10px;
  }

  .game-download {
    width: auto;
    height: 40px;
    padding: 0 10px;
    text-align: center;

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

  .star-rate {
    display: inline-block;
    width: 100px;
    height: 20px;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAAA70lEQVR4AdXUIQjCQBTGcYNgMAt2BGGdZbHY28BeLKvaBIPJYLHYMf/tbX2w9V62OgZj2wljjKHP3W5FvK/cHe8Hd+/gRmpgfgalwVHa1UKWlCyHwAuKizFkQowiZmIKt6gqW1Po1dAzglioJlYnZIbFGgeXM3fCFgy5c8bFYY3F7B2eUL1y+jgqrp7hinfEIetAGc7X5rAhkRkJm86uYhMJLMLWPgc7Ae56vCM3Ad76QF+AvhYyJW/Ky2aWM9XBVV1acGXOlaJer3TwUJUF2E2Xg2rnoINPUvaMW3cesyflqYMPFsJvsOAhQ/P8E3wB75uY7oxINXcAAAAASUVORK5CYII=) 0 0 repeat-x;
    background-size: 20px;
  }

  .detail-info .detail-thumbnail img {
    width: auto;
    max-height: 100px;
  }

  .detail-info .details {
    padding: 10px 0 0 10px;
    box-sizing: border-box;
    overflow: hidden;
    float: left;
    width: 65%;
    text-align: center;
  }

  .detail-info .details .items {
    width: 100%;
    float: left;
  }

  .detail-info .details .items span {
    font-size: 14px;
  }

  .detail-info .details .items .tit-name {
    display: inline-block;
    width: 40px;
    color: $secondary-text;
  }

  .detail-info .details .items .size {
    text-align: start;
  }

  .detail-info .details .items .size + .size {
    margin-left: 10px;
  }

  .detail-info .details .items .size .icon-eye {
    vertical-align: middle;
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
    color: $text;
    background: $primary-color;
  }

  .comment-container {
    padding-bottom: 10px;
    background: $text;
    color: $secondary-text;
  }

  .comment-container .comment-item {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    padding: 20px 10px 2px 10px;
    border-bottom: 1px solid $divider-color;
  }

  .comment-container .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    border-bottom: 1px solid $divider-color;
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
    background: $text;
    color: $secondary-text;
    border: none;
  }
</style>

