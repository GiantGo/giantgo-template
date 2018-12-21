<template>
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
</template>

<script>
  export default {
    components: {},
    props: {
      list: {
        type: Object,
        required: true
      }
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/colors";

</style>
