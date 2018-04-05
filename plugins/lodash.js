import Vue from 'vue'
import lodash from 'lodash'
import vueLodash from 'vue-lodash'

export default () => {
  Vue.use(vueLodash, lodash)
}
