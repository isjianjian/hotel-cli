<template>
 <div style="background: #FFFFFF">
   <div >
     <tab active-color="#FF6F00" :line-width="2" :scroll-threshold="6">
       <tab-item :disabled="true" ></tab-item>
       <tab-item :selected="path == '/'" @on-item-click="toVod">点播</tab-item>
       <tab-item :selected="path == '/live'" @on-item-click="toLive">直播</tab-item>
       <tab-item>音乐</tab-item>
       <tab-item>游戏</tab-item>
       <tab-item><img  style="margin-top: 10px" height="26"  src="../../assets/video/seacrh.png"></tab-item>
     </tab>
   </div>
   <router-view v-bind:style="{height: root_style + 'px'}" class="router-view"></router-view>
 </div>
</template>

<script>
    export default {
        name: "media",
        data() {
           return {
               root_style: document.documentElement.clientHeight - 97,
               path: '/'
           }
        },
        mounted() {
           this.path = this.$router.currentRoute.path
        },
        methods:{
          toVod(){
            console.log("toVod")
            this.$router.replace('/')
          },
          toLive(){
            console.log("toLive")
            this.$router.replace('/live')
          }
        }

    }
</script>

<style scoped>


</style>
