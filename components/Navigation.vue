<template>
  <div>
    <div class="container hidden-xs">
      <div class="row">
        <div class="col-md-3">
          <a class="brand" href="/" :title="siteInfo.title">
            <img height="36" :alt="siteInfo.title" src="/img/logo.png">
          </a>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-blue">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Change</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand visible-xs-block" href="/" :title="siteInfo.title">
            <img height="20" :alt="siteInfo.title" src="/img/logo.png">
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-left">
            <li v-for="(nav, index) in navigation" :key="index" v-if="nav.isShow"
                :class="{active: nav.current}">
              <a
                :href="(nav.type ? ('/' + nav.type + '/' + nav._id + '/') : '/') "
                :title="nav.name">{{nav.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container" v-for="(nav, index) in navigation" :key="index" v-if="nav.current && nav.nodes">
      <div class="navbar-sub-category">
        <a class="btn btn-link" v-for="(node, index) in nav.nodes" :key="index"
           :href="'/' + node.type + '/' + node._id + '/'"
           :title="node.name"
           role="button">{{node.name}}</a>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      navigation: {
        type: Array,
        required: true
      },
      siteInfo: {
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

<style>

</style>
