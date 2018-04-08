<template>
  <tabbar>
    <tabbar-item :selected="path == '/'" link="/">
      <img slot="icon" src="../assets/b_tab/video_n.png">
      <img slot="icon-active" src="../assets/b_tab/video_p.png">
      <span slot="label">影音娱乐</span>
    </tabbar-item>

    <tabbar-item :selected="path == '/shop'" link="/shop">
      <img slot="icon" src="../assets/b_tab/shop_n.png">
      <img slot="icon-active" src="../assets/b_tab/shop_p.png">
      <span slot="label">餐饮商城</span>
    </tabbar-item>

    <tabbar-item :selected="path == '/video/ctrl'" link="/video/daoqictrl">
      <img slot="icon" style=" transform: scale(2.0);position: absolute;left: 0;bottom: 2px;"
           src="../assets/b_tab/ctrl_n.png">
      <!--<img slot="icon-active"   src="../assets/images/ctrl_n.png">-->
      <span slot="label"></span>
    </tabbar-item>

    <tabbar-item :selected="path == '/room'" link="/room">
      <img slot="icon" src="../assets/b_tab/room_n.png">
      <img slot="icon-active" src="../assets/b_tab/room_p.png">
      <span slot="label">客房服务</span>
    </tabbar-item>

    <tabbar-item :selected="path =='/mine'" link="/mine">
      <img slot="icon" src="../assets/b_tab/mine_n.png">
      <img slot="icon-active" src="../assets/b_tab/mine_p.png">
      <span slot="label">个人中心</span>
    </tabbar-item>

  </tabbar>
</template>
<style>
  .add {
    height: 40px;
    width: 40px;
    max-height: 40px;
  }

  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #FF6F00 !important;
  }
</style>
<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    name: 'AppFooter',
    components: {
      Tabbar,
      TabbarItem,
    },
    data() {
      return {
        msg: '',
        path: '/'
      }
    },
    mounted() {
      this.path = this.$router.currentRoute.path

    }
  }
</script>
