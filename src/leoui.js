
import ActionSheet from './component/actionsheet/index.js'
import './style/common.styl'
let LeoUI = {
  ActionSheet
}
let install = function (Vue) {
  Object.keys(LeoUI).forEach((key) => {
    Vue.component(LeoUI[key].name, LeoUI[key])
  })
}
if (typeof window !== 'undefined' && window.Vue) { 
  window.Vue.use(install)
}
export {
  ActionSheet
}
export default {install}