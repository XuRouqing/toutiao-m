import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 加载全局样式
import './style/index.less'
import { Button, NavBar, Toast, Form, Field, CellGroup, CountDown, Tabbar, 
  TabbarItem, Image as VanImage, Grid, GridItem, Cell, Dialog, Search,
  Tab, Tabs } from 'vant'

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(CountDown)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(VanImage)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Cell)
Vue.use(Dialog)
Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
