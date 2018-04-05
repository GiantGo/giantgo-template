<template>
  <el-col :span="24">
    <h1>{{form.title}}</h1>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item
        v-for="(field, index) in form.fields"
        :prop="'fields.' + index + '.value'"
        :label="field.displayName"
        :key="field.id"
        :rules="field.rules"
        :error="field.error">
        <el-input v-model="field.value"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click.native="submit" :loading="isSubmitting">保存</el-button>
  </el-col>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'

  export default {
    data () {
      return {
        form: {},
        isSubmitting: false
      }
    },
    methods: {
      submit () {
        this.$refs['form'].validate((valid) => {
          if (!valid) {
            return
          }

          console.log(this.form)
        })
      }
    },
    async asyncData ({params}) {
      try {
        let {data} = await axios.post('http://uat-api.smarket.net.cn/member/form/GetForNewForm', {
          memberFormId: params.id
        })

        let form = data.body.content

        _.forEach(form.items, item => {
          item.value = ''
        })

        return {
          form: {
            title: form.title,
            fields: form.items
          }
        }
      }
      catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style>

</style>
