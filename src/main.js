import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index.js'
import * as echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import elementResizeDetectorMaker from "element-resize-detector"
//import "default-passive-events";
// 解决警告[Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952

import * as tool from './tools/tool'

  

import { fontSize } from './tools/fontSize'
import '@/mock/mock'

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.prototype.$fontSize = fontSize
Vue.prototype.$api = api;
Vue.prototype.$tool = tool;
Vue.prototype.$erd = elementResizeDetectorMaker()



// require('./tools/layout')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
