<template>
  <div>
    <header>
      <div class="icon-btn">
        <a title="back" :href="'/content/' + id + '/'">
          <i class="iconfont icon-back"></i>
        </a>
      </div>
      <a class="download" title="download" :href="extensions.downloadUrl">
        <img alt="download" src="/img/googleplay-play.png"/>
      </a>
      <div class="icon-btn"></div>
    </header>
    <object width="100%" height="100%" :data="extensions.url"></object>
    <div class="ads">
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-format="fluid"
           data-ad-layout-key="-i2+e-f-4c+9b"
           data-ad-client="ca-pub-3164628254889272"
           data-ad-slot="9957983983"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    </div>
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
        extensions: {
          url: ''
        }
      }
    },
    methods: {},
    async asyncData ({params}) {
      try {
        let {data} = await axios.get('http://123.206.65.112/content?id=' + params.id, {})

        return {
          id: params.id,
          siteInfo: data.siteInfo,
          navigation: data.navigation,
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

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $dark-primary-color;
    border: none;
    border-radius: 0;
    margin-bottom: 0;

    .icon-btn {
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
    }

    .iconfont {
      font-size: 30px;
      font-weight: bold;
      color: $text;
    }

    .download {
      height: 100%;

      img {
        max-height: 40px;
      }
    }
  }

  object {
    position: absolute;
    width: 100%;
    height: calc(89% - 50px);
  }

  .ads {
    position: fixed;
    width: 100%;
    background-color: $text;
    bottom: 0;
    height: 11%;
  }
</style>
