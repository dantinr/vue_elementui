import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
