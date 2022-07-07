import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 加载全局样式
import './style/index.less'
import { Button, NavBar, Toast, Form, Field, CellGroup, CountDown, Tabbar, TabbarItem  } from 'vant'

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(CountDown)
Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
