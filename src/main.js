import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 插件
import '@/plugins/element/element'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
