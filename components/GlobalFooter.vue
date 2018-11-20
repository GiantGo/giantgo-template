<template>
  <div>
    <br><br><br>
    <div class="jumbotron clear-bottom-margin">
      <div class="container text-center text-muted">
        <div v-html="siteInfo.codeFooter"></div>
        <small>Powered by Reserve</small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
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
