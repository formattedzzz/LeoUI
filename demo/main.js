
import Vue from 'vue'
import App from './app'
import LeoUI from '@src/leoui.js'
Vue.config.productionTip = false
Vue.use(LeoUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
