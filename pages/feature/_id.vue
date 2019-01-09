<template>
  <game-content :id="id" :category="category" :site-info="siteInfo" :navigation="navigation"
                :readingList="readingList" :title="title" :url="url" :href="href" :user="user" :date="date"
                :reading="reading" :thumbnail="thumbnail" :media="media" :abstract="abstract" :content="content"
                :tags="tags" :extensions="extensions"></game-content>
</template>

<script>
  import axios from 'axios'
  import GameContent from '~/components/GameContent.vue'

  export default {
    components: {
      GameContent
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
        rate: 5
      }
    },
    methods: {},
    async asyncData ({params}) {
      try {
        let feature = await axios({
          method: 'get',
          url: 'http://123.206.65.112/api/features/' + params.id,
          data: {},
          headers: {
            Cookie: 'nodercmsSid=s%3A4gl9cR8lU3L29TMIj3KcoT4mKRTRBxo4.XGuj0BeIUbDJ0ovOBgDVkRVSxokjfSnooZ6V%2BxyQxhQ'
          }
        })
        let {data} = await axios.get('http://123.206.65.112/content?id=' + feature.data.extensions.contentId, {})
        return {
          id: feature.data.extensions.contentId,
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
</style>
