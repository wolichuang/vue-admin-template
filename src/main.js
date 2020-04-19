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
// 配置请求路径
axios.defaults.baseURL = 'api/private/v1/'
// 配置请求接口的时候 添加token
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
