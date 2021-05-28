import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from './store'
import {request} from 'network/request'
// 插件
import '@/plugins/element/element'

Vue.config.productionTip = false
Vue.prototype.$request = request

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
