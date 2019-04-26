
import Vue from 'vue'
import App from './app'
import LeoUI from '@src/leoui.js'
Vue.config.productionTip = false
Vue.use(LeoUI)
/* eslint-disable */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
