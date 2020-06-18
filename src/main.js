import "babel-polyfill"; // 解决Ie9
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./element";
import * as filters from "./filtres/index"; // 全局过滤器
import "./role"; // 权限

import "./mock"; // 模拟数据

import "./assets/icons/iconfont";
import IconSvg from "./components/common/IconSvg.vue"; // svg组件

import Router from 'vue-router'

import VueAnalytics from 'vue-analytics';

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 注册全局组件（register global）
Vue.component("icon-svg", IconSvg);

// 注册全局实用程序过滤器（register global utility filters）.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-157813638-1',
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");