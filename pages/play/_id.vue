<template>
  <div>
    <object width="100%" height="100%" :data="extensions.url"></object>
    <div class="ads">
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-format="fluid"
           data-ad-layout-key="-i2+e-f-4c+9b"
           data-ad-client="ca-pub-7524637416419319"
           data-ad-slot="8380843355"></ins>
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
          extensions: data.extensions
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  object {
    position: absolute;
    width: 100%;
    height: 89%;
  }

  .ads {
    position: fixed;
    width: 100%;
    background-color: #d5d5d5;
    bottom: 0;
    height: 11%;
  }
</style>
