// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import media from './components/video/index'
import Resource from 'vue-resource'
import vod from './components/video/video'
import live from './components/video/live'
import room from './components/room/index'
import shop from './components/shop/index'
import mine from './components/mine/index'
import ctrl from './components/ctrl/index'


import { Checker, CheckerItem } from 'vux'
import { ViewBox } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'
import { Scroller } from 'vux'
import { Tab, TabItem } from 'vux'
import { Group } from 'vux'
import { Toast } from 'vux'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.use(VueVirtualScroller)
Vue.component('toast', Toast)
Vue.component('group', Group)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('scroller', Scroller)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('view-box', ViewBox)
Vue.component('checker', Checker)
Vue.component('checker-item', CheckerItem)
Vue.use(VueRouter)

Vue.use(Resource);
Vue.prototype.common = {
  mac:"111",
  SERVER_URL:"http://192.168.2.6:8088/wisdom_hotel/remote/"
}
Vue.prototype.api = {
  livetype : "livetype"
}


Vue.prototype.api_post = function (url, success, fail) {

  if (url.indexOf("?") == -1) {
    url += "?now_time=" + new Date().getTime()
  }
  var local_url = this.common.SERVER_URL + url + "&mac=" + this.common.mac;
  // console.log(local_url)
  this.$http.get(local_url)
    .then(function (res) {
      if (res.data.code == 200) {
        success(res.data)
      } else {
        if (fail != null) {
          fail(res.data)
        } else {
          this.$vux.toast.text(res.data.msg, 'center')
        }
      }
    }, function (res) {
      this.$vux.toast.text('连接失败，请检查网络', 'center')
    })

};


const routes = [{
  path: '/',
  component: Home,
  children: [
    {
      path: '/',
      component: media,
      meta: {allowBack: false, title: '娱乐'},
      children: [
        {path: '/', component: vod},
        {path: 'live', component: live}
      ]
    },

    {path: '/room', component: room, meta: {allowBack: false, title: '订房'}},
    {path: '/ctrl', component: ctrl, meta: {allowBack: false, title: '遥控器'}},
    {path: '/shop', component: shop, meta: {allowBack: false, title: '购物'}},
    {path: '/mine', component: mine, meta: {allowBack: false, title: '我的'}}
  ]
}]



const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')


