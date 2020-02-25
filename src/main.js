import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入第三方插件
import './plugins/element.js'
// 导入字体
import './assets/fonts/iconfont.css'
// 全局样式
import './assets/css/global.css'
// axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
