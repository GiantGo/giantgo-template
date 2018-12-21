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

<style lang="scss" scoped>
  @import "../assets/scss/colors";

  .lead {
    margin-bottom: 20px;
    font-size: 21px;
    font-weight: 200;
    line-height: 30px;
  }

  .brand {
    display: block;
    padding: 20px 15px;
  }

  .navbar-sub-category {
    margin-top: -15px;
    margin-bottom: -15px;
  }

  .navbar-blue {
    background-color: $dark-primary-color;
    border: none;
    border-radius: 0;
  }

  .navbar-blue .navbar-header {
    background-color: $dark-primary-color;
    border-bottom: 1px solid $light-primary-color;
  }

  .navbar-blue .navbar-header .navbar-toggle:focus,
  .navbar-blue .navbar-header .navbar-toggle:hover {
    background-color: $light-primary-color;
    border-color: $primary-color;
  }

  .navbar-toggle {
    background-color: $light-primary-color;
  }

  .navbar-blue .navbar-toggle .icon-bar {
    background-color: $dark-primary-color;
  }

  .navbar-blue .navbar-nav > li > a {
    color: $text;
  }

  .navbar-blue .navbar-nav > li > a:focus,
  .navbar-blue .navbar-nav > li > a:hover {
    background-color: $dark-primary-color;
  }

  .navbar-blue .navbar-nav > .active > a,
  .navbar-blue .navbar-nav > .active > a:focus,
  .navbar-blue .navbar-nav > .active > a:hover {
    background-color: $dark-primary-color;
  }

  .navbar-blue .navbar-collapse,
  .navbar-blue .navbar-header {
    margin-left: -15px;
    margin-right: -15px;
  }
</style>
