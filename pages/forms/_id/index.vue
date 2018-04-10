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
        <el-input v-model="field.value" v-if="field.displayType === '1'"/>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          v-model="field.value"
          v-if="field.fieldType.toLowerCase() === '2'">
        </el-input>
        <el-input v-model="field.value" type="password" v-if="field.displayType === '10'"/>
        <el-radio-group v-model="field.value" v-if="field.displayType === '3'">
          <el-radio
            v-for="item in field.options"
            :label="item.optionValue"
            :key="item.optionId">
            {{item.option}}
          </el-radio>
        </el-radio-group>
        <el-select v-model="field.value" placeholder="请选择" v-if="field.displayType === '4'" value="">
          <el-option
            v-for="item in field.options"
            :key="item.optionId"
            :label="item.optionValue"
            :value="item.optionId">
          </el-option>
        </el-select>
        <el-checkbox-group v-model="field.value" v-if="field.displayType === '5'">
          <el-checkbox
            v-for="item in field.options"
            :label="item.optionValue"
            :key="item.optionId">
            {{item.optionValue}}
          </el-checkbox>
        </el-checkbox-group>
        <el-upload
          v-if="field.displayType === '7' || field.displayType === '8'"
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="field.url" :src="field.url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-date-picker
          type="datetime" v-model="field.value" v-if="field.fieldType.toLowerCase() === 'datetime'"/>
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
        this.$refs['form'].validate(valid => {
          if (!valid) {
            return
          }

          console.log(this.form)
        })
      },
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      }
    },
    async asyncData ({params}) {
      try {
        let {data} = await axios.post(
          'http://s2-api.smarket.net.cn/member/form/GetForNewForm',
          {
            memberFormId: params.id
          }
        )

        let form = data.body.content

        _.forEach(form.items, item => {
          item.value = ['5', '6'].indexOf(item.displayType) > -1 ? [] : ''

          if (['7', '8'].indexOf(item.displayType) > -1) {
            item.url = undefined
          }
        })

        return {
          form: {
            title: form.title,
            fields: form.items
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
